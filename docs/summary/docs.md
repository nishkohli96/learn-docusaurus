---
id: summary-docs
description: Summary of docs config from official site.
slug: /summary/docs-intro
sidebar_label: Docs about docs
---

# Docs Intro

[https://docusaurus.io/docs/docs-introduction](https://docusaurus.io/docs/docs-introduction)

To enter docs-only mode, modify `docusaurus.config.js`.

```
export default {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
        },
        blog: false, // Optional: disable the blog plugin
        // ...
      },
    ],
  ],
};
```

All that `routeBasePath: '/'` does is that instead of serving the docs through https://example.com/docs/some-doc, they are now at the site root: https://example.com/some-doc.

:::info[Know More]
Every document has a unique id.By default, the ID of *greeting.md* is `greeting`, and the ID of *guide/hello.md* is `guide/hello`. This can be changed in the file by writing the below syntax at the top of the markdown file.

```
---
id: part1
---

Lorem ipsum
```
:::

By default hello.md will be available at `/docs/guide/hello``. You can change its URL location to /docs/bonjour:

```
---
slug: /bonjour
---

Lorem ipsum
```

**if `sidebar_label` is provided in the doc metadata, that willbe shown, else the corresponding label defined in `sidebars.ts` file. Default fallback will be the topmost heading in that doc.**