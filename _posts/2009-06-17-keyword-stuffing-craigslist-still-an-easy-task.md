---
id: 487
title: 'Keyword stuffing Craigslist: still an easy task'
author: Chris
layout: post
guid: http://contolini.com/?p=487
permalink: /2009/06/17/keyword-stuffing-craigslist-still-an-easy-task/
categories:
  - blog
  - web dev
tags:
  - black hat
  - craigslist
---

Back in the heyday of Craigslist spam, exploiters found simple methods of circumventing the site&#8217;s reliance upon community moderation. Keyword stuffing, the act of loading a page with keywords to increase its visibility in search results, was super easy because Craigslist stripped few HTML elements (and attributes) from posts.

A user could create a post to sell, for example, a Squier Stratocaster, and [pump related keywords into a hidden `div`][1]{.colorbox}. Craigslist would index the hidden words even though they were kept from visitors&#8217; eyes. Someone searching Craigslist for a les paul would find the squier posting because &#8220;les paul&#8221; was found inside the hidden `div`.

Keyword stuffing is both annoying and ineffective. Anyone looking to buy a Les Paul is not going to be interested in a low-end Squier. *But,* it&#8217;s a cheap and easy way to push content toward thousands of eyes. For this reason, spammers and scammers love it.

Eventually, enough users smelled something fishy in their <acronym title="search engine results page">SERP</acronym> and complained to Craigslist. A year ago Craigslist rolled out an update that blocked most HTML elements and attributes, permitting only a [select few][2].

The update stopped keyword stuffing dead in its tracks. Nowadays, most Craigslist keyword stuffing occurs through use of `font` elements with a `color` attribute set to a very light color, often `lightyellow` or `honeydew`. People [notice this text][3] and flag the ads. Community moderation defeats it.

But there is still a gaping hole in Craigslist&#8217;s search engine: the values of attributes are indexed. Attribute value types that aren&#8217;t checked for integrity, such as `uri`, can be keyword stuffed.

Instead of hiding keywords in a `div`, they can be hidden in the values of [`href`][4]{.colorbox} and [`src`][5]{.colorbox}. Craigslist checks for whitespace so slashes must be inserted, but slashes are conveniently treated as spaces when pulling search results.

Craigslist needs to either check the integrity of attribute values or stop indexing them. Novice users don&#8217;t flag keyword stuffed posts because they chalk their SERP appearance up to bad search engine technology and not malicious posters. Either way, the blame is on Craigslist.

 [1]: {{ site.url }}/downloads/keyword-stuffing-craigslist.png "example Craigslist posting demonstrating keyword stuffing"
 [2]: http://www.craigslist.org/about/help/html_in_craigslist_postings/details "craigslist help article listing allow HTML elements and attributes"
 [3]: http://www.wahm.com/forum/forum_posts.asp?TID=527125 "forum thread of people discussing this method of keyword stuffing"
 [4]: {{ site.url }}/downloads/keyword-stuffing-craigslist-href.png "keyword stuffing with a faux link"
 [5]: {{ site.url }}/downloads/keyword-stuffing-craigslist-src.png "keyword stuffing with a faux image"
