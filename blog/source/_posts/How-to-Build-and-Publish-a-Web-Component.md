---
title: How to Build and Publish a Stencil Web Component
date: 2021-01-24 15:01:38
tags:
---

![](How-to-Build-and-Publish-a-Web-Component/blog-1.png)

Not long ago, the concept of web components seemed to feel so far in the future. In 2021, more and more companies and design systems are starting to build web component solutions. 

In the first post of The Blinking Marquee, we’ll dive into the process of building and publishing a very simple web component to the public [NPM registry](https://www.npmjs.com/). This is the first post of hopefully many that will focus on concepts within front-end application development, an environment that is constantly evolving with new technology being introduced every single day.

Before we go too far...

## What is a Web Component?

Keeping things simple: it is technology that allows developers to build custom application elements using JavaScript APIs, an encapsulated DOM tree, and reusable templates. For all of the details, take a look at [webcomponents.org](https://www.webcomponents.org/introduction#what-are-web-components-).

## Why are Web Components Useful?

Regardless of the scope of work, computing technology has always set out to accomplish a core goal: abstract programming patterns so that those patterns can be reused, and make the life of a developer more efficient. Computing thrives on abstraction of code.

Web components are an abstraction for UI/UX development. They help design and development teams define a common, reusable user interface across an application, or even a suite of applications. And while it is possible to accomplish the implementation of this concept with amazing Javascript frameworks like React, Angular, and Vue, web components are technology-agnostic. You can develop the components once and use them with any Javascript technology, server-side technology, or just a plain old HTML file.

## How Can Web Components Be Created? 

Developers can use the web components API directly with vanilla Javascript. But again, abstractions exist to make our lives easier. [Many libraries and tools now exist](https://www.webcomponents.org/libraries) to help us more easily create web components, like [Polymer](https://www.polymer-project.org/), [LitElement](https://github.com/Polymer/lit-element), and [Stencil](https://stenciljs.com/). 

This tutorial will utilize Stencil. It's a build-time compiler that generates web components utililizing Typescripx and JSX, a similar concept familiar to React developers. 

> [Read more about Stencil](https://stenciljs.com/docs/introduction), its tooling, and its benefits.

## Let’s Get Started

### The Component

### Set Up a Github Repo

### Install Dependencies

### Development

#### Tailwind CSS

#### The Code

### Publishing to NPM

npm init --scope=@planit
create publish script
- git tag
- move package.json
- npm publish
git push tag

### Try Out Your Component

## Development Resources

### Tutorial Resources

- [PlanIt Repository](https://github.com/planavsky82/planit)
- [PlanIt Container Component](https://github.com/planavsky82/planit/tree/master/src/components/planit-container)

### Additional Resources

- [WebComponents.org](https://www.webcomponents.org/libraries)
- [Web Components Libraries](https://www.webcomponents.org/libraries)
- [Stencil](https://stenciljs.com/docs/introduction)
- [Node Package Manager](https://www.npmjs.com/)
