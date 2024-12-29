'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "6c2921dd496bac31a6f652f8ced600e9",
"version.json": "d559affb6cffcfba87dd51d647b71e82",
"index.html": "e139bf196aed6ae00a001dff7fdb1fc5",
"/": "e139bf196aed6ae00a001dff7fdb1fc5",
"flutter_bootstrap.js": "d3c8b03b238acc71f5d6b05a38da38f5",
"favicon.png": "3d41fcda8ff231839d18e9b077591e39",
"icons/Icon-512.png": "c15a2863f8379ae80186557e1f6ebd07",
"icons/Icon-maskable-512.png": "c15a2863f8379ae80186557e1f6ebd07",
"icons/Icon-192.png": "83cda85e0877fb1cd140acd7e7a67710",
"icons/Icon-maskable-192.png": "83cda85e0877fb1cd140acd7e7a67710",
"main.dart.js": "cd9e16f467b9bcd100ef7d50fbbf8a6f",
"assets/fonts/MaterialIcons-Regular.otf": "cc5836b4a6cf6f985a4e70c54ccf50dc",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "575f0ba9f15c6e2064baf518e54d3467",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a274ef363de6e46961d26331f4e2eba2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "63aa3ba51b762d526f290f12c9f3caeb",
"assets/AssetManifest.json": "f3638ed0ccc6b8077d14e19966c037ed",
"assets/assets/f.png": "7e730cafb71a013bba85e875eeacd17d",
"assets/assets/launch.png": "58fa944cf0490deddd2467958ed26f5c",
"assets/assets/search.jpg": "3be437dcea9a5fe32c2bcada24390f79",
"assets/assets/school_view1.png": "407faac0bb572a2dd0c89233a3b39263",
"assets/assets/security.jpg": "6670bd2bac39f764354d1e2d9a7bc167",
"assets/assets/school_view.png": "c7c8d6fa3a23495859e9e9898b0c914c",
"assets/NOTICES": "2c01b4eb2fd8cac1e6cd7da7603feaa4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
".git/objects/17/62539a7b8639a6e370864d24c1f7c8c447b8c1": "fdc61d116abb37c1316b5c7576fbfb24",
".git/objects/28/0058554c7518d7f170fda027e49201e4f04787": "d94e6c497b89f0e3962a95600602cadb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/c0/b92ba78516cf5e322ec43716016c715281316d": "4a53277c6af7803318f409b13a49b590",
".git/objects/92/88f3d133f5d42aac6066aebb1e393e0bd3b81e": "7ea9d8ccba72bab2a9bf0af7a85dd819",
".git/objects/54/3f0470f6c76d3ef9e53bb6d5681de5f1d2c9d4": "e27fabf63aa847a0294b3285c8e9861e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/d5/94f4aa1a3785dfd20abe97bd58c0e8f6661a2d": "43c49b5cf552db1b5121e4c0826dc1e8",
".git/objects/d5/4e9b40246a5a3bf8c73ee44a56acf2b6fe2f6f": "123903a6cd1fe86245da754f62ed6696",
".git/objects/2b/829cffdb533fc82ffead6aaa6797ddeaf1c61a": "26b07583f9cc4e57f40e7a1384623fa1",
".git/objects/81/e66369b39449d94aea053c7ae5454e9660208f": "20836c9359010df28855d69edded7370",
".git/objects/bc/faba60e6b02aaf808aac1acbea914131d22828": "58e1857a0c19c7be91e8792ddb752086",
".git/objects/8b/2fc0bec6920adcf3f24c710cfad7721f77f0e3": "6a2180cfef2ec8df8049fb98af62abf2",
".git/objects/46/2a7bb4bfa342d94fcbca4db9f54cb46e09e003": "9aa36416d637f4b094942b8d538d8942",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/2f/7306f04121515430c8af731bcf6a739917679e": "ae675163f0c6ec906e7726dc65d40d98",
".git/objects/22/0c65eee6e9fd42507c7b551541d09337ca48bf": "f3b819972a4d053ead7d894bad133356",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/4c/5461da6332cb0a813dcdffae170f88d7bf27d7": "a046d4bed52533fc21ec39ff1d60d00f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/cd/3e2aae3dc3d1cc973b23f10258a757fb2b90f2": "ca0a62d79e1bef7980d624f834affcf2",
".git/objects/9d/c2235bd55f14e3c25817ce6d307b9907f442dd": "117102ab417394dc6a72c6678e484db1",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/01/f03955c95b86c8d6aca45476510925da27b664": "f45ee420abc02d00dd47431b51e92b39",
".git/objects/cc/ae13077d741a726922d5691bbe62ab649a88d4": "1f12e8bf52c786194ef19356902cee98",
".git/objects/cc/8844af7b6b1c7619e3716a5f377ca172b2790d": "f757f82a11449f21d30a8dbefb72d0a1",
".git/objects/cf/5ae13612c8ffb32bebe7620fb0adce3fde8109": "958318517b8d574ff8ccb132df777147",
".git/objects/d1/09ef7731a75a5eb376dd1fed3fef8c3d2d57e9": "efaed7253a5ddf666a14f730acb77f9e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/b7/b5763ae2b5260d049c36b0e42b01816e772afb": "26aaff25a514b01a860f4f1b0b4696a4",
".git/objects/90/d5a5fb1889c1fae44b4fff50157505774cf9de": "5ae011b341a9554f63643bba02a46001",
".git/objects/8a/04ab8cc908f6a2b6bb712048d595509c623013": "06b92715df9e0c9a98e492d098013564",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/75/1ffaa00e80493fb5fe2588c2bae6d28ac61268": "59d3bf27ff53313ef57b1e6637ec2eac",
".git/objects/a1/c72a568de1d571b0f67bded69ea4fdd1e9d416": "1cc653125216ea190a04bbdf39c5188c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/7647895024290a278190c87c5318f178d6e4f6": "d270a023f3a7231f93eb735587a43cf4",
".git/objects/2e/2495291bab0f85ef7adb3e6871ce86635699c9": "7dc8e28e746879f00368bc07fb3011d8",
".git/objects/64/c8b777425a687933fabf51964ad96743e30f87": "e0aa62f4d8d27167fe331d4ac7d61012",
".git/objects/ae/a8ffea3262ee2e7fbd02164ccbdc02da6f210b": "5f93d641ee27d01beb4b8b8e63e96c11",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/95/c22dd7f9beae9aeb237d942de716078a615dda": "1526332a5326271c54d03334fbf92967",
".git/objects/73/3792611b1acbc299d48d7dfe216b78efb8bc20": "5e8785c03ee9ad94654676e8d970d4c1",
".git/objects/73/07ce50de070a56fba6af3a31a1ff79269b30b0": "2ae6cb705d74ab12d9c588963da2b403",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/6d/45730428cb492152bc79427cb04b684a9260e0": "e1c44635e06478412dc08f3930323a1d",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/99/9e3a5ca2b28627d63645547486c6140ecea6a6": "d20a673020ee10e6c4c75a33b06c60b5",
".git/objects/25/ab025eda740eedcc99b0df49f3932136072db9": "33ef0b888bc2fd861ada0cc8da4be5d6",
".git/objects/29/58df34e1520fb7d958914c6af95e6f36775b3f": "92dcf08dc871efc9c728fa3d43f4bde9",
".git/objects/d6/b8ab5b7e5a3f8bb0a255e29523c8c1b019aff1": "734434a3d200733f1294fe143e238c2b",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "d62a4723ef1dce0f9c088c0a850a86fd",
".git/logs/HEAD": "1ef7b5ba33fedead404a59af8dbfd2c4",
".git/logs/refs/heads/main": "1ef7b5ba33fedead404a59af8dbfd2c4",
".git/logs/refs/remotes/origin/main": "938c00869bfb40f07b64e5371c25f1f1",
".git/config": "73a739a480f0541464901369dd2daf42",
".git/index": "91e43d2b47ca72fd48d05a3ef88aba64",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/refs/heads/main": "79a4aead747bd71a0a7894f65afc3714",
".git/refs/remotes/origin/main": "79a4aead747bd71a0a7894f65afc3714",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c"};
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
