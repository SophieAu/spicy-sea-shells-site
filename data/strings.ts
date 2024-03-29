import { Crosspost } from '../src/types';
import { paths } from './config';

export type Page = 'blog' | 'about' | 'notFound';

const Shared = {
  Footer: {
    preImage: 'Made with',
    imageAlt: 'a chili',
    postImage: 'by the Spicy Sea Shells',
  },
  Header: {
    title: 'Spicy Sea Shells',
    introExtended:
      'Who are we? We are a collective of software developers, business analysts and quality analysts who met on a training course by ThoughtWorks',
    introShort:
      'We are a collective of software developers, business analysts and quality analysts.',
    blogCTA: `Together we're running the [Spicy Blog](${paths.blog})`,
    logoAlt: 'Spicy Sea Shells logo',
  },
};

const about = {
  pageTitle: 'About | Spicy Sea Shells',
  pageDescription:
    'About page of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
  socialMediaAlt: ({ platform }: { platform: string }) => `logo of ${platform}`,
};

const blog = {
  pageTitle: 'Spicy Blog | Spicy Sea Shells',
  pageDescription:
    'Blog of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
  title: 'Spicy Blog',
  hero: `We're the [Spicy Sea Shells](${paths.about}) and this is our blog.`,
  latestHeading: 'Latest',
  homeLinkAlt: 'Homepage / Blog',
  aboutLink: 'About',
};

const Home = {
  pageTitle: 'Spicy Sea Shells',
  pageDescription:
    'Homepage of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
};

const Post = {
  pageTitle: ({ title }: { title: string }) => `${title} | Spicy Sea Shells`,
  pageDescription: ({ title }: { title: string }) =>
    `Blog of the Spicy Sea Shells | Blogpost about ${title}`,
  crosspost: ({ hasPrefix, site, url }: Crosspost) =>
    `This is a crosspost from${hasPrefix ? ' the' : ''} [${site}](${url}).`,
  author: ({ author }: { author?: string }) => `By ${author}`,
};

const notFound = {
  pageTitle: '404 | Spicy Sea Shells',
  pageDescription: 'Page not found',
  heading: 'Oh No!',
  body: `This page doesn't seem to exist. Maybe check out the [blog](${paths.blog}) instead?`,
};

export default { ...Shared, about, blog, Home, Post, notFound };
