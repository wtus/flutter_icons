'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "41c0e0deb43c65513561fc199e82005c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_icons/.git/config": "604d63de91ed69cb90b8093075161a1e",
"flutter_icons/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutter_icons/.git/FETCH_HEAD": "b7b9a15948828879936ec3dc15a375c1",
"flutter_icons/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"flutter_icons/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"flutter_icons/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"flutter_icons/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"flutter_icons/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"flutter_icons/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutter_icons/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"flutter_icons/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"flutter_icons/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"flutter_icons/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"flutter_icons/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"flutter_icons/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"flutter_icons/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutter_icons/.git/logs/refs/remotes/origin/github_page": "7ebc911c24221f275f12437aa8562bca",
"flutter_icons/.git/logs/refs/remotes/origin/master": "9e290e289cb3e8132243601a5443e0f6",
"flutter_icons/.git/logs/refs/remotes/origin/master1": "31fadc6ca59fddc786309e00e7cb9827",
"flutter_icons/.git/objects/0f/15e1fb33c194aabde5279a58ce62ae7a23f641": "b4ee9a8e8422d528df0ceb988cf9cc29",
"flutter_icons/.git/objects/13/ef0cf24c1eebcce7c823ebd2355d73a00f7923": "b5438d6ba4505865ffa0d5ca753ab99e",
"flutter_icons/.git/objects/1a/e27c1a9c202b6adeb066db95238e58619758e2": "45605276d3144f84ad22978de006979f",
"flutter_icons/.git/objects/2f/d32803a3c7449a155851db6a0827b5c2954874": "8c570f36eba44a223d82fc5955866e04",
"flutter_icons/.git/objects/31/aa1df7904afce71db5683025671c0c54932e37": "163c2f608ee4c141df4f090c2238ea54",
"flutter_icons/.git/objects/33/b41ec42b1f21bc6ade7d58eb4206241511f50b": "23ee3c57819029bf6ab4381d4c29ee31",
"flutter_icons/.git/objects/4a/10f8a0efe2cdd1cbe62fb98e1197a03b155b50": "d9ede537fded683258fc612562435e52",
"flutter_icons/.git/objects/4d/18e2ef8d59c28a7aee9a4663d0fa179592ae4c": "b08dd03517bf5da2afe098d538976d0f",
"flutter_icons/.git/objects/4f/6593aab85b14069d0efb23c433edaec290d7c5": "2ff5b736d52d0042fdf990b6bf27e2e9",
"flutter_icons/.git/objects/76/261c6903905fbb5052e33df292a50cf12cc311": "63fc68862fb5e6ecf37f2f057dcc2637",
"flutter_icons/.git/objects/87/a6b62478740853c9c29fd0f65a52e81dce53e9": "6c1ee5338c8335d8626dcdc98a21e61a",
"flutter_icons/.git/objects/89/90788a0eaf3c8b7d3fdbae21064ed0d553de83": "5e208f2bd3db018c9049208642b0a925",
"flutter_icons/.git/objects/af/ef1ebad571f25222e196791c69ad55398de48e": "99f41f6cbe25c80466f1e88bade69184",
"flutter_icons/.git/objects/d4/65ba29fce15095615e15970d5fb6b7ad2fe0c5": "8e00b7fc8ee73513f2ba684ede5c0592",
"flutter_icons/.git/objects/da/6c5b63b4cfab6ab6fe4d38e776f5b644129c41": "6eeaf9b1f4d1bcb1eea2f6a07699e472",
"flutter_icons/.git/objects/e4/0a6297cf0d3d2ec22b1da3039a7716bc0b1e07": "06f51a9f401deeef9a046f6d384a29e3",
"flutter_icons/.git/objects/ef/2926ad1199afba42247cd89c810bce31375ca0": "fb4287cd730191a855cdcba6f42c4129",
"flutter_icons/.git/objects/f7/ef527644b259e5f37195cb007aca11f66c5b8c": "01cb5f3220a61fad1212447e21b27e6e",
"flutter_icons/.git/objects/pack/pack-1565f06f5f4710a0825d36626d6dc9a327a7cadb.idx": "a7686ad0c24956c638c39852ce9726e3",
"flutter_icons/.git/objects/pack/pack-1565f06f5f4710a0825d36626d6dc9a327a7cadb.pack": "3a3521fe5e58bc8112cc7dfa884b2de6",
"flutter_icons/.git/refs/remotes/origin/github_page": "0de97cab12c218755aa1d64e775a713c",
"flutter_icons/.git/refs/remotes/origin/master": "532e7d8e1df76a408e903a4b868d467c",
"flutter_icons/.git/refs/remotes/origin/master1": "c824cdf49381358d0b5e08437c351ff5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eebacef8a97ae0c2387df6288c8859ce",
"/": "eebacef8a97ae0c2387df6288c8859ce",
"main.dart.js": "631183f611cb80398b21dc35dcffb8d4",
"manifest.json": "5f8cefde0880b1089f11bf35c7b1b7cc",
"version.json": "dff26c0e6a93a822bdeba8134ae9e761"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
