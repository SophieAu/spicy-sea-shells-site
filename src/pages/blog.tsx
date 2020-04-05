import { graphql } from 'gatsby';
import React from 'react';

import { paths, slugs } from '../../data/config';
import strings from '../../data/strings';
import BlogWrapper from '../components/BlogWrapper';
import Link from '../components/Link';
import MarkdownWithLink from '../components/MarkdownWithLink';
import PostMeta from '../components/PostMeta';
import { GraphQLResponse, Post } from '../types';
import * as styles from './blog.styles';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      ...postList
    }
  }
`;

const Blog: React.FC<GraphQLResponse> = ({ data }) => (
  <BlogWrapper
    title={strings.blog.pageTitle}
    description={strings.blog.pageDescription}
    slug={slugs.blog}
  >
    <section>
      <h1 className={styles.heroTitle}>{strings.blog.title}</h1>
      <MarkdownWithLink className={styles.heroText}>{strings.blog.hero}</MarkdownWithLink>
      <p className={styles.heroText}>{strings.Header.introExtended}</p>
    </section>

    <section>
      <h1 className={styles.postsTitle}>{strings.blog.latestHeading}</h1>
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
          <h2 className={styles.postTitle}>
            <Link to={`${paths.articleBase}/${slug}`}>{title}</Link>
          </h2>
          <PostMeta date={date} author={author} />
          <p className={styles.postExcerpt}>{excerpt}</p>
        </li>
      );
    })}
  </ul>
);

export default Blog;
