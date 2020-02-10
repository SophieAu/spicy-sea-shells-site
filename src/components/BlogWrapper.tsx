import './BlogWrapper.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { paths } from '../../data/config';
import strings from '../../data/strings';
import Footer from './Footer';
import Layout from './Layout';
import Link from './Link';

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      ...blogHeaderLogo
    }
  }
`;

interface Props {
  title: string;
  description: string;
  slug: string;
  creator?: string;
  children?: React.ReactNode;
}

const BlogWrapper: React.FC<Props> = ({ children, title, description, slug, creator }) => (
  <Layout id="blog" title={title} description={description} slug={slug} creator={creator}>
    <BlogHeader />
    <main className="body">{children}</main>
    <Footer />
  </Layout>
);

const BlogHeader = () => (
  <header className="header">
    <Link className="header-logo" to={paths.blog} ariaLabel={strings.Blog.homeLinkAlt}>
      <Img fluid={useStaticQuery(query).file.childImageSharp.fluid} alt={strings.Header.logoAlt} />
    </Link>
    <nav className="header-nav">
      <Link to={paths.about}>{strings.Blog.aboutLink}</Link>
    </nav>
  </header>
);

export default BlogWrapper;
