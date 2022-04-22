# Jiko
Jiko is a **versatile**, **clean**, **minimalist** and **fast** theme for [Hugo](https://gohugo.io) inspired by the [Dawn](https://github.com/TryGhost/Dawn) and [Edition](https://github.com/TryGhost/Edition) themes for the blogging platform [Ghost](https://github.com/TryGhost/Ghost).

## Configuration
Below is a sample `config.toml`

```toml
baseURL = "http://example.com" # Base URL
title = "My blog" # Title
theme = "jiko"

[social]
twitter = "twitterUsername" # twitter username

[params]
colorScheme = "system" # possible value are: dark, light, system
colorSchemeSwitcher = true # boolean, default true. Whether to show the color scheme switcher at the bottom of the page
cloudflareWebAnalytics = "abcdef1234567890" # CloudFlare anayltics code. Will be rendered only in production mode
copyright = "All Rights Reserved" # Custom copyright bottom text. Does NOT support markdown
share = ["facebook", "twitter", "linkedin", "reddit", "pocket", "ycombinator"] # list of paltforms to share post at. leave empty to disable

[params.plausibleAnalytics]
domain = "mysite.com" # the domain for plausible analytics
snippet = "http://url.to/plausible.js" # URL to the plausible snippet

[params.assets]
favicon = "path/to/favicon.icon" # default to /favicon.icon

[params.about]
cover = "cover.jpg" # cover image, will be used as fallback for social sharing image if no image attached to the post
```

### Custom CSS
Any custom CSS files located in `assets/css/custom/` will be complied as part of the final CSS files

## Post Related Configuration
There are some `frontmatter` configuration that you can set on the post level in order to utilize related features.

### Featured Image
You can set a `featured_image` param with the path to an image, as well as `featured_image_caption` in order to render
featured image and featured image caption

### Keywords
By adding `keywords: ["a", "b", "c"]` you can add a `meta` tag of `keywords` on the post HTML generated page

### Tags
Tags can be added using the `tags: ["TagA", "TagB"]` frontmatter attribute

## Supported Shortcodes
There are two supported shortcodes: `email-link` and `social-link`. 

### email-link
`email-link` allows you to insert links to different email addresses throughout your blog. In order to define different email address you need to add the following section to your `config.toml`:

```toml
[[params.about.email]]
name = "email_name"
address = "me@example.com"
```

Then in order to render this email in your post / page, use the following call `{{< email-link name="email_name" title="My Email" >}}` which will render as `<a href="mailto:me@example.com" target="_blank" rel="noopener noreferrer" aria-label="email_name">My Email</a>`.

### social-link
`social-link` works similar to `email-link`. In order to define links to your social platforms, add the following to your `config.toml`:

```toml
[[params.about.social]]
name = "twitter"
url = "https://twitter.com/me"
```

And then you can use `{{< social-link name="twitter" title="Twitter" >}}` which will render as `<a href="https://twitter.com/me" target="_blank" rel="noopener noreferrer" aria-label="twitter">Twitter</a>`
