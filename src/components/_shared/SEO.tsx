import React from 'react'
import Helmet from 'react-helmet'

const SITE_LANG = 'en'
// const CREATOR = '@trydonut';
const BASE_URL = 'https://spicyseashells.com'
// const META_IMAGE = `metaImage.png`;

interface Props {
  title: string
  description: string
  slug: string
  children?: React.ReactNode
  creator?: string
}

const SEO: React.FC<Props> = ({ title, description, slug, children }) => (
  <Helmet
    htmlAttributes={{
      lang: SITE_LANG,
      prefix: 'og: http://ogp.me/ns#',
    }}
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: `og:image`,
        content: `${BASE_URL}/${META_IMAGE}`,
      },
      {
        property: `og:url`,
        content: `${BASE_URL}/${slug}`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:url`,
        content: `${BASE_URL}/${slug}`,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
      {
        name: `twitter:site`,
        content: CREATOR,
      },
      {
        name: `twitter:image`,
        content: `${BASE_URL}/${META_IMAGE}`,
      },
    ]}
  >
    {children}
  </Helmet>
)

export default SEO
