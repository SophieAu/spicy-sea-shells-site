import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import Wrapper from '../components/blog/Wrapper';
import commentBox from 'commentbox.io';
import '../main.scss';
import './post.scss';
import { SingleGraphQLResponse, PostFrontmatter } from '../types';
import strings from '../../data/strings';
import SEO from '../components/_shared/SEO';

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

const HelmetData: React.FC<PostFrontmatter> = ({ title, slug }) => (
  <SEO
    title={`${title} | ${strings.Post.pageTitle}`}
    description={`${strings.Post.description} ${title}`}
    slug={`article/${slug}`}
  />
);

const Frontmatter: React.FC<PostFrontmatter> = ({ title, author, date, crosspost }) => (
  <>
    <h1>{title}</h1>
    <div className="meta">
      <p className="author">{`By ${author}`}</p>
      <p className="date">{date}</p>
    </div>
    {!!crosspost && (
      <div className="crosspost">
        {`${strings.Post.crosspost} ${
          crosspost.hasPrefix ? `${strings.Post.crosspostPrefix} ` : ''
        }`}
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
