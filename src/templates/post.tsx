import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import '../main.scss';
import './post.scss';

import commentBox from 'commentbox.io';
import { graphql } from 'gatsby';
import React, { useEffect } from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import SEO from '../components/_shared/SEO';
import Wrapper from '../components/blog/Wrapper';
import { getName, getSocialMediaHandle } from '../helpers';
import { PostFrontmatter, SingleGraphQLResponse } from '../types';

const Post: React.FC<SingleGraphQLResponse> = ({ data: { markdownRemark } }) => (
  <>
    <HelmetData {...markdownRemark.frontmatter} />
    <Wrapper>
      <article id="post">
        <Frontmatter {...markdownRemark.frontmatter} />
        <div className="post-body" dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </article>
      <CommentBox />
    </Wrapper>
  </>
);

const HelmetData: React.FC<PostFrontmatter> = ({ title, slug, author }) => (
  <SEO
    title={strings.Post.pageTitle({ title })}
    description={strings.Post.pageDescription({ title })}
    slug={`${slugs.articleBase}/${slug}`}
    creator={getSocialMediaHandle(author, 'twitter')}
  />
);

const Frontmatter: React.FC<PostFrontmatter> = ({ title, author, date, crosspost }) => (
  <>
    <h1>{title}</h1>
    <div className="meta">
      <p className="author">{strings.Post.author({ author: getName(author) })}</p>
      <p className="date">{date}</p>
    </div>
    {!!crosspost && (
      <div className="crosspost">
        {`${strings.Post.crosspost({ hasPrefix: crosspost.hasPrefix })} `}
        <a href={crosspost.url}>{crosspost.site}</a>.
      </div>
    )}
  </>
);

const CommentBox = () => {
  useEffect(() => {
    const removeCommentBox = commentBox('5655957052850176-proj');
    return removeCommentBox();
  }, []);

  return <div className="commentbox" />;
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "DD MMMM YYYY")
        slug
        crosspost {
          url
          site
          hasPrefix
        }
      }
      html
    }
  }
`;

export default Post;
