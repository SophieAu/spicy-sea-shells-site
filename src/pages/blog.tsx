import './blog.scss';
import '../main.scss';

import { graphql } from 'gatsby';
import React from 'react';

import strings from '../../data/strings';
import { Intro } from '../components/_shared/headerFragments';
import SEO from '../components/_shared/SEO';
import PostList from '../components/blog/PostList';
import Wrapper from '../components/blog/Wrapper';
import { GraphQLResponse } from '../types';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "DD MMMM YYYY")
            slug
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;

const Blog: React.FC<GraphQLResponse> = ({ data }) => (
  <>
    <SEO title={strings.Blog.pageTitle} description={strings.Blog.description} slug="blog" />
    <Wrapper>
      <section className="hero-section">
        <h1>{strings.Blog.title}</h1>
        <p className="hero-text">
          {`${strings.Blog.heroPreLink} `}
          <a href="/about">{strings.Blog.heroLink}</a>
          {` ${strings.Blog.heroPostLink}`}
        </p>
        <Intro className="hero-text" />
      </section>
      <section className="posts">
        <h1>{strings.Blog.latestHeading}</h1>
        <PostList posts={data.allMarkdownRemark.edges} />
      </section>
    </Wrapper>
  </>
);

export default Blog;
