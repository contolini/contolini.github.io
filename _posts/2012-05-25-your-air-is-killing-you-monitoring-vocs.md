---
id: 1467
title: 'Your Air Is Killing You: Monitoring VOCs'
author: Chris
layout: post
guid: http://contolini.com/?p=1467
permalink: /2012/05/25/your-air-is-killing-you-monitoring-vocs/
categories:
  - blog
  - Uncategorized
---
The air in your home is disgusting. Seriously. Open a window.

Inspired by Carnegie Mellon&#8217;s [air quality balloons][1] and a seminar on [Pervasive Interaction in Smart Environments][2], some buddies and I built a device that monitors the concentration of [volatile organic compounds][3] in the air. We used an Arduino and a [Figaro 2620 solvent vapor detector][4] to record VOC levels at various locations, public and private.

<img class="alignleft size-full wp-image-1468" title="Arduino monitoring air quality with a Figaro sensor" src="{{ site.url }}/downloads/pervasive_iaq.jpg" alt="Arduino monitoring air quality with a Figaro sensor" width="800" height="317" style="padding:10px 0" />

The result? Your bedroom is [giving you cancer][5]. In one day we tested bars, a McDonald&#8217;s, public buses, outdoor patios and our homes. The VOC levels in personal living spaces was significantly higher than all other locations, especially outdoor locations. This is something the EPA has [known for a while][6]. The simple act of opening a window can dramatically decrease VOC levels in your home and I don&#8217;t care how cold it gets outside, my window is staying open.

<img class="alignleft size-full wp-image-1469" title="Monitoring air quality at a bus stop" src="{{ site.url }}/downloads/arduino_figaro_monitoring_iaq.jpg" alt="Monitoring air quality at a bus stop" width="800" height="428" style="padding:10px 0" />

My job was to build a web interface that parses a huge CSV dump of data and plots VOC levels on various [HighCharts][7] graphs. We plan to continue working on the project and eventually release the schematics and source code to the public. For now there&#8217;s a lot of calibration and refactoring to be done.

Now go open a window.

 [1]: http://www.cmu.edu/homepage/environment/2010/summer/do-it-yourself.shtml
 [2]: https://www10.uta.fi/opas/opintojakso.htm?id=20338&lang=en&lvv=2011&uiLang=en
 [3]: http://www.epa.gov/iaq/voc.html
 [4]: http://www.figarosensor.com/products/2620pdf.pdf "Spec sheet of Figaro 2620"
 [5]: http://www.epa.gov/iaq/voc.html#Health_Effects
 [6]: http://www.epa.gov/iaq/voc.html#Levels
 [7]: http://www.highcharts.com/
