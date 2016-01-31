// // `fetch` polyfill
// require('whatwg-fetch');
// var MobileDetect = require('mobile-detect');

// var isMobile = new MobileDetect(window.navigator.userAgent).mobile();

// // Attaching this to the window to make it easier to use with Jekyll front matter.
// window.loadAlbum = function(id) {
//   var album = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=aebf842e94c874607d026e0bf25666ad&photoset_id=' + id + '&extras=original_format&format=json&nojsoncallback=1';

//   fetch(album)
//     .then(function(response) {
//       return response.json();
//     }).then(function(json) {
//       json.photoset.photo.forEach(function(photo) {
//         console.log(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg`)
//         console.log(photo)
//       });
//     }).catch(function(ex) {
//       console.log('parsing failed', ex)
//     });
// }


