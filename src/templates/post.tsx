import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './post.scss';

import commentBox from 'commentbox.io';
import { graphql } from 'gatsby';
import React, { useEffect } from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import BlogWrapper from '../components/BlogWrapper';
import MarkdownWithLink from '../components/MarkdownWithLink';
import PostMeta from '../components/PostMeta';
import { Crosspost as CrosspostType, PostResponse } from '../types';
import { getSocialMediaHandle } from '../util';

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
        <h1>{title}</h1>
        <PostMeta author={author} date={date} />
        {!!crosspost && <Crosspost crosspost={crosspost} />}
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <CommentBox />
    </BlogWrapper>
  );
};

const Crosspost: React.FC<{ crosspost: CrosspostType }> = ({ crosspost }) => (
  <MarkdownWithLink className="crosspost">
    {strings.Post.crosspost({ ...crosspost })}
  </MarkdownWithLink>
);

const CommentBox = () => {
  useEffect(() => {
    const removeCommentBox = commentBox('5655957052850176-proj');
    return removeCommentBox;
  }, []);

  return <div className="commentbox" />;
};

export default Post;
