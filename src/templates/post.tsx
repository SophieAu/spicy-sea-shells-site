import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import { slugs } from '../../data/config';
import copy from '../../data/strings';
import BlogWrapper from '../components/BlogWrapper';
import MarkdownWithLink from '../components/MarkdownWithLink';
import PostMeta from '../components/PostMeta';
import { PostResponse } from '../types';
import { getSocialMediaHandle } from '../util';
import * as styles from './post.styles';

const strings = copy.Post;

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      ...singlePost
    }
  }
`;

const Post: React.FC<PostResponse> = props => {
  const { frontmatter, body, excerpt, fields } = props.data.mdx;
  const { title, slug, author, date, crosspost } = frontmatter;

  return (
    <BlogWrapper
      title={strings.pageTitle({ title: title })}
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
            {strings.crosspost({ ...crosspost })}
          </MarkdownWithLink>
        )}
        <div className={styles.body}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </article>
    </BlogWrapper>
  );
};

export default Post;
