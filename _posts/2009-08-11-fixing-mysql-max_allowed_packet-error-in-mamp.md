---
id: 507
title: Fixing MySQL max_allowed_packet error in MAMP
author: Chris
layout: post
guid: http://contolini.com/?p=507
permalink: /2009/08/11/fixing-mysql-max_allowed_packet-error-in-mamp/
categories:
  - blog
  - web dev
tags:
  - mamp
  - mysql
---
If you get a <samp>packet bigger than &#8216;max_allowed_packet&#8217; bytes</samp> error when importing into a MySQL database on a MAMP system, you need to edit your <samp>max_allowed_packet</samp> variable. It defaults to 1MB.

There are two ways to do this:

  * Create a my.cnf file and set the variable.
  * Add <kbd>--max_allowed_packet=32M</kbd> to *<small>/Applications/mamp/bin/startMysql.sh</small>*. Restart MAMP.

The latter method is easier but if you&#8217;re going to be editing other variables it&#8217;s best to create a my.cnf file. MAMP ships with five my.cnf configuration files (you should be safe with my-small.cnf):

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">/</span>Applications<span style="color: #339933;">/</span>MAMP<span style="color: #339933;">/</span>Library<span style="color: #339933;">/</span>share<span style="color: #339933;">/</span><span style="color: #990000;">mysql</span><span style="color: #339933;">/</span>my<span style="color: #339933;">-</span>huge<span style="color: #339933;">.</span>cnf
<span style="color: #339933;">/</span>Applications<span style="color: #339933;">/</span>MAMP<span style="color: #339933;">/</span>Library<span style="color: #339933;">/</span>share<span style="color: #339933;">/</span><span style="color: #990000;">mysql</span><span style="color: #339933;">/</span>my<span style="color: #339933;">-</span>innodb<span style="color: #339933;">-</span>heavy<span style="color: #339933;">-</span>4G<span style="color: #339933;">.</span>cnf
<span style="color: #339933;">/</span>Applications<span style="color: #339933;">/</span>MAMP<span style="color: #339933;">/</span>Library<span style="color: #339933;">/</span>share<span style="color: #339933;">/</span><span style="color: #990000;">mysql</span><span style="color: #339933;">/</span>my<span style="color: #339933;">-</span>large<span style="color: #339933;">.</span>cnf
<span style="color: #339933;">/</span>Applications<span style="color: #339933;">/</span>MAMP<span style="color: #339933;">/</span>Library<span style="color: #339933;">/</span>share<span style="color: #339933;">/</span><span style="color: #990000;">mysql</span><span style="color: #339933;">/</span>my<span style="color: #339933;">-</span>medium<span style="color: #339933;">.</span>cnf
<span style="color: #339933;">/</span>Applications<span style="color: #339933;">/</span>MAMP<span style="color: #339933;">/</span>Library<span style="color: #339933;">/</span>share<span style="color: #339933;">/</span><span style="color: #990000;">mysql</span><span style="color: #339933;">/</span>my<span style="color: #339933;">-</span>small<span style="color: #339933;">.</span>cnf</pre>
      </td>
    </tr>
  </table>
</div>

Copy it to /Applications/MAMP/Library/ and name it my.cnf.

Choose one that works for you and copy it to <kbd>/Applications/MAMP/Library/my.cnf</kbd>. Find the <samp>max_allowed_packet = <strong>1M</strong></samp> line and change it to <samp><strong>32M</strong></samp> (or whatever you prefer). Save the file and restart MAMP.

Phew.