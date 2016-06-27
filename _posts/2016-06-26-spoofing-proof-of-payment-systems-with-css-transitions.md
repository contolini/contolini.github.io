---
title: 'Spoofing Proof-of-Payment Systems with CSS Animations'
author: Chris
layout: post
excerpt_image: 'https://c2.staticflickr.com/8/7438/27923559085_c76f43fc87_k.jpg'
---

<div class="photos one">
  <img
    src="https://c2.staticflickr.com/8/7438/27923559085_c76f43fc87_k.jpg"
    srcset="https://c2.staticflickr.com/8/7438/27923559085_c5664729c2_c.jpg 800w,
            https://c2.staticflickr.com/8/7438/27923559085_c5664729c2_b.jpg 1024w,
            https://c2.staticflickr.com/8/7438/27923559085_c76f43fc87_k.jpg 2048w"
    alt="Spoofing Proof-of-Payment Systems with CSS Animations"
    data-action="zoom">
</div>

While riding a Portland bus not too long ago I was fascinated by their electronic ticketing system. You buy a ticket via their [mobile app](https://trimet.org/app/) and present your phone to the driver when boarding a bus. A digital ticket consists of a series of sliding images behind a transparent image of a bus. Bus drivers glance at it and if the timestamp at the top is correct and it kinda-sorta-looks-like-a-ticket they wave you on.

All the animations in the ticket can be emulated using standard web technologies, namely [CSS3 animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations). Let's explore how by creating a digital ticket for our fake transit company, ButtMet!

The finished product is available at **[ButtMet.com](https://buttmet.com)**. By adding the website to your mobile phone's home screen, your phone will load it without the URL bar, causing it to look like a real app.

### Step 1: Draw some images that you want to scroll across the ticket

<div class="photos screenshot">
  <img
    src="//i.imgur.com/UbObKEk.png"
    alt="Birds"
    data-action="zoom">
</div>

<div class="photos screenshot">
  <img
    src="//i.imgur.com/XqTBykJ.png"
    alt="Trees"
    data-action="zoom">
</div>

### Step 2: Draw a bus and put your logo on it

<div class="photos screenshot">
  <img
    src="//i.imgur.com/JrhKqX4.gif"
    alt="Bus"
    data-action="zoom">
</div>

### Step 3: Add animations

Apply the [translate3d() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d) in an infinite loop to the elements you want to animate. The gist of which is (in Sass):

``` sass
@mixin animate($bottom, $speed) {
    transform: translate3d(0, 0, 0);
    position: absolute;
    bottom: $bottom;
    animation: infiniteLoop $speed infinite linear;
}

@keyframes infiniteLoop {
    0% {
        transform: translateX(100%)
    }
    100% {
        transform: translateX(-100%)
    }
}
```

### Step 4: Display an expiration date

Write some JavaScript that displays an expiration date one hour into the future. The code below uses [Moment.js](http://momentjs.com).

``` js
var expiration = moment().add(getRandomInt(68, 82), 'minutes').format('h:mmA MMM D YYYY');
document.querySelector('#time').innerHTML = expiration;
```

### Step 5: Glue it all together in a mobile-friendly website

And voila! An instant bus ticket. Check out [buttmet.com](https://buttmet.com/) for the finished demo. Check out the [source code](https://github.com/contolini/buttmet) to see the complete CSS.

<div class="photos screenshot">
  <img
    src="//i.imgur.com/TqpDzt9.png"
    alt="Buttmet.com"
    data-action="zoom">
</div>

*TriMet photo by [Mobilus In Mobili](https://www.flickr.com/photos/mobili/15282158052). Used with permission.*
