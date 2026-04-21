import { paths } from './config';

const internalLink = (text: string, url: string) => `<a href="${url}">${text}</a>`
const externalLink = (text: string, url: string) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`

export const global = {
  footer: {
    preImage: 'Made with',
    imageAlt: 'a chili',
    postImage: 'by the Spicy Sea Shells',
  },
  header: {
    title: 'Spicy Sea Shells',
    introExtended:
      'Who are we? We are a collective of software developers, business analysts and quality analysts who met on a training course by ThoughtWorks',
    introShort:
      'We are a collective of software developers, business analysts and quality analysts.',
    blogCTA: `Together we're running the ${internalLink("Spicy Blog", paths.blog)}`,
    logoAlt: 'Spicy Sea Shells logo',
  },
};

export const about = {
  pageTitle: 'About | Spicy Sea Shells',
  pageDescription:
    'About page of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
  socialMediaAlt: (platform: string) => `logo of ${platform}`,
};

export const blog = {
  pageTitle: 'Spicy Blog | Spicy Sea Shells',
  pageDescription:
    'Blog of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
  title: 'Spicy Blog',
  hero: `We're the ${internalLink("Spicy Sea Shells", paths.about)} and this is our blog.`,
  latestHeading: 'Latest',
  homeLinkAlt: 'Homepage / Blog',
  aboutLink: 'About',
};

export const home = {
  pageTitle: 'Spicy Sea Shells',
  pageDescription:
    'Homepage of the Spicy Sea Shells, a collective of software developers, business analysts and quality analysts',
};

export const post = {
  pageTitle: (title: string) => `${title} | Spicy Sea Shells`,
  crosspost: (hasPrefix: boolean, site: string, url: string) =>
    `This is a crosspost from${hasPrefix ? ' the' : ''} ${externalLink(site, url)}.`,
  author: (name: string) => `By ${name}`,
};

export const notFound = {
  pageTitle: '404 | Spicy Sea Shells',
  pageDescription: 'Page not found',
  heading: 'Oh No!',
  body: `This page doesn't seem to exist. Maybe check out the ${internalLink("blog", paths.blog)} instead?`,
};
