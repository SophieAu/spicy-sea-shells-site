<p align="center">
    <img alt="Spicy Sea Shells" src="/src/images/logo.png" width="80" />
</p>
<h1 align="center">
  Spicy Sea Shells Website
</h1>

This is the website for the Spicy Sea Shells, built with [Gatsby](https://www.gatsbyjs.org/).


## 🚀 Quick start

1.  **Run `yarn install`.**

1.  **Run the Development Build.**

    `gatsby develop`

    You can now continue editing and the site will auto-update. It's running on `http://localhost:8000`.

1.  **Build for Production.**

    _Note: You don't need this to deploy to production. This is only for debugging._ To build a production-like environment, run `gatsby build`. To inspect that page, run `gatsby serve`.

1. **Deploy to Production.**

    To deploy to production, simply commit your changes to master and push to GitHub. A web hook will take care of everything and re-deploy the site automatically.


## 🙂 Updating a Profile

Updating a profile works by editing the `profiles.json` file in the `src` folder. The fields (which are all required) are:

* `name`: the name you want displayed
* `image`: the prefix you are using in the supplied profile images. Suggested is the first name so that the files are named: _firstname\_tall.jpg_ and _firstname\_wide.jpg_. More on the profile images below.
* `city`: The city you are based in. The format 'city, country' or 'city, state' might be helpful for people who visit the site.
* `bio` and `bioShort`: a short blur about yourself, one for the desktop-width profile card and one for the mobile-width card. For the maximum length, please check how it is rendered but as a guideline max. 180 characters for `bio` and 160 characters for `bioShort` are recommended.
* `socialMedia`: Any links to social media accounts you would like displayed. Please do not add more than five links. The format is: `"socialMediaPlatformInAllLowerCase": "http://link.com"`. The following platforms are currently supported:
    * dribbble
    * facebook
    * github
    * instagram
    * linkedin
    * medium
    * twitter
    * your personal website (called `website`)

### Profile Images

Profile images __need__ to be located in the folder `src/images/profiles` and there __need__ to be two of them called `name_tall.jpg` and `name_wide.jpg`. The name is based on what is defined in the `image` field of the `profile.json`. The required dimensions are:
* __tall__: 160px x 320px
* __wide__: 288px x 180px

It is preferred that both images are cropped from the same source image however this is not required.


## 📝 Adding Blog Posts

Blog posts live in the following folder:

`src/pages/posts`

They should be plain markdown saved with the extension `.md`. The name of the file has no hard requirements however `YYYY-MM-DD-slug.md` is recommended as a best practice.

The following frontmatter has to be supplied:

* `title`: The title of the blog post
* `date`: The release date in YYYY-MM-DD
* `slug`: The "slug" (last part of the link) of the post. For examples check existing posts.
* `author`: The author of the post. Please use the same name as is defined in the `name` field of the `profiles.json` file.

### Asset Handling

Images and other assets should be saved in `src/paged/posts/img` and `src/paged/posts/assets` respectively. To link to an image, use this format: ` ./img/image_name.jpg`.


## 🎓 Learning Gatsby

If you want to learn more about how Gatsby works, check out their [tutorials](https://www.gatsbyjs.org/tutorial/) and [docs](https://www.gatsbyjs.org/docs/).