---
id: 471
title: If javascript affects your UI, load it ASAP
author: Chris
layout: post
guid: http://contolini.com/?p=471
permalink: /2009/05/13/if-your-javascript-affects-your-ui-load-it-asap/
categories:
  - blog
  - web dev
tags:
  - javascript
  - ux
---
The javascript focus() method is often used to place a user&#8217;s cursor in the username field of a login form on page load. [Twitter][1] uses this technique. **After everything is loaded**, a blinking cursor appears in the username field and you can begin typing your login credentials. Viewing Twitter&#8217;s source code, you can see the jQuery snippet below that shifts the focus. It&#8217;s at the very bottom of the page and is loaded after several javascript libraries (why the hell do they use three separate javascript libraries?).

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="javascript" style="font-family:monospace;">  jQuery<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span>$<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#username'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">focus</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
  <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

It is advisable to place a script [just before the closing tag &#60;/body&#62; tag][2] *unless* the script affects the user&#8217;s experience on load. The javascript focus() method affects ux. When I visit twitter from a shotty connection (like when my housemates are all bittorrenting at the same time), focus is shifted to the username field after I have already typed in my username and I&#8217;m halfway through the password field. I have to re-click the password field to finish what I started. It&#8217;s annoying. Load the script in the &#60;head&#62; or directly after the corresponding element. Or just don&#8217;t shift focus.

Seriously, though, why does Twitter use [jQuery][3] and [Scriptaculous][4]? Old code? Or maybe they&#8217;re just really indecisive and like to keep their options open.

**Edit: ** They have since redesigned the homepage and now only use jQuery.

 [1]: http://twitter.com "yes, that twitter"
 [2]: http://developer.yahoo.com/performance/rules.html#js_bottom "yahoo best web practices"
 [3]: http://jquery.com/
 [4]: http://script.aculo.us/