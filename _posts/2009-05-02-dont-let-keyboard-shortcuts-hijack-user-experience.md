---
id: 409
title: 'Don&#8217;t let keyboard shortcuts hijack user experience'
author: Chris
layout: post
guid: http://contolini.com/?p=409
permalink: /2009/05/02/dont-let-keyboard-shortcuts-hijack-user-experience/
categories:
  - blog
  - web dev
tags:
  - myspace
  - ux
---
One of the most frustrating aspects of Myspace (and there a loooottt of frustrating aspects) is the use of javascript keyboard shortcuts within their image viewing platform. When [viewing an image][1] from a user&#8217;s profile, hitting the left or right arrow on your keyboard will load the previous or following image, respectively.

Here&#8217;s the problem: it prevents users&#8217; from using their arrow keys for purposes other than browsing images. This is problematic because the thumb buttons on modern mice navigate backward and forward through browser history by [emulating keystrokes][2] (alt/cmd + arrow).

Once a user clicks through to a myspace photo, attempts to traverse backward through browser history by clicking the &#8216;back&#8217; thumb button prove fruitless. They have to manually click the &#8216;back&#8217; arrow in their browser. This confuses the user and interrupts her experience.

To make matters worse, some users (myself included) [don&#8217;t have a &#8216;back&#8217; arrow][3] in their browser. I removed mine because I became so dependent on Firefox&#8217;s keyboard shortcuts I found myself never using the &#8216;back&#8217;/'forward&#8217; buttons. It allows more space for the location bar so I can read longer URLs.

The result is a blackhole. I navigate to a Myspace photo album and can&#8217;t exit. I&#8217;m forced to open my browser history or right click > &#8216;back.&#8217; It&#8217;s annoying and adds to the aggro Myspace loves to evoke.

All I ask for is an option to disable it. If you&#8217;re going to experiment with javascript keyboard shortcuts, please make them opt-out at the very least. Opt-in (a la [gmail][4]) is ideal, and whatever you do, do not require them. What is helpful to one person can be a pain in the ass to another.

 [1]: http://viewmorepics.myspace.com/index.cfm?fuseaction=viewImage&friendID=184040237&albumID=18128&imageID=12284050 "like this obama photo, for instance"
 [2]: {{ site.url }}/downloads/thumb-buttons.png "screenshot of the thumb settings for my logitech revolution. Notice it just emulates typing cmd + left arrow."
 [3]: {{ site.url }}/downloads/no-browser-navigation-arrows.png "navigation arrows are for whimps"
 [4]: http://mail.google.com/support/bin/answer.py?hl=en&#038;answer=6594 "gmail's keyboard shortcuts must be enabled in settings"
