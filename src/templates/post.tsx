import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import BlogWrapper from '../components/BlogWrapper';
import MarkdownWithLink from '../components/MarkdownWithLink';
import PostMeta from '../components/PostMeta';
import { PostResponse } from '../types';
import { getSocialMediaHandle } from '../util';
import * as styles from './post.styles';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...singlePost
      fields {
        socialImage {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;

const Post: React.FC<PostResponse> = props => {
  const { frontmatter, html, excerpt, fields } = props.data.markdownRemark;
  const { title, slug, author, date, crosspost } = frontmatter;

  return (
    <BlogWrapper
      title={strings.Post.pageTitle({ title: title })}
      description={excerpt}
      slug={`${slugs.articleBase}/${slug}`}
      creator={getSocialMediaHandle(author, 'twitter')}
      ogImage={fields.socialImage.childImageSharp.original.src}
    >
      <article id="post">
        <h1 className={styles.title}>{title}</h1>
        <PostMeta author={author} date={date} />
        {!!crosspost && (
          <MarkdownWithLink className={styles.crosspost}>
            {strings.Post.crosspost({ ...crosspost })}
          </MarkdownWithLink>
        )}
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </BlogWrapper>
  );
};

export default Post;
