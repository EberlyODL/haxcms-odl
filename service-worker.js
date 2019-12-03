/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
    [
        "pages\/home\/index.html",
        "PO5JKHeZgQVJzy6GoF5ZQ"
    ],
    [
        "pages\/news\/index.html",
        "LCTPXEuvm5ba7zEesXhYdA"
    ],
    [
        "pages\/blog-posts\/11-19-18\/index.html",
        "2U4EvYZzRFvNYffID2R40w"
    ],
    [
        "pages\/blog-posts\/10-22-18\/index.html",
        "Iw1bJ8YBZvBlm4zXeBKcw"
    ],
    [
        "pages\/blog-posts\/10-9-18\/index.html",
        "PNpS3SXsuPP02CcvMWKXA"
    ],
    [
        "pages\/blog-posts\/8-14-18\/index.html",
        "tO8Vl3EWG83oy0Ra468xQ"
    ],
    [
        "pages\/blog-posts\/6-29-18\/index.html",
        "Cn43daCAh2sFETA6cHxSIg"
    ],
    [
        "pages\/blog-posts\/6-4-18-2\/index.html",
        "HLRbL4jcImgGmTvXtUrRhg"
    ],
    [
        "pages\/team\/index.html",
        "IXPH9Z74DRZZzTwGQZJbiA"
    ],
    [
        "pages\/team-directory\/melissa\/index.html",
        "CWHtZkMJ4PB0f785kl8t6g"
    ],
    [
        "pages\/team-directory\/carly\/index.html",
        "N6eykgJx02jiDDJxHDtLA"
    ],
    [
        "pages\/team-directory\/mike\/index.html",
        "aG5YJT9hMC7uhmOjzL1g"
    ],
    [
        "pages\/team-directory\/chuck\/index.html",
        "FWOBtQr0dFlrBfwpaPexwg"
    ],
    [
        "pages\/team-directory\/louis\/index.html",
        "S55dJgkK2wsYljtyOexxcg"
    ],
    [
        "pages\/team-directory\/joseph\/index.html",
        "S6EQ8xHEVlGz3xOBrC0Sw"
    ],
    [
        "pages\/about\/index.html",
        "P7MMQAhqMbxYrkwkZ0mNg"
    ],
    [
        "pages\/contact\/index.html",
        "XlQfxRT1uxtCKixJK4bZcQ"
    ],
    [
        "pages\/spotlight\/index.html",
        "bK25ehgOwOJjjMjkOaEow"
    ],
    [
        "pages\/spotlight\/louis\/index.html",
        "5TX9JwdHdnFw8NLCxURA"
    ],
    [
        "pages\/courses\/index.html",
        "rjh1zS3HVrwRRJHe3oSfDg"
    ],
    [
        "pages\/courses\/astro001\/index.html",
        "vByYKa7Bh7ORRs7Zw7uytg"
    ],
    [
        "pages\/courses\/astro011\/index.html",
        "xqIHCrwmz2Am9RbxHyGnag"
    ],
    [
        "pages\/courses\/astro120\/index.html",
        "J5g0myyQeV4nmqgtzE7pQ"
    ],
    [
        "pages\/courses\/astro130\/index.html",
        "wrllc2fI9p1cE8R8t6KkQw"
    ],
    [
        "pages\/courses\/astro140\/index.html",
        "o1AKbFlA04fl9fMatnJwQ"
    ],
    [
        "pages\/courses\/bisc001\/index.html",
        "TVxo9t0kPKsf6dl4hNNcBA"
    ],
    [
        "pages\/courses\/bisc002\/index.html",
        "9iGfY1z2p036mMQ2Q5gSRw"
    ],
    [
        "pages\/courses\/bisc003\/index.html",
        "utAyu4imBHxiYwXwKXeSA"
    ],
    [
        "pages\/courses\/bisc004\/index.html",
        "JRD32ni0oBtgeVrdZYFVg"
    ],
    [
        "pages\/courses\/biol11\/index.html",
        "pZbEGul2BcIwo0Ynj8UrNw"
    ],
    [
        "pages\/courses\/biol110\/index.html",
        "cPelUNcXvOpBq2IytPmg"
    ],
    [
        "pages\/courses\/biol120n\/index.html",
        "52JuaGmjx4aXe0Eje3SQ"
    ],
    [
        "pages\/courses\/biol133\/index.html",
        "hqGKQrNHmC19SBlCcwwHQ"
    ],
    [
        "pages\/courses\/biol141\/index.html",
        "xrEK0JJFWlrfcSMlMxcFOg"
    ],
    [
        "pages\/courses\/biol155\/index.html",
        "pIRaufK3eCBhl3WpU5vow"
    ],
    [
        "pages\/courses\/biol177\/index.html",
        "l27m3pV3jgG09qRgmsYTWw"
    ],
    [
        "pages\/courses\/bmmb551\/index.html",
        "UaCVJqUNujkvVWlXE0Z4Yw"
    ],
    [
        "pages\/courses\/bmmb852\/index.html",
        "YMKGFtwPJbmIH9iTxxCEqA"
    ],
    [
        "pages\/courses\/chem005\/index.html",
        "LbnZzVe1p2dGl91RBwMxyw"
    ],
    [
        "pages\/courses\/chem101\/index.html",
        "tHhD3U2VzEbyuUbW9EmSQ"
    ],
    [
        "pages\/courses\/chem110\/index.html",
        "jQ7oYJ4OQEVFJ4SIOMTe5w"
    ],
    [
        "pages\/courses\/chem111\/index.html",
        "rl7j2VQTWssWOBxKAvpEQ"
    ],
    [
        "pages\/courses\/chem202\/index.html",
        "8frgOGB3tItDevV1egmhQ"
    ],
    [
        "pages\/courses\/chem811\/index.html",
        "jsbwUuQlLap4qsWLhRq2Xg"
    ],
    [
        "pages\/courses\/chem812\/index.html",
        "cQFiiQKom7yl9w1vfS2pxA"
    ],
    [
        "pages\/courses\/frnsc100\/index.html",
        "0Jwrts6VSQWQuBvE1qDbBw"
    ],
    [
        "pages\/courses\/frnsc200\/index.html",
        "c64xhpGULY8l59amZArzTg"
    ],
    [
        "pages\/courses\/frnsc210\/index.html",
        "6PWPTM10Kpz1OY2J3btlg"
    ],
    [
        "pages\/courses\/math004\/index.html",
        "EZyJF7om7JAi9544AUuuzg"
    ],
    [
        "pages\/courses\/math017\/index.html",
        "5LdJq1WFF9sDkkrTAIizuA"
    ],
    [
        "pages\/courses\/math021\/index.html",
        "CW7n7ySphBm9DphbLAeKqw"
    ],
    [
        "pages\/courses\/math022\/index.html",
        "fC9QnS2cBAnKEupKLpUGag"
    ],
    [
        "pages\/courses\/math026\/index.html",
        "J4EgdaXSpy7ZjYP6xOJuYQ"
    ],
    [
        "pages\/courses\/math034\/index.html",
        "j1CrSzZLzpS8SrbQKt0AA"
    ],
    [
        "pages\/courses\/math036\/index.html",
        "ORTksFSrx4kjI9CxXOicw"
    ],
    [
        "pages\/courses\/math110\/index.html",
        "dKOpo7f40VqumVjHOYQA"
    ],
    [
        "pages\/courses\/math140\/index.html",
        "RKOC4tryoNjf5hzNvji2Q"
    ],
    [
        "pages\/courses\/math141\/index.html",
        "CihcfBsEoLBfGfW0KhGA"
    ],
    [
        "pages\/courses\/math220\/index.html",
        "qNk4L0XlHIIDIobJgAN3A"
    ],
    [
        "pages\/courses\/math250\/index.html",
        "wefXvBkNsElkFDy7qFhIPQ"
    ],
    [
        "pages\/courses\/math436\/index.html",
        "DSdUbIoxmgVVJXyeIE8Mw"
    ],
    [
        "pages\/courses\/micrb106\/index.html",
        "WaEj3Uf0YYS234SCkuplw"
    ],
    [
        "pages\/courses\/micrb107\/index.html",
        "NZ70DbWJeTybNS1xdCdVnQ"
    ],
    [
        "pages\/courses\/phys010\/index.html",
        "XcNj22S9f3DL5DuSLSzAQ"
    ],
    [
        "pages\/courses\/phys211\/index.html",
        "FiJv4AxK0vZG6mFpLMmg"
    ],
    [
        "pages\/syllabi\/index.html",
        "GI3RW4YXtLCOimLofFrXg"
    ],
    [
        "pages\/syllabi\/astro001\/index.html",
        "UzPDUjIf54OEyAOPxxK2sw"
    ],
    [
        "pages\/syllabi\/astro011\/index.html",
        "cwZjTnMdSknl1dvU3Fyw"
    ],
    [
        "pages\/syllabi\/astro120\/index.html",
        "oziDey4qJGMD3PltKMlw"
    ],
    [
        "pages\/syllabi\/astro130\/index.html",
        "xGfMK5M5oEe6xaNEkB29Q"
    ],
    [
        "pages\/syllabi\/astro140\/index.html",
        "CoswI2QvlgJUD29QCfNw"
    ],
    [
        "pages\/syllabi\/bisc001\/index.html",
        "lew2dKS6T9sgwYOIHqcJRA"
    ],
    [
        "pages\/syllabi\/bisc002\/index.html",
        "XLf1WgOhyLxxtMxmHeJFQ"
    ],
    [
        "pages\/syllabi\/bisc003\/index.html",
        "wKTJRtzz0uug7pytsHuQA"
    ],
    [
        "pages\/syllabi\/bisc004\/index.html",
        "wYyvdaD6SGpTUv8Y90Wimg"
    ],
    [
        "pages\/syllabi\/biol11\/index.html",
        "YOs8IioOqKEVDLsFS3gg"
    ],
    [
        "pages\/syllabi\/biol110\/index.html",
        "qUyyLt2M34DbnCBROD00A"
    ],
    [
        "pages\/syllabi\/biol120n\/index.html",
        "hK1vqMluKQjazIg43zE0RA"
    ],
    [
        "pages\/syllabi\/biol125n\/index.html",
        "qRjl24aH2RNItjMM3YFw"
    ],
    [
        "pages\/syllabi\/biol127\/index.html",
        "kz2rK4BotGMOj6C3Xrs8IQ"
    ],
    [
        "pages\/syllabi\/biol133\/index.html",
        "n9utDzO4xrbS6Lz0FvP5w"
    ],
    [
        "pages\/syllabi\/biol141\/index.html",
        "zaIN1LPZRRiiOLxtjcR8g"
    ],
    [
        "pages\/syllabi\/biol155\/index.html",
        "EU5DveD8mlSHBkYbPzQ"
    ],
    [
        "pages\/syllabi\/biol177\/index.html",
        "uixpH7hzPArWCNWPgUPhA"
    ],
    [
        "pages\/syllabi\/bmmb551\/index.html",
        "JniUBntTo2gGW8xUHQLQPw"
    ],
    [
        "pages\/syllabi\/bmmb852\/index.html",
        "YI7fvs8fAQwzSsoXWsEvHQ"
    ],
    [
        "pages\/syllabi\/chem005\/index.html",
        "xipd0Jrlri7vJXZf3Q02yw"
    ],
    [
        "pages\/syllabi\/chem101\/index.html",
        "IT10JMpi6265nd7wne12w"
    ],
    [
        "pages\/syllabi\/chem110\/index.html",
        "HMdQuaGoejld4IS4Gzntg"
    ],
    [
        "pages\/syllabi\/chem111\/index.html",
        "h6rffnBThzmoZZDQ7Mqpw"
    ],
    [
        "pages\/syllabi\/chem130\/index.html",
        "SoykOcU90MilCYHcxr9dYw"
    ],
    [
        "pages\/syllabi\/chem202\/index.html",
        "rud1FBYcHU9E1OSdevq6g"
    ],
    [
        "pages\/syllabi\/chem810\/index.html",
        "diM7aqUbmOITt2xUNPQdKQ"
    ],
    [
        "pages\/syllabi\/chem811\/index.html",
        "M5kwpMeIeWMJmx9gIoplw"
    ],
    [
        "pages\/syllabi\/chem812\/index.html",
        "LrHhS7vRPjChw02KJJDnyg"
    ],
    [
        "pages\/syllabi\/frnsc100\/index.html",
        "Utf74KnXfYiLHpiuLLZg"
    ],
    [
        "pages\/syllabi\/frnsc200\/index.html",
        "rucV3sxGDKoNgUc8YWn9rg"
    ],
    [
        "pages\/syllabi\/frnsc210\/index.html",
        "MnHKprHxCCrMuX6cbnFNQ"
    ],
    [
        "pages\/syllabi\/math004\/index.html",
        "8gEa2OaYkBiQ1Sn9e191DA"
    ],
    [
        "pages\/syllabi\/math017\/index.html",
        "1N1LPSNjg2TkGWsLLovIQ"
    ],
    [
        "pages\/syllabi\/math021\/index.html",
        "TCPSwTZ2VGKOYFffwcGmWg"
    ],
    [
        "pages\/syllabi\/math022\/index.html",
        "d7o7ItoT6wCsSYSAu5ZzsQ"
    ],
    [
        "pages\/syllabi\/math026\/index.html",
        "FNRH14dApt6IxUAHrPdhfQ"
    ],
    [
        "pages\/syllabi\/math034\/index.html",
        "EEttTWLMzIT1vgmyUxlMA"
    ],
    [
        "pages\/syllabi\/math036\/index.html",
        "Ds8MEfXWKyWlolsetwoRg"
    ],
    [
        "pages\/syllabi\/math110\/index.html",
        "fddHtOcIfBtx6bLUa1gkA"
    ],
    [
        "pages\/syllabi\/math140\/index.html",
        "LRu6ghjggZvu0S6oXniZDA"
    ],
    [
        "pages\/syllabi\/math141\/index.html",
        "asX93YvkFbdLc16pM1VyA"
    ],
    [
        "pages\/syllabi\/math220\/index.html",
        "hJHVeQMjPPFu9wVWPYIAmg"
    ],
    [
        "pages\/syllabi\/math250\/index.html",
        "mZ7OoL8sweN1iOtsa6A"
    ],
    [
        "pages\/syllabi\/math436\/index.html",
        "ql0Y4nTVcmVwE85zgr5w"
    ],
    [
        "pages\/syllabi\/micrb106\/index.html",
        "eMJmYOQrluz4Ja9ugI8giw"
    ],
    [
        "pages\/syllabi\/micrb107\/index.html",
        "m0BwRRlZ9P8Zrw0akI2Alw"
    ],
    [
        "pages\/syllabi\/phys010\/index.html",
        "zilUEKNJbp13kUspCPuXQw"
    ],
    [
        "pages\/syllabi\/phys211\/index.html",
        "kQpTajzB0JWj6QP0z7eC8g"
    ],
    [
        "pages\/syllabi\/phys212\/index.html",
        "viPHt6f98927fhxVhe3Bog"
    ],
    [
        "index.html",
        "tI74TTDVG5vUuIuhDt5Wjw"
    ],
    [
        "files\/haxcms-managed\/512x512-Artboard 1@4x.png",
        "3mp24mc0tzcfyRwIPtpLA"
    ],
    [
        "files\/haxcms-managed\/310x310-Artboard 1@4x.png",
        "JL69rD5dd0GlV2rpE6Q5cg"
    ],
    [
        "files\/haxcms-managed\/192x192-Artboard 1@4x.png",
        "daMyDrZL74P2ZluYPjLJg"
    ],
    [
        "files\/haxcms-managed\/150x150-Artboard 1@4x.png",
        "WcCvq510p5y6Tefwuj9ig"
    ],
    [
        "files\/haxcms-managed\/144x144-Artboard 1@4x.png",
        "mrUgi7FNTCrk8TchPSLYQ"
    ],
    [
        "files\/haxcms-managed\/96x96-Artboard 1@4x.png",
        "AkQQPrMFM6Mx6foXgypmA"
    ],
    [
        "files\/haxcms-managed\/72x72-Artboard 1@4x.png",
        "h1ygHX7OlPDduiOlUpB1kw"
    ],
    [
        "files\/haxcms-managed\/70x70-Artboard 1@4x.png",
        "P52L0yFQS4pdYODFqKg"
    ],
    [
        "files\/haxcms-managed\/48x48-Artboard 1@4x.png",
        "xK7gr7iBE73TjZMGbThg"
    ],
    [
        "files\/haxcms-managed\/36x36-Artboard 1@4x.png",
        "xjGf7UI4m8Zny4cCq20WqQ"
    ],
    [
        "files\/haxcms-managed\/16x16-Artboard 1@4x.png",
        "bpLsNHa402QevAjU0utkjQ"
    ],
    [
        "manifest.json",
        "gmNXxVtnfpUk2yLp2YOQ"
    ],
    [
        "site.json",
        "MFT3vGr7LnGAq1tToOljA"
    ],
    [
        "404.html",
        "QEzLbAYRfRrqwxyIGIpfNQ"
    ],
    [
        "files\/Artboard 1@4x.png",
        "nk321bQONKr7BzrNCNHvQ"
    ]
];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, { credentials: 'same-origin' });
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {

      return self.clients.claim();

    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.toolbox = e() } }(function () { return function e(t, n, r) { function o(c, s) { if (!n[c]) { if (!t[c]) { var a = "function" == typeof require && require; if (!s && a) return a(c, !0); if (i) return i(c, !0); var u = new Error("Cannot find module '" + c + "'"); throw u.code = "MODULE_NOT_FOUND", u } var f = n[c] = { exports: {} }; t[c][0].call(f.exports, function (e) { var n = t[c][1][e]; return o(n ? n : e) }, f, f.exports, e, t, n, r) } return n[c].exports } for (var i = "function" == typeof require && require, c = 0; c < r.length; c++)o(r[c]); return o }({ 1: [function (e, t, n) { "use strict"; function r(e, t) { t = t || {}; var n = t.debug || m.debug; n && console.log("[sw-toolbox] " + e) } function o(e) { var t; return e && e.cache && (t = e.cache.name), t = t || m.cache.name, caches.open(t) } function i(e, t) { t = t || {}; var n = t.successResponses || m.successResponses; return fetch(e.clone()).then(function (r) { return "GET" === e.method && n.test(r.status) && o(t).then(function (n) { n.put(e, r).then(function () { var r = t.cache || m.cache; (r.maxEntries || r.maxAgeSeconds) && r.name && c(e, n, r) }) }), r.clone() }) } function c(e, t, n) { var r = s.bind(null, e, t, n); d = d ? d.then(r) : r() } function s(e, t, n) { var o = e.url, i = n.maxAgeSeconds, c = n.maxEntries, s = n.name, a = Date.now(); return r("Updating LRU order for " + o + ". Max entries is " + c + ", max age is " + i), g.getDb(s).then(function (e) { return g.setTimestampForUrl(e, o, a) }).then(function (e) { return g.expireEntries(e, c, i, a) }).then(function (e) { r("Successfully updated IDB."); var n = e.map(function (e) { return t.delete(e) }); return Promise.all(n).then(function () { r("Done with cache cleanup.") }) }).catch(function (e) { r(e) }) } function a(e, t, n) { return r("Renaming cache: [" + e + "] to [" + t + "]", n), caches.delete(t).then(function () { return Promise.all([caches.open(e), caches.open(t)]).then(function (t) { var n = t[0], r = t[1]; return n.keys().then(function (e) { return Promise.all(e.map(function (e) { return n.match(e).then(function (t) { return r.put(e, t) }) })) }).then(function () { return caches.delete(e) }) }) }) } function u(e, t) { return o(t).then(function (t) { return t.add(e) }) } function f(e, t) { return o(t).then(function (t) { return t.delete(e) }) } function h(e) { e instanceof Promise || p(e), m.preCacheItems = m.preCacheItems.concat(e) } function p(e) { var t = Array.isArray(e); if (t && e.forEach(function (e) { "string" == typeof e || e instanceof Request || (t = !1) }), !t) throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests."); return e } function l(e, t, n) { if (!e) return !1; if (t) { var r = e.headers.get("date"); if (r) { var o = new Date(r); if (o.getTime() + 1e3 * t < n) return !1 } } return !0 } var d, m = e("./options"), g = e("./idb-cache-expiration"); t.exports = { debug: r, fetchAndCache: i, openCache: o, renameCache: a, cache: u, uncache: f, precache: h, validatePrecacheInput: p, isResponseFresh: l } }, { "./idb-cache-expiration": 2, "./options": 4 }], 2: [function (e, t, n) { "use strict"; function r(e) { return new Promise(function (t, n) { var r = indexedDB.open(u + e, f); r.onupgradeneeded = function () { var e = r.result.createObjectStore(h, { keyPath: p }); e.createIndex(l, l, { unique: !1 }) }, r.onsuccess = function () { t(r.result) }, r.onerror = function () { n(r.error) } }) } function o(e) { return e in d || (d[e] = r(e)), d[e] } function i(e, t, n) { return new Promise(function (r, o) { var i = e.transaction(h, "readwrite"), c = i.objectStore(h); c.put({ url: t, timestamp: n }), i.oncomplete = function () { r(e) }, i.onabort = function () { o(i.error) } }) } function c(e, t, n) { return t ? new Promise(function (r, o) { var i = 1e3 * t, c = [], s = e.transaction(h, "readwrite"), a = s.objectStore(h), u = a.index(l); u.openCursor().onsuccess = function (e) { var t = e.target.result; if (t && n - i > t.value[l]) { var r = t.value[p]; c.push(r), a.delete(r), t.continue() } }, s.oncomplete = function () { r(c) }, s.onabort = o }) : Promise.resolve([]) } function s(e, t) { return t ? new Promise(function (n, r) { var o = [], i = e.transaction(h, "readwrite"), c = i.objectStore(h), s = c.index(l), a = s.count(); s.count().onsuccess = function () { var e = a.result; e > t && (s.openCursor().onsuccess = function (n) { var r = n.target.result; if (r) { var i = r.value[p]; o.push(i), c.delete(i), e - o.length > t && r.continue() } }) }, i.oncomplete = function () { n(o) }, i.onabort = r }) : Promise.resolve([]) } function a(e, t, n, r) { return c(e, n, r).then(function (n) { return s(e, t).then(function (e) { return n.concat(e) }) }) } var u = "sw-toolbox-", f = 1, h = "store", p = "url", l = "timestamp", d = {}; t.exports = { getDb: o, setTimestampForUrl: i, expireEntries: a } }, {}], 3: [function (e, t, n) { "use strict"; function r(e) { var t = a.match(e.request); t ? e.respondWith(t(e.request)) : a.default && "GET" === e.request.method && 0 === e.request.url.indexOf("http") && e.respondWith(a.default(e.request)) } function o(e) { s.debug("activate event fired"); var t = u.cache.name + "$$$inactive$$$"; e.waitUntil(s.renameCache(t, u.cache.name)) } function i(e) { return e.reduce(function (e, t) { return e.concat(t) }, []) } function c(e) { var t = u.cache.name + "$$$inactive$$$"; s.debug("install event fired"), s.debug("creating cache [" + t + "]"), e.waitUntil(s.openCache({ cache: { name: t } }).then(function (e) { return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function (t) { return s.debug("preCache list: " + (t.join(", ") || "(none)")), e.addAll(t) }) })) } e("serviceworker-cache-polyfill"); var s = e("./helpers"), a = e("./router"), u = e("./options"); t.exports = { fetchListener: r, activateListener: o, installListener: c } }, { "./helpers": 1, "./options": 4, "./router": 6, "serviceworker-cache-polyfill": 16 }], 4: [function (e, t, n) { "use strict"; var r; r = self.registration ? self.registration.scope : self.scope || new URL("./", self.location).href, t.exports = { cache: { name: "$$$toolbox-cache$$$" + r + "$$$", maxAgeSeconds: null, maxEntries: null }, debug: !1, networkTimeoutSeconds: null, preCacheItems: [], successResponses: /^0|([123]\d\d)|(40[14567])|410$/ } }, {}], 5: [function (e, t, n) { "use strict"; var r = new URL("./", self.location), o = r.pathname, i = e("path-to-regexp"), c = function (e, t, n, r) { t instanceof RegExp ? this.fullUrlRegExp = t : (0 !== t.indexOf("/") && (t = o + t), this.keys = [], this.regexp = i(t, this.keys)), this.method = e, this.options = r, this.handler = n }; c.prototype.makeHandler = function (e) { var t; if (this.regexp) { var n = this.regexp.exec(e); t = {}, this.keys.forEach(function (e, r) { t[e.name] = n[r + 1] }) } return function (e) { return this.handler(e, t, this.options) }.bind(this) }, t.exports = c }, { "path-to-regexp": 15 }], 6: [function (e, t, n) { "use strict"; function r(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var o = e("./route"), i = e("./helpers"), c = function (e, t) { for (var n = e.entries(), r = n.next(), o = []; !r.done;) { var i = new RegExp(r.value[0]); i.test(t) && o.push(r.value[1]), r = n.next() } return o }, s = function () { this.routes = new Map, this.routes.set(RegExp, new Map), this.default = null };["get", "post", "put", "delete", "head", "any"].forEach(function (e) { s.prototype[e] = function (t, n, r) { return this.add(e, t, n, r) } }), s.prototype.add = function (e, t, n, c) { c = c || {}; var s; t instanceof RegExp ? s = RegExp : (s = c.origin || self.location.origin, s = s instanceof RegExp ? s.source : r(s)), e = e.toLowerCase(); var a = new o(e, t, n, c); this.routes.has(s) || this.routes.set(s, new Map); var u = this.routes.get(s); u.has(e) || u.set(e, new Map); var f = u.get(e), h = a.regexp || a.fullUrlRegExp; f.has(h.source) && i.debug('"' + t + '" resolves to same regex as existing route.'), f.set(h.source, a) }, s.prototype.matchMethod = function (e, t) { var n = new URL(t), r = n.origin, o = n.pathname; return this._match(e, c(this.routes, r), o) || this._match(e, [this.routes.get(RegExp)], t) }, s.prototype._match = function (e, t, n) { if (0 === t.length) return null; for (var r = 0; r < t.length; r++) { var o = t[r], i = o && o.get(e.toLowerCase()); if (i) { var s = c(i, n); if (s.length > 0) return s[0].makeHandler(n) } } return null }, s.prototype.match = function (e) { return this.matchMethod(e.method, e.url) || this.matchMethod("any", e.url) }, t.exports = new s }, { "./helpers": 1, "./route": 5 }], 7: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache first [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (t) { var r = n.cache || o.cache, c = Date.now(); return i.isResponseFresh(t, r.maxAgeSeconds, c) ? t : i.fetchAndCache(e, n) }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 8: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache only [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (e) { var t = n.cache || o.cache, r = Date.now(); if (i.isResponseFresh(e, t.maxAgeSeconds, r)) return e }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 9: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: fastest [" + e.url + "]", n), new Promise(function (r, c) { var s = !1, a = [], u = function (e) { a.push(e.toString()), s ? c(new Error('Both cache and network failed: "' + a.join('", "') + '"')) : s = !0 }, f = function (e) { e instanceof Response ? r(e) : u("No result returned") }; o.fetchAndCache(e.clone(), n).then(f, u), i(e, t, n).then(f, u) }) } var o = e("../helpers"), i = e("./cacheOnly"); t.exports = r }, { "../helpers": 1, "./cacheOnly": 8 }], 10: [function (e, t, n) { t.exports = { networkOnly: e("./networkOnly"), networkFirst: e("./networkFirst"), cacheOnly: e("./cacheOnly"), cacheFirst: e("./cacheFirst"), fastest: e("./fastest") } }, { "./cacheFirst": 7, "./cacheOnly": 8, "./fastest": 9, "./networkFirst": 11, "./networkOnly": 12 }], 11: [function (e, t, n) { "use strict"; function r(e, t, n) { n = n || {}; var r = n.successResponses || o.successResponses, c = n.networkTimeoutSeconds || o.networkTimeoutSeconds; return i.debug("Strategy: network first [" + e.url + "]", n), i.openCache(n).then(function (t) { var s, a, u = []; if (c) { var f = new Promise(function (r) { s = setTimeout(function () { t.match(e).then(function (e) { var t = n.cache || o.cache, c = Date.now(), s = t.maxAgeSeconds; i.isResponseFresh(e, s, c) && r(e) }) }, 1e3 * c) }); u.push(f) } var h = i.fetchAndCache(e, n).then(function (e) { if (s && clearTimeout(s), r.test(e.status)) return e; throw i.debug("Response was an HTTP error: " + e.statusText, n), a = e, new Error("Bad response") }).catch(function (r) { return i.debug("Network or response error, fallback to cache [" + e.url + "]", n), t.match(e).then(function (e) { if (e) return e; if (a) return a; throw r }) }); return u.push(h), Promise.race(u) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 12: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: network only [" + e.url + "]", n), fetch(e) } var o = e("../helpers"); t.exports = r }, { "../helpers": 1 }], 13: [function (e, t, n) { "use strict"; var r = e("./options"), o = e("./router"), i = e("./helpers"), c = e("./strategies"), s = e("./listeners"); i.debug("Service Worker Toolbox is loading"), self.addEventListener("install", s.installListener), self.addEventListener("activate", s.activateListener), self.addEventListener("fetch", s.fetchListener), t.exports = { networkOnly: c.networkOnly, networkFirst: c.networkFirst, cacheOnly: c.cacheOnly, cacheFirst: c.cacheFirst, fastest: c.fastest, router: o, options: r, cache: i.cache, uncache: i.uncache, precache: i.precache } }, { "./helpers": 1, "./listeners": 3, "./options": 4, "./router": 6, "./strategies": 10 }], 14: [function (e, t, n) { t.exports = Array.isArray || function (e) { return "[object Array]" == Object.prototype.toString.call(e) } }, {}], 15: [function (e, t, n) { function r(e, t) { for (var n, r = [], o = 0, i = 0, c = "", s = t && t.delimiter || "/"; null != (n = x.exec(e));) { var f = n[0], h = n[1], p = n.index; if (c += e.slice(i, p), i = p + f.length, h) c += h[1]; else { var l = e[i], d = n[2], m = n[3], g = n[4], v = n[5], w = n[6], y = n[7]; c && (r.push(c), c = ""); var b = null != d && null != l && l !== d, E = "+" === w || "*" === w, R = "?" === w || "*" === w, k = n[2] || s, $ = g || v; r.push({ name: m || o++, prefix: d || "", delimiter: k, optional: R, repeat: E, partial: b, asterisk: !!y, pattern: $ ? u($) : y ? ".*" : "[^" + a(k) + "]+?" }) } } return i < e.length && (c += e.substr(i)), c && r.push(c), r } function o(e, t) { return s(r(e, t)) } function i(e) { return encodeURI(e).replace(/[\/?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function c(e) { return encodeURI(e).replace(/[?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function s(e) { for (var t = new Array(e.length), n = 0; n < e.length; n++)"object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$")); return function (n, r) { for (var o = "", s = n || {}, a = r || {}, u = a.pretty ? i : encodeURIComponent, f = 0; f < e.length; f++) { var h = e[f]; if ("string" != typeof h) { var p, l = s[h.name]; if (null == l) { if (h.optional) { h.partial && (o += h.prefix); continue } throw new TypeError('Expected "' + h.name + '" to be defined') } if (v(l)) { if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(l) + "`"); if (0 === l.length) { if (h.optional) continue; throw new TypeError('Expected "' + h.name + '" to not be empty') } for (var d = 0; d < l.length; d++) { if (p = u(l[d]), !t[f].test(p)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '", but received `' + JSON.stringify(p) + "`"); o += (0 === d ? h.prefix : h.delimiter) + p } } else { if (p = h.asterisk ? c(l) : u(l), !t[f].test(p)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + p + '"'); o += h.prefix + p } } else o += h } return o } } function a(e) { return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1") } function u(e) { return e.replace(/([=!:$\/()])/g, "\\$1") } function f(e, t) { return e.keys = t, e } function h(e) { return e.sensitive ? "" : "i" } function p(e, t) { var n = e.source.match(/\((?!\?)/g); if (n) for (var r = 0; r < n.length; r++)t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null }); return f(e, t) } function l(e, t, n) { for (var r = [], o = 0; o < e.length; o++)r.push(g(e[o], t, n).source); var i = new RegExp("(?:" + r.join("|") + ")", h(n)); return f(i, t) } function d(e, t, n) { return m(r(e, n), t, n) } function m(e, t, n) { v(t) || (n = t || n, t = []), n = n || {}; for (var r = n.strict, o = n.end !== !1, i = "", c = 0; c < e.length; c++) { var s = e[c]; if ("string" == typeof s) i += a(s); else { var u = a(s.prefix), p = "(?:" + s.pattern + ")"; t.push(s), s.repeat && (p += "(?:" + u + p + ")*"), p = s.optional ? s.partial ? u + "(" + p + ")?" : "(?:" + u + "(" + p + "))?" : u + "(" + p + ")", i += p } } var l = a(n.delimiter || "/"), d = i.slice(-l.length) === l; return r || (i = (d ? i.slice(0, -l.length) : i) + "(?:" + l + "(?=$))?"), i += o ? "$" : r && d ? "" : "(?=" + l + "|$)", f(new RegExp("^" + i, h(n)), t) } function g(e, t, n) { return v(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? p(e, t) : v(e) ? l(e, t, n) : d(e, t, n) } var v = e("isarray"); t.exports = g, t.exports.parse = r, t.exports.compile = o, t.exports.tokensToFunction = s, t.exports.tokensToRegExp = m; var x = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g") }, { isarray: 14 }], 16: [function (e, t, n) { !function () { var e = Cache.prototype.addAll, t = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/); if (t) var n = t[1], r = parseInt(t[2]); e && (!t || "Firefox" === n && r >= 46 || "Chrome" === n && r >= 50) || (Cache.prototype.addAll = function (e) { function t(e) { this.name = "NetworkError", this.code = 19, this.message = e } var n = this; return t.prototype = Object.create(Error.prototype), Promise.resolve().then(function () { if (arguments.length < 1) throw new TypeError; return e = e.map(function (e) { return e instanceof Request ? e : String(e) }), Promise.all(e.map(function (e) { "string" == typeof e && (e = new Request(e)); var n = new URL(e.url).protocol; if ("http:" !== n && "https:" !== n) throw new t("Invalid scheme"); return fetch(e.clone()) })) }).then(function (r) { if (r.some(function (e) { return !e.ok })) throw new t("Incorrect response status"); return Promise.all(r.map(function (t, r) { return n.put(e[r], t) })) }).then(function () { }) }, Cache.prototype.add = function (e) { return this.addAll([e]) }) }() }, {}] }, {}, [13])(13) });


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.
