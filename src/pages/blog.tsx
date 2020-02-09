import './blog.scss';
import '../main.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { paths, slugs } from '../../data/config';
import strings from '../../data/strings';
import { Intro } from '../components/_shared/headerFragments';
import Link from '../components/Link';
import MarkdownWithLink from '../components/MarkdownWithLink';
import PostMeta from '../components/PostMeta';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import { GraphQLResponse, Post } from '../types';

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

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <ul id="post-list">
    {posts.map(post => {
      const { excerpt, id, frontmatter } = post.node;
      const { slug, author, title, date } = frontmatter;

      return (
        <li key={id}>
          <h2 className="title">
            <Link to={`${paths.articleBase}/${slug}`}>{title}</Link>
          </h2>
          <PostMeta date={date} author={author} />
          <p className="excerpt">{excerpt}</p>
        </li>
      );
    })}
  </ul>
);

export default Blog;
