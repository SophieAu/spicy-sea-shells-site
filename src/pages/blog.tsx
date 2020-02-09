import './blog.scss';
import '../main.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import strings from '../../data/strings';
import { Intro } from '../components/_shared/headerFragments';
import PostList from '../components/blog/PostList';
import Wrapper from '../components/blog/Wrapper';
import MarkdownWithLink from '../components/MarkdownWithLink';
import SEO from '../components/SEO';
import { GraphQLResponse } from '../types';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      ...postList
    }
  }
`;

const Blog: React.FC<GraphQLResponse> = ({ data }) => (
  <>
    <SEO
      title={strings.Blog.pageTitle}
      description={strings.Blog.pageDescription}
      slug={slugs.blog}
    />
    <Wrapper>
      <section className="hero-section">
        <h1>{strings.Blog.title}</h1>
        <MarkdownWithLink className="hero-text">{strings.Blog.hero}</MarkdownWithLink>
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
