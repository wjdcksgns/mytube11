'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b295e8369a77a7c9b70caa3fecf84a50",
"assets/AssetManifest.bin.json": "a96c7222525397b0cbe7e79de1dad7f0",
"assets/AssetManifest.json": "c775ae9db93525d0da2f4719b7791c3b",
"assets/assets/age_limit_19.png": "f7c5e49b8771141af557829038fda3d5",
"assets/assets/bluetooth_connected.png": "88235b285259bc66cf3cf67bc56f52d6",
"assets/assets/bluetooth_icon.png": "538315f27dc4f92e2dfb7a82e86b9420",
"assets/assets/kakao_icon.png": "dd7b0b4d2397d0d381ae6c2c9d037bd2",
"assets/assets/line_icon.png": "69ce89751ce00347a52c6c03114f2208",
"assets/assets/logo_wangza.jpg": "a9146ae45db86db00ce27f7b04c42b9a",
"assets/assets/logo_wangza.png": "21a88286fea8ae08c3e886cb34e9cdfb",
"assets/assets/nicknames.txt": "42af2b5637ba480fe7728f4f44c282aa",
"assets/assets/video/creator1/Butterfly-209.mp4": "7b38560e7dbf868e58e29984509f2f96",
"assets/assets/video/creator1/profile1.png": "2962f3aa5edd2f11517b962dbc0daf6c",
"assets/assets/video/creator1/sample1.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/assets/video/creator2/digitaltwin.mp4": "ff6098a33ba6d6c79f0a477c405c1e46",
"assets/assets/video/creator2/profile2.png": "4fcf3345b747ef0e119427a160ffac23",
"assets/assets/video/creator2/sample2.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/assets/video/creator3/profile3.png": "d5f4362a75240b3ac902a7ba6c1a1e80",
"assets/assets/video/creator3/sample3.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/assets/video/creator4/profile4.png": "efbe7329e3602a70d0a2612873f0fc6d",
"assets/assets/video/creator4/sample4.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/assets/video/creator5/profile5.png": "64c5689d434124af3f610188842dcbb5",
"assets/assets/video/creator5/sample5.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/assets/video/creator6/profile6.png": "cced9ccf9821d57bf78a295deb3695b2",
"assets/assets/video/creator6/sample6.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/assets/video/creator7/profile7.png": "eaec7fe635f4bb3643a3b2c880ccec1e",
"assets/assets/video/creator7/sample7.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/assets/video/creator8/profile8.png": "d0e2632bebe93f028bcedbe1014f2323",
"assets/assets/video/creator8/sample8.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/assets/video/creator9/profile9.png": "d0e2632bebe93f028bcedbe1014f2323",
"assets/assets/video/creator9/sample9.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "998acc363e9235a4bf4331b855c69701",
"assets/NOTICES": "743ba568a4bc30899945d8f47c07af27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_charts/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/packages/syncfusion_flutter_charts/assets/fonts/Times-New-Roman.ttf": "e2f6bf4ef7c6443cbb0ae33f1c1a9ccc",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/video/creator1/Butterfly-209.mp4": "7b38560e7dbf868e58e29984509f2f96",
"assets/video/creator1/profile1.png": "2962f3aa5edd2f11517b962dbc0daf6c",
"assets/video/creator1/sample1.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/video/creator2/digitaltwin.mp4": "ff6098a33ba6d6c79f0a477c405c1e46",
"assets/video/creator2/profile2.png": "4fcf3345b747ef0e119427a160ffac23",
"assets/video/creator2/sample2.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/video/creator3/profile3.png": "d5f4362a75240b3ac902a7ba6c1a1e80",
"assets/video/creator3/sample3.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/video/creator4/profile4.png": "efbe7329e3602a70d0a2612873f0fc6d",
"assets/video/creator4/sample4.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/video/creator5/profile5.png": "64c5689d434124af3f610188842dcbb5",
"assets/video/creator5/sample5.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/video/creator6/profile6.png": "cced9ccf9821d57bf78a295deb3695b2",
"assets/video/creator6/sample6.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/video/creator7/profile7.png": "eaec7fe635f4bb3643a3b2c880ccec1e",
"assets/video/creator7/sample7.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/video/creator8/profile8.png": "d0e2632bebe93f028bcedbe1014f2323",
"assets/video/creator8/sample8.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"assets/video/creator9/profile9.png": "d0e2632bebe93f028bcedbe1014f2323",
"assets/video/creator9/sample9.mp4": "dc2ffb2d830cca5fce7e2dcef393918e",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5bfb0c4293820b91013d55359e3866a4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4055e2b0e2d8b8f791aaf92a917f922f",
"/": "4055e2b0e2d8b8f791aaf92a917f922f",
"main.dart.js": "f8cc2c89656565412eb1f9294a4b1b7d",
"manifest.json": "6f228e5ec5d45eecf776d59cc26515d2",
"version.json": "cb56d545b2289f645301010b4d210858"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
