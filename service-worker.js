"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f1a51145ee8495277e7d18bb8b538017"],["/static/css/main.f4dfd8b2.css","eb596b5dfa3cf086ff635f95ef0e0a76"],["/static/js/main.088992b5.js","63138a6dc87938ae5cc020386363c4c6"],["/static/media/engagementRing.818c3acb.jpg","818c3acb6e3263c47d933827bf34e538"],["/static/media/facebook.4a1a59f6.png","4a1a59f61ef1b630ae14eda07b3e9d27"],["/static/media/flickr.77ef6b57.png","77ef6b5754e7fd8332049457ee8c1c0e"],["/static/media/georgeAndCharlie.35dcdf84.jpg","35dcdf84fd76a50cda68ee15f0c9a09e"],["/static/media/georgegillams.03d3ae80.jpg","03d3ae808d11d104ea1f60e60db38810"],["/static/media/linkedin.8531a1cc.png","8531a1ccf32b7adaae9c0425f29cac40"],["/static/media/logo.c82921dd.svg","c82921dd5c0c67ad3e5ac95300395d50"],["/static/media/netflixDownloads.981e0bef.png","981e0bef7ff70f81aa86c2cd6491205f"],["/static/media/proposal.e615f404.jpg","e615f404661c2634e7eaec72a17f787f"],["/static/media/sealPhotobomb.2f634f4a.jpg","2f634f4a8e97993734cadac79eee572d"],["/static/media/starbucks.699d32ba.jpg","699d32ba2d0c08efb35f64eb7bf2da04"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});