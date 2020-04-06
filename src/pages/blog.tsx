import { graphql } from 'gatsby';
import React from 'react';

import { paths, slugs } from '../../data/config';
import copy from '../../data/strings';
import BlogWrapper from '../components/BlogWrapper';
import Link from '../components/Link';
import MarkdownWithLink from '../components/MarkdownWithLink';
import PostMeta from '../components/PostMeta';
import { GraphQLResponse, Post } from '../types';
import * as styles from './blog.styles';

const strings = copy.blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      ...postList
    }
  }
`;

const Blog: React.FC<GraphQLResponse> = ({ data }) => (
  <BlogWrapper title={strings.pageTitle} description={strings.pageDescription} slug={slugs.blog}>
    <section>
      <h1 className={styles.heroTitle}>{strings.title}</h1>
      <MarkdownWithLink className={styles.heroText}>{strings.hero}</MarkdownWithLink>
      <p className={styles.heroText}>{copy.Header.introExtended}</p>
    </section>

    <section>
      <h2 className={styles.postsTitle}>{strings.latestHeading}</h2>
      <PostList posts={data.allMarkdownRemark.edges} />
    </section>
  </BlogWrapper>
);

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <ul className={styles.postList}>
    {posts.map(post => {
      const { excerpt, id, frontmatter } = post.node;
      const { slug, author, title, date } = frontmatter;

      return (
        <li key={id}>
          <h3 className={styles.postTitle}>
            <Link to={`${paths.articleBase}/${slug}`}>{title}</Link>
          </h3>
          <PostMeta date={date} author={author} />
          <p className={styles.postExcerpt}>{excerpt}</p>
        </li>
      );
    })}
  </ul>
);

export default Blog;
