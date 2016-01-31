---
id: 1199
title: I Heart VoiceXML
author: Chris
layout: post
guid: http://contolini.com/?p=1199
permalink: /2011/05/04/i-heart-voicexml/
categories:
  - blog
---
I&#8217;ve recently become obsessed with VoiceXML, a markup language that manages voice interactions between humans and computers. It is endless amounts of fun. [Voxeo][1] offers a hosted [dev environment][2] that provides developers with a VoiceXML interpreter and an endless supply of free phone numbers to use with your applications. Here&#8217;s an app that took 30 seconds to create: **(415) 830-3015**. Call it right now, I dare you.

Combining VoiceXML with any dynamic language makes voice applications easier to build than traditional HTML-based apps. There&#8217;s no need to worry about visual design or common security vulnerabilities (unless someone finds a way to execute an SQL injection over the phone, in which case they deserve an award). Here&#8217;s an app that took an afternoon to create: **(415) 992-6871**. It uses PHP to query [FatSecret&#8217;s][3] [API][4] and generate VoiceXML that provides callers the nutrition facts of any food they want. Well, not any food. I haven&#8217;t bothered to expand the grammar past a few hundred food items so it can only query common foods but the logic is all there.

The ease of experimenting with a non-visual environment feels quite liberating and I have a couple other apps in the pipeline. Hopefully I&#8217;ll finish the first next week.

It&#8217;s worth noting there are newer, easier-to-use APIs that emulate VoiceXML environments and cater to the Web 2.0 crowd. The two most popular are [Twilio][5] and [Tropo][6]. They stand on the shoulders of [W3C&#8217;s work][7] and offer simple methods of integrating voice and SMS services into existing systems. Both are definitely worth checking out if you plan on experimenting in the realm of voice applications.

 [1]: http://www.voxeo.com
 [2]: http://evolution.voxeo.com/
 [3]: http://www.fatsecret.com/
 [4]: http://platform.fatsecret.com/api
 [5]: http://www.twilio.com
 [6]: https://www.tropo.com
 [7]: http://www.w3.org/TR/voicexml20