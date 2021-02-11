'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "35be540f1777db87d476bef93c883f24",
".git/config": "d28f38239e75d33712b1b5abba356804",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4eb0d6514c878839ece516b6bd65f16e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00f53c66b88cd668c7bed3a71b95afca",
".git/logs/refs/heads/main": "6257cae33165b915de7b3d67d4c76126",
".git/logs/refs/remotes/origin/main": "a466367cc35f997a32eabdf94de967ec",
".git/objects/03/6a19b8e8893875d1489c995f70a525dbf63b6c": "b412705a8f23eae1c8935ca7907946f3",
".git/objects/04/2f96e14cbd6dad480dddb251f5c8f664048aba": "e81c04a005de7245c4e2cd928c4c4fa0",
".git/objects/06/10d0a9134e59ef1d7a6f4d91ea2563d1c330dc": "1419d59f0bab186d030dd92ffe0f1c74",
".git/objects/07/a617c473f3eda1c56c88ac41c745780b86f45b": "821971664e682cbd857a1b0433643ff3",
".git/objects/0d/7550f66e03aa5f8a6dbf8cdb4e08717676b60e": "68d04f5512376eddb38d00edd0c17895",
".git/objects/0f/8b2b9f266b8c2c00f08d21613cd3e546bc209b": "250b9282c3e546b1741b2fda4a449dc6",
".git/objects/10/9df30e58f2cd58bc0d6758717199ac3de5d01d": "060a29986159189d7a103a704dd8bf2b",
".git/objects/11/3b874924d85f221b088c47482c1f1c45366a1e": "afa0d4db2d467a6e96c318a4cd9de9fd",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/15/efc6573897a45104dacf8b17f521909f2f4687": "ae6b03f1442719ca949522352fb42f04",
".git/objects/15/f6f413d633700699a0138f520d2d7011afebd2": "ea7a1e6fe2a274bf919d101a15fe4000",
".git/objects/16/6523476309fe1bbd331658bf231934319e3dd3": "25b169221aa07efeade9dd51b87d6925",
".git/objects/18/6f99b43ca32add542a82365377874fd60b96ba": "936245a438fad641834c4511fdf12095",
".git/objects/1c/53201fae3a625d74e86a7921f532cdb6a222db": "4fcacdfb110725d9b077a18b4c74945b",
".git/objects/1f/0fbc3b4e473c2b7e47e293bc3ce3c527aa0f61": "98683047037cdb23009afa54429e49a9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/2e2840caade5d33160ee5825555020a5ba0150": "13b1f1eb04b1624e179cefda7a7a304a",
".git/objects/26/58a1a5933d8451630d84e365d8634e3db58e66": "6e8bc53ab4579cee751ffbc312a9d6c0",
".git/objects/27/82f52f3c3a22eb87263867268eebb55c0b4abb": "e4008e31000af59fbdd710f9297c141e",
".git/objects/27/a7b57d9dabd8e94712470f40ab396f0ed30e1b": "0c68946c5f5e91b20eb1422d0f9ffe4f",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2c/04751192cf0cd74ed26d5f9f07ef788fa9f7ab": "81b60fd1f08bb14c016057dee1b8de44",
".git/objects/2d/452383651a6ef279743a9926b90234b8b79366": "c509d556b2a9b17abfe6a4b405457ff8",
".git/objects/2d/9fb7d537dc5dd4b1aa339aabbfefc60946a152": "6e61db69f45e00b77c3bb03ad47c125b",
".git/objects/2d/a910ab22efb7d87314f65a03fcd4e7788e1eb5": "beb8b69f274e7a81582bf19f6d6667e3",
".git/objects/2e/969f48399a00f616bd0a3ca6b66574f870f3d4": "14d2cff2dd710c83755e2f8543d1ca2c",
".git/objects/2e/b2c858e43ad21480e073892c68c8bd0b2e1a8c": "7b91edbf9ec380c7a46c06a671456264",
".git/objects/31/bd23fc3dff4e13608b140721603266e911db9b": "3c7240500d5377e44999f1fd736231e6",
".git/objects/35/267989deca17116c70c987e90035303e2e3404": "50c87c2481cc197e8d549e03b7ac507c",
".git/objects/37/6739f90bc79fed6b16da65efa688e750204188": "336ad66d5870d5a9ae971f3ef2947386",
".git/objects/3f/533fd7470ebf93b98abd274e90005799429c22": "6b7ab0fa78a20993a72967d9543cd037",
".git/objects/3f/53f72b7f1857892e68d16b42ea1f1c83153b1f": "5ea2bc9e31ecb507c1b26d95e3a9f652",
".git/objects/40/41340631c0274fa55b42f8413f3fa60ccdc486": "b3bc99611af75cf3314a02306d4f9d1f",
".git/objects/40/5e4d00561bd207318768f0fd8c5c66d8345616": "856387ad81e70727b8ef73d1bf7d9115",
".git/objects/44/c045284dc31b8d9c07b361a1c4440601a23d9b": "dd57ab676654d85cba69e4bc259b38d8",
".git/objects/46/f87022bc1a437447577c8f2e21d8f90284daba": "fc813f8426d2159ee6491e1adf2b8d1e",
".git/objects/4c/44000f5c95e1c03d13d57127e43dc5a4f9b0f3": "555944a97c163be17ff221ef74a8c457",
".git/objects/4d/4679afc0b5d25d8ae6cf1c774d458309b83b82": "a1b7f0f46bef06df70669ea0b3d98681",
".git/objects/4e/e952a281b6b1c8d68180c24dea3d958595cfbc": "c79d17e00986c475fa1745d9b1ba0439",
".git/objects/53/34f02d4f4c2587356debd25f6fe8ac1525b06a": "2c03a04b520f653bb6fff7ecea78e209",
".git/objects/5b/390ff950e6539bdfd4d84265fdb01e0c35f291": "dac6e694e07cee528be3bcb1da3beca8",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/69/b1ca12ebca1d76f2eb56e39637b10580eedc32": "f82c67cd2ea1eb08313010dc8e10b7bd",
".git/objects/72/0b92d0852bb5766919bd1434e014247be3dcfe": "db87d8c372d9303026b4a178a617ab76",
".git/objects/72/8ca3211472e26e34fe623bcca97fc682fbc49d": "90564c84235c5295f56aa3f6078adb67",
".git/objects/73/7feff4b75181f4b61bed36bba46c20b867807c": "82c2e693a86e66a245b086fe7d93fffa",
".git/objects/74/39bbeb94bc2267a32dab1ec72932aec6c6e63f": "0778882ffc2aabdc9a36bc17f28626ae",
".git/objects/75/75d636e6a599be5176f7d006a847694bbbd9d0": "5672a914867dc025e498bddd3bc26de9",
".git/objects/76/b869a36ba755f1189a3830c041e24c490a2d2a": "aa3c8fd0315651143f8bd3d1b7edf7b7",
".git/objects/7f/ff58558a7176859abe5cb9c2975b843b1df434": "3dd1016fec497fa13a71a0776fed5ac1",
".git/objects/85/290237434cfceb1123f286219ab0ebb645654a": "409b6f726e7d126251ac6e9a5f2d96b3",
".git/objects/86/e3faed08ea1ffb87539f5cdca2b015a414c0cf": "b743a6fb549e15469bd8932704a04906",
".git/objects/88/2bca08bbdfc823589d7dfa6518f14eb30a6dda": "2c11b0abb4c77d4254011fb47b88cad6",
".git/objects/88/2fd50367f4c53fa71765e6404a1e684de58fef": "a39f64c3337b3a92f31d2dd3ba30fd33",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/accba9a7bcf83124b1fd46253121935bce2292": "d4e18ef590184507c421c71ed3831b99",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/17c5bbc2ed8811c7bfc021be022ecfb9b0dced": "b4fe29a41a96d854bc185968bcde3af6",
".git/objects/9a/6c35591344a6996ca590892e75a89556159676": "aeb19fe9ea9859427660bd2473ecce46",
".git/objects/9b/839f898d8922154a42363c0f7becb149cd0dae": "e648f14b0eff8686d94058e4f8093456",
".git/objects/9c/8cecc61bb92208374736910fa06e0d9f17d3d6": "5202c3d7a9ee6b2d3e04d1d79dfe68ea",
".git/objects/9e/06a694fb474ae560b2d9e3250d8e12537e3e8b": "7fe4719aa7f05d0348f4ad4c4b4bda30",
".git/objects/a2/4d285985136558c2921d5ef761f700bde095f7": "5d6384919202b77c0dd87f0a80c3232f",
".git/objects/a3/54c250c1b0fe39be209569f94635d78e3bcb3e": "b37106f155c227c5f28d381996abc945",
".git/objects/a4/a7e242a595b45588b567019454d9a91ed891e7": "1a10ffb5dc195a67533db06d17fd022c",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ae/c815d54b1293fb49c3b42fe5115ce176cddbde": "2c695bce44b04913035fcbfe2b775ccb",
".git/objects/af/748a5747506c899904f6b5057db2f09ed7dae1": "d171883f681ba7428fd325f2c3f725c4",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/8157e81115d0ad66b2a156f20f7aa89f9a799e": "1d68a0556e73a19f1b708351be324dd7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/ba20fa125985dab61aab986c950909d858e372": "63b950eb10059214c1d794ff6d9a7022",
".git/objects/c0/f45c884cefb4290c20dfe3eb7427afafeda6a4": "c36f5f666b716aa2311122d3f07a09be",
".git/objects/c4/6b09ce80526c3cd137750c391d889f4d60ff17": "fcf9a6437109c8fb5c70ef331e55eaf9",
".git/objects/c5/ef2753e8e95f691d118f57a0d7038d08b4032f": "79c3344426561cb5d3ca73cf122cf225",
".git/objects/c8/35b2e211e9608db8109f26913b6d0b0be3183a": "8c4632ba06382db0a721efa6bb6ce867",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/cb/e239c4dec176feccdee39e88eb6af1124a3b09": "574cc272ad74e35ced353f37acf5767f",
".git/objects/cc/bb87b111af3b2fd1f094d8ccec02f0322c920e": "500fcd8c1adbe3365741a91a0fe270b3",
".git/objects/d0/fcbdc0cde0807f43b6d33d11f48036d67ada36": "720a7cae1ae35db108f7803d6d00c8a8",
".git/objects/d1/305c34d27a5c478d44c83aa6ebf3c81ea37140": "ed5dcad3e850a89ff23700e6ed510b74",
".git/objects/d9/15cb454c9d56a04b4436edf918a351861a5d79": "5304ea87a9c558e60be33fefb2d0be1d",
".git/objects/d9/98cf5b468413ca1c950096dc9d0f5dfdb1359f": "872d06090d2311cd71232a001d72623a",
".git/objects/db/4e38f11ff382f28912236cc460a4b31cd48779": "69153a31c383983042eaa83e7b5bea1c",
".git/objects/db/75eced957b3318abd607f4ecfcb2230f87be9b": "2b10b86acc0faf5f95f2a60057d21fd6",
".git/objects/dc/3dc753ced86a61250a544611c6448836511b65": "e2fcf7702ba7bf02ad55c400e81c050c",
".git/objects/dd/b75ccf9eecfe5109db4651bccde21a70f40807": "99e06883d38cc4bf4a83691ca4ef7454",
".git/objects/e0/b0a17e376539918ce64f62da26070260a2d0c3": "c3689d36bc4b0a389081f105999e1eb9",
".git/objects/e1/0b79f79d5c91427947d9a3cd621a48a6f880ec": "a54157e6e104983c49837904de823894",
".git/objects/e4/f08aa5e5435472e2fd401ba632ab94b75bb08e": "ef52c2a0376ccc9a8fad6b42971f7698",
".git/objects/e5/10b2690d7d1466521a7c30d5fcfdc867eb591d": "735fd4648ec1719c8957bf98568c0772",
".git/objects/ea/b8cb02a0a8c6923afade074b97b6e5570cd165": "a37700230c72809e837887184ff87a94",
".git/objects/ed/2f7a2406e35a76050404a1a7419cc39ee5ad9c": "cb4ea53c7c388920463b49786e8d450d",
".git/objects/f7/14a514d94e495095e2f1e525a341eade187c17": "ca0d4350dcdad8026382089554e0448e",
".git/objects/f9/840a2961bb9db879cec4f4a74ecdccd9b02117": "8447ad8494e0d08c69770d58516090f6",
".git/objects/fe/26de6508bd4ac9d67fb6d3f6821f1557ec1901": "0a8ee5648b01209803642a01d3a4bd46",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ff/18133ab662af9eacefd231a74f1db1fa30e345": "9f12aac63f0d4d0c8a0bb96c68118539",
".git/objects/ff/34b0f705e099a57c5d5bec6d3be444385bdfa4": "6bf24c3c8f2c70c568b48462a3c9540a",
".git/refs/heads/main": "1c2d1b236c369c3b321e627674796cc7",
".git/refs/remotes/origin/main": "1c2d1b236c369c3b321e627674796cc7",
"assets/AssetManifest.json": "ace70a6085c3bfd87ff2d76dec559485",
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
"assets/assets/icons/customer.png": "118088678d8af01d366e1f04f5ba9fd3",
"assets/assets/icons/dashboard.png": "0429ebfdb842cfbdacc11bbb651d96ca",
"assets/assets/icons/delete.png": "73ca7b409ee0bac8c2ee17f89044eeb5",
"assets/assets/icons/edit.png": "19d9d619e069c65fcb4bfd30c1a84930",
"assets/assets/icons/menu.png": "26bf6e926b0c9d2f874c1e42b220feb9",
"assets/assets/icons/orders.png": "6a3f65878e8cbd29c6d76d1708b2e960",
"assets/assets/icons/settings.png": "d9b7e37b193a91f415047c3d919d99e3",
"assets/assets/icons/star.png": "8c36988f73f19e743c5d69d31c6b4e75",
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
"assets/NOTICES": "c0b6ed031c44ef1ccdca1b13b90a11ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c1922914efc35ae28dc33253815af94c",
"/": "c1922914efc35ae28dc33253815af94c",
"main.dart.js": "ffda998b0dbfa98da5c0c70010187673",
"manifest.json": "09fb3c47a5faac64ee2ca350db947021",
"README.md": "9303bd8b6b77549f214fe62968fbce5f",
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
