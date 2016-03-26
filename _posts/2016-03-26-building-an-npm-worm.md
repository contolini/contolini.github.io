---
title: 'Building an npm worm'
author: Chris
layout: post
description: Building an npm virus via self-replicating lifecycle scripts.
excerpt_image: 'https://contolini.com/downloads/pizzzzaaaaa.jpg'
excerpt_bg_color: '#153649'
---

<div class="photos screenshot">
  <img
    src="{{ site.path }}/downloads/pizzzzaaaaa.jpg"
    alt="Pizza party npm worm"
    data-action="zoom">
</div>

It’s [long been known](https://blog.liftsecurity.io/2015/01/27/a-malicious-module-on-npm) that [npm scripts](https://docs.npmjs.com/misc/scripts) can be used for malicious purposes. Historically, when a developer publishes a package with a nasty lifecycle script npm quickly [deletes the package](https://twitter.com/othiym23/status/559759478774439936) to mitigate harm.

But what if a package had an `install` script that scanned your computer for other node modules and added the same evil script to those modules? If you're a maintainer of those modules, and you're logged into npm, it could then publish the newly-infected module(s). These new versions would be installed by other developers who would unknowingly infect their own modules. To undo the damage, you’d have to determine which specific versions of packages are affected and purge only those versions. This would be difficult, if not impossible to do.

### You can't "undo" a worm

npm, Inc. recently publicized their [concern](http://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability) over this issue after [Sam Saccone](https://twitter.com/samccone) disclosed it to them in January 2016.

It’s a vulnerability I’ve been thinking about ever since I helped out with [Bower](http://bower.io/) last year and was given commit access to the project. I had only triaged a couple issues and written a dozen lines of code but because the project was in need of maintainers, I was suddenly in control of a project that’s installed by developers 100k times/day. If I was a jerk or evil corporate saboteur I could add malicious code to the project that would wreak havoc on developers’ systems. In this situation, the harmful code would be removed and I would be banned from the project.

But if the exploit was designed to self-replicate, you can’t just "undo" it.

### npm worm proof of concept

To demonstrate how an npm worm would work, I created a quick proof-of-concept: [pizza-party](https://github.com/contolini/pizza-party). I have not published the module to npm but if you were to `npm install pizza-party`, the module's [install script](https://github.com/contolini/pizza-party/blob/master/package.json#L13) would do the following:

1. [Scan its parent `node_modules` directory](https://github.com/contolini/pizza-party/blob/master/index.js#L12) for other node modules
1. [Add the same install script](https://github.com/contolini/pizza-party/blob/master/index.js#L27-L31) to those modules
1. [Version those modules](https://github.com/contolini/pizza-party/blob/master/index.js#L40) (bumping the patch version)
1. Attempt to [publish them to npm](https://github.com/contolini/pizza-party/blob/master/index.js#L41)
1. Opens [this video](https://www.youtube.com/watch?v=wusGIl3v044) in a browser

99.99% percent of the time the attempt to publish the module will fail because the user probably isn’t an owner of the module. But many npm authors manage hundreds of packages so you’d only have to infect a couple of those people to initiate a snowball of chaos.

The attack in the [disclosure](https://www.kb.cert.org/vuls/id/319816) is even more nefarious. Rather than brute forcing the publishing of peer modules you can just list all packages owned by the current user, download them, add an `install` script to them, and re-publish them.

### Lazy semver habits allow the virus to spread

The propagation happens because most developers use loose [range specifiers](https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004) (`~` and `^`) in their projects’ `package.json`.

For example, [gulp](https://github.com/gulpjs/gulp/blob/9c14e3a13a73a32e424f144d62566671b2fcdbed/package.json#L29) requires version `^1.0.0` of archy. When a user installs gulp (`npm install gulp`) npm will check its registry for the latest version of archy that is greater than version 1.0.0 while still less than 2.0.0.If a malicious script successfully infects archy and bumps it to 1.0.1, anyone who installs gulp will be downloading the exploit. That same script would then try and infect other modules present on the user’s machine, attempting to create new versions (`npm version patch`) and publish them to npm without the user knowing (`npm publish`).

### Protecting yourself from an npm worm

As mentioned in the formal [CERT disclosure](https://www.kb.cert.org/vuls/id/319816), the best way to protect yourself is to only be logged into npm when you’re actively managing your modules.

Locking your dependencies by using [`npm shrinkwrap`](https://docs.npmjs.com/cli/shrinkwrap) will also help, but so long as node modules can run arbitrary scripts, there’s a lot of scary stuff they can do.

### Using other people's code is inherently risky

The use of lifecycle scripts is not unique to npm and this exploit can be emulated in the package managers of other programming languages and frameworks. The reality is that npm, and to a greater extent, GitHub, have allowed the world of open source software to flourish by making it easy to create, distribute and assemble software. This is a good thing. But it doesn’t change the fact that there are inherent risks involved with blindly executing someone else’s code on your machine.

Even if a module doesn’t have any lifecycle scripts, it could still contain malicious code that does something horrible the second you `require()` it. Admittedly, I often `npm install random-module-xxx` without first viewing its source code. I should probably start auditing modules before installing them but let’s face it -- ain’t nobody got time for that.

Until npm inc. finds ways to make npm users safer, we just have to trust that none of our peers are assholes. So if you’re a node developer and you’re reading this: **Please, don’t be an asshole.**
