## Static, meet dynamic.

**Demo: https://vue-jekyll.surge.sh**

[This Repo](https://github.com/BryanSchuetz/vue-jekyll) is a bare-bones template for building static sites that leverage a client-side JS framework for dynamic functionality. It uses [NPM](https://www.npmjs.com/), [Webpack](https://webpack.js.org), [Vue](https://vuejs.org), and [Jekyll](https://jekyllrb.com). It uses **NPM (and Bundler)** to manage the project's dependencies, and improve the development workflow. It uses **Webpack** to roll up and transpile all the individual modules and components into a single bundeled JS file. It uses **Jekyll** to bring it all together, build the site, and serve an initial static file to the browser. It uses **Vue** to render pages on the client side (if JS is supported), and provide any additional dynamic functionality that may be needed.

## The best of both worlds.

Take the best parts of a static site workflow and combine them with the new hotness of a client side framework. What you end up with is a great new way to publish content on the modern web. Isomorphic blah blah blah: Use Jekyll to publish the site's pages, and the JSON data behind them—use Vue to build the same pages with the same data. Serve the first static page to the user—if JS is supported, just send the JSON down the wire and build the rest of the pages/content with Vue. If there's no JS support, continue to send pre-rendered static pages down the wire.

## Setup

* Clone the Repo
* `npm install`
* `bundle install`
* `npm run jekyllfy`
