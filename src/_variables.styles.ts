export const color = {
  black: '#260f0f',
  white: '#fff',
  primary: '#f55',
  primaryDim: '#ffdede',
  footer: '#4b7f40',
  nonHighlightText: `#737373`,
};

export const FOOTER_HEIGHT = '4rem';
export const BLOG_HEADER_HEIGHT = '4rem';
export const SIDEBAR_WIDTH = `22rem`;

export const fontWeight = {
  thin: 100,
  xLight: 200,
  light: 300,
  normal: 400, //regular
  medium: 500,
  semiBold: 600,
  bold: 700,
  xBold: 800,
  black: 900,
  xBlack: 950,
};

export const screenSize = {
  XL: `and (min-width: 1440px)`,
  L: `and (min-width: 1024px) and (max-width: 1439px)`,
  L_MAX: `and (max-width: 1439px)`,
  L_MIN: `and (min-width: 1024px)`,
  M: `and (min-width: 768px) and (max-width: 1023px)`,
  M_MAX: `and (max-width: 1023px)`,
  M_MIN: `and (min-width: 768px)`,
  S: ` and (max-width: 767px)`,
};

const fontFamilyRegular = `'Source Sans Pro', sans-serif`;
const fontFamilyCode = `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`;

export const font = {
  footer: `${fontWeight.light} 1.125rem/${FOOTER_HEIGHT} ${fontFamilyRegular}`,
  blogHeaderNav: `${fontWeight.bold} 2.25rem ${fontFamilyRegular}`,

  aboutHeaderTitle: `${fontWeight.bold} var(--header-font-size) ${fontFamilyRegular}`,
  aboutHeaderBody: `${fontWeight.normal} var(--info-font-size) ${fontFamilyRegular}`,

  profileName: `${fontWeight.semiBold} 1.5rem ${fontFamilyRegular}`,
  profileCity: `${fontWeight.normal} 1rem ${fontFamilyRegular}`,
  profileBio: `${fontWeight.normal} 1rem/1.25rem ${fontFamilyRegular}`,

  postTitle: `${fontWeight.normal} 2.5rem ${fontFamilyRegular}`,
  postMeta: `${fontWeight.light} 1.25rem ${fontFamilyRegular}`,
  postBody: `${fontWeight.normal} 1.25rem ${fontFamilyRegular}`,
  postCode: `${fontWeight.normal} 1rem ${fontFamilyCode}`,

  sidebarBody: `${fontWeight.normal} 1.875rem ${fontFamilyRegular}`,

  heroTitle: `${fontWeight.bold} 4rem ${fontFamilyRegular}`,
  heroText: `${fontWeight.normal} 1.5rem ${fontFamilyRegular}`,
  postSectionTitle: `${fontWeight.bold} 3rem ${fontFamilyRegular}`,
};
