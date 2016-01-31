---
id: 431
title: 'CSS tip: Use :after pseudo-element to append copyright notices to printed material'
author: Chris
layout: post
guid: http://contolini.com/?p=431
permalink: /2009/04/25/css-tip-use-after-pseudo-element-to-append-copyright-notices-to-printed-material/
categories:
  - blog
  - web dev
tags:
  - css
---
Here&#8217;s some simple CSS code that&#8217;s useful if people frequently print portions of your website. When added to your print stylesheet it will append your site&#8217;s copyright notice to the end of any printed page. #content should be replaced with whatever element wraps your content.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;">#<span style="color: #000000; font-weight: bold;">content</span><span style="color: #3333ff;">:after </span><span style="color: #00AA00;">&#123;</span>
<span style="color: #000000; font-weight: bold;">margin-top</span><span style="color: #00AA00;">:</span> <span style="color: #933;">40px</span><span style="color: #00AA00;">;</span>
<span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">"Printed Material Notice: Any and all original material on this website may be freely distributed at will under the Creative Commons Attribution-NonCommercial License, unless otherwise noted."</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

I don&#8217;t recommend you append copyright notices unless your content is frequently printed and distributed. [eff][1] churns out tons of original, quotable material and I often have visitors email me asking what permission they have to cite and distribute our work.

Check out eff&#8217;s [print stylesheet ][2]to see it in action. In the rest of the stylesheet we strip extraneous material (sidebars, navigation, etc.), change the formatting of blockquotes and anchors so they&#8217;re not color-dependent, and print the page&#8217;s url after the &#8216;permalink&#8217; anchor using this snippet.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;">a<span style="color: #6666ff;">.perm</span><span style="color: #3333ff;">:after </span><span style="color: #00AA00;">&#123;</span>
  <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span> <span style="color: #933;">90%</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">": http://www.eff.org"</span> attr<span style="color: #00AA00;">&#40;</span>href<span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Over in print-notie.css we replace our header image with a printer-friendly version using a [list-style hack][3].

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#logo</span> img <span style="color: #00AA00;">&#123;</span>
  <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">none</span> !important
<span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #cc00cc;">#logo</span> <span style="color: #00AA00;">&#123;</span>
  <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">list-item</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span> <span style="color: #933;">70px</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">list-style-image</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/print_logo.jpg</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">list-style-position</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">inside</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #933;">99%</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

This keeps everything kosher for the most part. Here&#8217;s a screenshot of a blog post in a [browser][4]{.colorbox}, the same post after [printing][5]{.colorbox}, and the post after printing [without a print stylesheet][6]{.colorbox}. Without a print stylesheet it spans five pages and the only usable content is on page four.

While EFF&#8217;s print stylesheet is not perfect, it does a good job prepping web content for printing. The :after pseudo-element, while not fully supported in all browsers, fails gracefully and can add helpful features to alternative media.

It&#8217;s feels odd referring to paper as an *alternative* medium&#8230;

 [1]: http://www.eff.org "electronic frontier foundation"
 [2]: http://www.eff.org/sites/all/themes/frontier/print.css "eff's print.css file"
 [3]: http://www.web-graphics.com/mtarchive/001703.php
 [4]: http://contolini.com/wp-content/uploads/2009/05/blog-post-before-print-stylesheet.png "random eff blog post displayed in firefox"
 [5]: http://contolini.com/wp-content/uploads/2009/05/blog-post-with-print-stylesheet.png "here's the same post after printing. extraneous content has been stripped."
 [6]: http://contolini.com/wp-content/uploads/2009/05/blog-post-without-print-stylesheet.png "without a print stylesheet it's horribly rendered and strewn across five pages."