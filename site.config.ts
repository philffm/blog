import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '0aac38d9e5994f8aa7d586dec4c6883e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,
  includeNotionIdInUrls: true,

  // basic site info (required)
  name: 'UX and Life / Phil Wornath',
  domain: 'blog.philwornath.com',
  author: 'Phil Wornath',

  // open graph metadata (optional)
  description: 'Tales of the intersection between life and technology',
  
  
  // social usernames (optional)
  twitter: 'philwornath',
  github: 'philffm',
  linkedin: 'phw',
  mastodon: 'https://mastodon.online/@phw', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '0aac38d9e5994f8aa7d586dec4c6883e'
    },
    {
      title: 'About',
      pageId: 'e5e93260968742f9a859a68cfde19a91'
    }
  ]
})
