# Assets

you can link to existing assets by require'ing them and using the returned URL in videos, a anchor links, etc.

```
# My Markdown page

<a target="\_blank" href={require('./assets/docusaurus-asset-example.docx').default}> Download this docx </a>

or

[Download this docx using Markdown](./assets/docusaurus-asset-example.docx)
```