import './blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { paths, slugs } from '../../data/config';
import strings from '../../data/strings';
import BlogWrapper from '../components/BlogWrapper';
import Link from '../components/Link';
import MarkdownWithLink from '../components/MarkdownWithLink';
import PostMeta from '../components/PostMeta';
import { GraphQLResponse, Post } from '../types';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      ...postList
    }
  }
`;

const Blog: React.FC<GraphQLResponse> = ({ data }) => (
  <BlogWrapper
    title={strings.Blog.pageTitle}
    description={strings.Blog.pageDescription}
    slug={slugs.blog}
  >
    <section className="hero-section">
      <h1>{strings.Blog.title}</h1>
      <MarkdownWithLink className="hero-text">{strings.Blog.hero}</MarkdownWithLink>
      <p className="hero-text">{strings.Header.introExtended}</p>
    </section>
    <section className="posts">
      <h1>{strings.Blog.latestHeading}</h1>
      <PostList posts={data.allMarkdownRemark.edges} />
    </section>
  </BlogWrapper>
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
