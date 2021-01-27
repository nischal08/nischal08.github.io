'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2e9f293d61809e2bbaae0ed9ab447345",
"assets/assets/account.svg": "de2d9e0239cabe660448cf92ab84539e",
"assets/assets/customer%2520stat.jpg": "3a1305d31f5bd93fcf80d4c90ad95abf",
"assets/assets/eSewa-logo.png": "79e4170f783479a3107d804fafac2495",
"assets/assets/faq.svg": "370c485aadefe815d796a9b7e88b6bf3",
"assets/assets/favourites.svg": "b5bfe30d05fedf181b632a865e7120d4",
"assets/assets/FonePay.png": "2c54e7b31bce00ce327babdc12469b30",
"assets/assets/FonePay.svg": "4d5bef0c33a2f94ce5378785b9edf4d9",
"assets/assets/food/burger.png": "e45b74969769e2579b6b1902494c6204",
"assets/assets/food/cake.png": "f9230981f2cffd5a6497408179cc6ae9",
"assets/assets/food/fries.png": "b3face1cc39fe698d3cf40401f792548",
"assets/assets/food/momo.png": "5af9d7fbbc787bafd70146fdd91cabf1",
"assets/assets/history.svg": "b026d4234524eeefc01461cc3d8af33d",
"assets/assets/invite%2520friends.svg": "8b6117db18ab7a404bda261f08ab8dc1",
"assets/assets/Khalti_Logo_color.svg": "583fce03abd08ddf5f155d064454cf71",
"assets/assets/location.svg": "f57e416135b7908c8591ac3c9a418788",
"assets/assets/logout.svg": "e07d0d50096f5fb82d539019fd7e7297",
"assets/assets/my%2520orders.svg": "69d8d68601b268f1e44105ae1e2e1800",
"assets/assets/notification.svg": "758679075f53deb6b117c5e8740299a5",
"assets/assets/payment.svg": "719c489859385025efead25fd247594e",
"assets/assets/profile-user.png": "91f1cbb83b845cb3b58ffd36bc5d0504",
"assets/assets/reorder.svg": "f812b117b0ea0a586a396da0c7540aa1",
"assets/assets/settings.svg": "24c1b5c5b2ba8b39eb3e09af98380558",
"assets/assets/star.svg": "7dc6e5d53d4ab8beede455bf624080c5",
"assets/assets/veg&nonVeg/nonVeg.png": "ca8cb16aeedb32959a3b336166948aa4",
"assets/assets/veg&nonVeg/Veg.png": "2f38a9dad2575e6df91cb549f429eb57",
"assets/FontManifest.json": "944f201ffc7ffe3b1ad368a89ed767b2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/fonts/Roboto-Italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/NOTICES": "8694e1a6b2818fed7535e41ccccac2d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b52aca901fa1fadd67a84b3bda7cc435",
"/": "b52aca901fa1fadd67a84b3bda7cc435",
"main.dart.js": "b46d28fa1c31f0cfa1fa7eb3fdce10c0",
"manifest.json": "09fb3c47a5faac64ee2ca350db947021",
"version.json": "ea805fe26deb60acfeca5d69cd1a49d2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
