import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import '../main.scss';
import './post.scss';

import commentBox from 'commentbox.io';
import { graphql } from 'gatsby';
import React, { useEffect } from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import MarkdownWithLink from '../components/_shared/MarkdownWithLink';
import SEO from '../components/_shared/SEO';
import PostMeta from '../components/blog/PostMeta';
import Wrapper from '../components/blog/Wrapper';
import { PostResponse } from '../types';
import { getSocialMediaHandle } from '../util';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...singlePost
    }
  }
`;

const Post: React.FC<PostResponse> = props => {
  const { frontmatter, html } = props.data.markdownRemark;
  const { title, slug, author, date, crosspost } = frontmatter;

  return (
    <>
      <SEO
        title={strings.Post.pageTitle({ title: title })}
        description={strings.Post.pageDescription({ title: title })}
        slug={`${slugs.articleBase}/${slug}`}
        creator={getSocialMediaHandle(author, 'twitter')}
      />
      <Wrapper>
        <article id="post">
          <h1>{title}</h1>
          <PostMeta author={author} date={date} />
          {!!crosspost && (
            <MarkdownWithLink
              className="crosspost"
              markdownText={strings.Post.crosspost({ ...crosspost })}
            />
          )}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <CommentBox />
      </Wrapper>
    </>
  );
};

const CommentBox = () => {
  useEffect(() => {
    const removeCommentBox = commentBox('5655957052850176-proj');
    return removeCommentBox();
  }, []);

  return <div className="commentbox" />;
};

export default Post;
