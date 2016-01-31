---
id: 501
title: How to import UTF-8 encoded files into MySQL without outputting garbage
author: Chris
layout: post
guid: http://contolini.com/?p=501
permalink: /2009/07/01/how-to-import-utf8-encoded-files-into-mysql-without-outputting-garbage/
categories:
  - blog
  - web dev
tags:
  - drupal
---
A recent [Drupal localization project][1] proved relatively painless until we moved the data from a local machine to a staging server. Importing thousands of lines of Bulgarian into a MySQL database went smoothly BUT when Drupal pulled the data it looked like gibberish.

The database&#8217;s collation was properly set to [UTF-8][2] but it refused to output Cyrillic instead of garbage. The solution? Edit your [MySQL options file][3] to change the **server&#8217;s** character set to UTF-8. Adding *character-set-server = utf8* to my.cnf should do the trick.

 [1]: https://ssd.eff.org/bg "translating surveillance self-defense into bulgarian"
 [2]: http://en.wikipedia.org/wiki/UTF-8
 [3]: http://dev.mysql.com/doc/refman/5.1/en/option-files.html "usually my.cnf"