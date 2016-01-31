---
id: 1466
title: Installing Ruby development headers on Mac OS X Lion
author: Chris
layout: post
guid: http://contolini.com/?p=1466
permalink: /2012/05/10/installing-ruby-development-headers-on-mac-os-x-lion/
categories:
  - blog
---
<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="powershell" style="font-family:monospace;">$ sudo gem install json
Building native extensions.  This could take a <span style="color: #0000FF;">while</span>...
ERROR:  Error installing json:
	ERROR: Failed to build gem native extension.
&nbsp;
<span style="color: pink;">/</span>System<span style="color: pink;">/</span>Library<span style="color: pink;">/</span>Frameworks<span style="color: pink;">/</span>Ruby.framework<span style="color: pink;">/</span>Versions<span style="color: pink;">/</span><span style="color: #804000;">1.8</span><span style="color: pink;">/</span>usr<span style="color: pink;">/</span>bin<span style="color: pink;">/</span>ruby extconf.rb
mkmf.rb can<span style="color: #800000;">'t find header files for ruby at /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/ruby.h
&nbsp;
Gem files will remain installed in /Library/Ruby/Gems/1.8/gems/json-1.7.3 for inspection.
Results logged to /Library/Ruby/Gems/1.8/gems/json-1.7.3/ext/json/ext/parser/gem_make.out</span></pre>
      </td>
    </tr>
  </table>
</div>

If you&#8217;re running Mac OS X and you run into the error above about a lack of Ruby header files, click over to the [OSX GCC Installer][1] page and download the appropriate .pkg file. Run it and you&#8217;ll have all the necessary dev tools.

The latest version of XCode does **not** include ruby-dev.

 [1]: https://github.com/kennethreitz/osx-gcc-installer