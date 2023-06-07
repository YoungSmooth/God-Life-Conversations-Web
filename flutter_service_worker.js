'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "b8ef5ca566f6722f44ac68cdae9eb9a6",
"assets/AssetManifest.smcbin": "e8d655c0592a407dfab20b27c51849f7",
"assets/FontManifest.json": "8d501ac574479214d315c2e820f73c5e",
"assets/fonts/MaterialIcons-Regular.otf": "871c24a9c3211193d902b8864f4db9a7",
"assets/lib/assets/about.png": "20bc8b08babcfbc838028665c750bd31",
"assets/lib/assets/artistname.png": "2e938fa3967b6213bc41a3c296e17138",
"assets/lib/assets/event.png": "d6d962ce1d8788a69752445a457ff4e4",
"assets/lib/assets/fav.png": "e9809ed25bfc4a63171dae724ff5ca3d",
"assets/lib/assets/fav2.png": "8f617f8fb0c33b3b12b5d782b29fbec3",
"assets/lib/assets/give.jpg": "54af292f714bfa373fbf86ddbe86c98b",
"assets/lib/assets/givee.png": "74ea39022c36a86d6d009be8aeabd77b",
"assets/lib/assets/home.png": "32a26aa4068e09ddf8e70c0f80a98f47",
"assets/lib/assets/left.png": "b9cb5d59e02d2ba6f36021e8b2eab31e",
"assets/lib/assets/logo.jpg": "d58a448eddadf7f5656cf63f004bd48c",
"assets/lib/assets/Logoblack.png": "fad0be3a142e5f4020462b875ff62718",
"assets/lib/assets/Logowhite.png": "83e6d81130919221b64e199b5472ab22",
"assets/lib/assets/Messages.jpg": "8ecb4e16d0d037e867c11e911587cce6",
"assets/lib/assets/miraclemoney.jpg": "bb39d604e68425f40086a9dc6231f1c1",
"assets/lib/assets/pause.png": "575ec15c6d46fe9f720d58e3034fe7ef",
"assets/lib/assets/play.png": "46c7c2e572e2c535690b21f2b3284ac3",
"assets/lib/assets/play2.png": "77226a3b8aeb3ca9180fe9e9ffdafd79",
"assets/lib/assets/playing.png": "74e421f5cd395d713403fb1e96a2eeb3",
"assets/lib/assets/right.png": "2d13443b7cc8b39fd59fc173c0fdc521",
"assets/lib/assets/serve.png": "31e5b022a79f211ea8e50c978150e633",
"assets/lib/assets/share.png": "b57ace8e59aa0bc905c442f4daec2a4c",
"assets/lib/assets/songname.png": "a914af152db7af5332f6da960b195130",
"assets/lib/assets/video1.mp4": "0877c786411cb01a0da0599f3381a2c7",
"assets/lib/assets/wb1.jpg": "db2e9746d83297874c91a94628e6eb18",
"assets/lib/assets/wb2.jpg": "07720d9317a9afe8099399a80f194617",
"assets/lib/assets/wb3.jpg": "89cd0587a9b084877f88c2c52f34845f",
"assets/lib/assets/wb4.jpg": "fc1ee6e6e8fab354d81be83999234b63",
"assets/lib/assets/wb5.jpg": "191a7266e4261d6ee4f1fcd5b9c9ca5b",
"assets/NOTICES": "fbf2a386633cadc382048e16039de31b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "4647829c7e37bb7846dc2f8a6faf3a1b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b28d1073a20a9f18c17c99298fbc93eb",
"/": "b28d1073a20a9f18c17c99298fbc93eb",
"main.dart.js": "9da631ba13c7ad85a6271751a7b8e7fb",
"manifest.json": "516ead7a7fa9ee8affec8519231364f0",
"version.json": "55c3d684dd36713c619c8dd90375244f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
