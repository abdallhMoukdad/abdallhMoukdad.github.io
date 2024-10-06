'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "117888f3caf37ff04076a47b0546e12f",
"version.json": "2f5c97b7f37d55158115cc908b00f8c0",
"index.html": "b40c2b87be544ee998e5afd46a9ec590",
"/": "b40c2b87be544ee998e5afd46a9ec590",
"flutter_bootstrap.js": "2bb72e1a599222e37a9fce7e3d11c88c",
"favicon.png": "3d41fcda8ff231839d18e9b077591e39",
"icons/Icon-512.png": "c15a2863f8379ae80186557e1f6ebd07",
"icons/Icon-maskable-512.png": "c15a2863f8379ae80186557e1f6ebd07",
"icons/Icon-192.png": "83cda85e0877fb1cd140acd7e7a67710",
"icons/Icon-maskable-192.png": "83cda85e0877fb1cd140acd7e7a67710",
"main.dart.js": "7feea2adccea53584b9f701ff1a4693c",
"assets/fonts/MaterialIcons-Regular.otf": "373d7b4e089f94dbbd455a829b5b359d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "65cd11d3bf7c440e55bc428f34b0d1c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "dc17832909de26ecfcc53ad508955437",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "1966af4cb8cc5f16518a566488d26f2b",
"assets/AssetManifest.json": "654ad1269c45ae191c8a8a1e75a73586",
"assets/assets/f.png": "7e730cafb71a013bba85e875eeacd17d",
"assets/assets/photo.png": "e72ad58e1d801547809abfa172439f8a",
"assets/assets/photo1.png": "b58b9bb383246896904bba9ff38291d7",
"assets/assets/launch.png": "58fa944cf0490deddd2467958ed26f5c",
"assets/assets/search.jpg": "3be437dcea9a5fe32c2bcada24390f79",
"assets/assets/photo2.png": "5177f23eefb0b80ccf9191570d9be366",
"assets/assets/project1.png": "3084f500d0d624173f1f5c437c2e7491",
"assets/assets/school_view1.png": "407faac0bb572a2dd0c89233a3b39263",
"assets/assets/security.jpg": "6670bd2bac39f764354d1e2d9a7bc167",
"assets/assets/school_view.png": "c7c8d6fa3a23495859e9e9898b0c914c",
"assets/NOTICES": "2c01b4eb2fd8cac1e6cd7da7603feaa4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
".git/objects/65/e91ea5e4cccda081620f3b599ca294536f594a": "65894f2948bdd17e9c0944c220c3e851",
".git/objects/17/62539a7b8639a6e370864d24c1f7c8c447b8c1": "fdc61d116abb37c1316b5c7576fbfb24",
".git/objects/b1/6b4589b852d05590830d2e35a98837dc7bb9e6": "5b41b11842983e917a2aa58c70614521",
".git/objects/5f/624acd7c567c85b642ef3b38a2bf23cdc1f3d2": "f5f544e141eb6c71383126ad940bc9f8",
".git/objects/a6/d8b9b146488abceebb02a5227195da5fdaaa43": "f38c45bf9a26d8a7de27d28aecd9f9ce",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/350b348317f9c3eefae4c322c6f6453aa2b80a": "243d03b6612b84fddf5baf7885df36fa",
".git/objects/c0/fc0447004ecdb659eb45321502c9d38767e2b0": "2ecb2ce23726c784f0eb23f46938946d",
".git/objects/92/88f3d133f5d42aac6066aebb1e393e0bd3b81e": "7ea9d8ccba72bab2a9bf0af7a85dd819",
".git/objects/92/c3a658ab4d219b7f5642f008da75b7d96e5f80": "35298417841b948b1a9f3ca3be29c52a",
".git/objects/92/ba5e2695f52d1c0af1d6916aaea1f5bc51ab61": "c66732fe8a64bc434fe566e12a359441",
".git/objects/aa/b7ac621d92babfdc97ae285e79066c2c744623": "2646906f605d45ffa63a6d19337feecd",
".git/objects/66/75241efddd3a32ad29cd3e1d1d6882b3d45ca1": "cb5623af0210e7e65dfe585f691621c2",
".git/objects/0e/4d1696596a5ab8964e09a5b82fa874d59e25c5": "c39ecc3d9fb1d8ee39ffbf8fb8e20f5b",
".git/objects/8d/65919073d13a5e467df73754d1b928a0f24ce7": "259083b6f319275aac96d30ed2e7a06f",
".git/objects/93/433083116af82a047ce49e795ea3a70429e918": "ad5bbccd31d2ceda0094257704e83f14",
".git/objects/38/e9240b0f66a3c90472de45e6358df79a5ae5f4": "5a56bb5b0067efc42aff61f106a15361",
".git/objects/54/0462e9114b527528118c2849b47271f5fd7fb7": "67ff39b62af01d1ab0bd145cc75f8f79",
".git/objects/54/ecae6332b774fdb8ca1e838072c18f94f270f2": "9ba755d6ae7a3a6dafef289faa61a439",
".git/objects/27/aed4c6f27ba45f0bbb71cd57e18560cde31147": "13ff8c5f4f75984f0cbee34ba2549b46",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/dd/2b5ac4f5723ee5d5992663164b2c3b3e6dca39": "2cd11d032e15207cba2368a16a7a260d",
".git/objects/34/70e93d1a44dc4d7b1b059e60745e6108aaf8a5": "235c8479cbfd462c6496cd0f6e75bb10",
".git/objects/34/2bbc0c57a09988c64b0887f155961bc5f89e09": "9190a9da91005b0476221f1389c84f7d",
".git/objects/10/054251f1d5de3b289423de7db43cd4f26ff430": "36a170ee661c15822807c28820b57bde",
".git/objects/2b/829cffdb533fc82ffead6aaa6797ddeaf1c61a": "26b07583f9cc4e57f40e7a1384623fa1",
".git/objects/0d/cb37f70caaff574d55a127c793489029e6dcaf": "e7a33b3bcb1bfd097d20385cf800e327",
".git/objects/0d/d6157ace11194cbaf829618078807c22028440": "8978df4b73f18e704a551d19526d13b7",
".git/objects/81/e66369b39449d94aea053c7ae5454e9660208f": "20836c9359010df28855d69edded7370",
".git/objects/57/6e7d52bb95d5e602c97a70353acafba2d67fa7": "f28025060034f9761b10ced8b857514f",
".git/objects/39/8778bd282df0580756cfd9dbea29ce69b7d366": "18a6dda73fc39265db3cb5a99da8442d",
".git/objects/46/2a7bb4bfa342d94fcbca4db9f54cb46e09e003": "9aa36416d637f4b094942b8d538d8942",
".git/objects/44/a7eb089aa409bba93c0600eda82e39f5052eeb": "10804212847ff319c1f987b9384f1c92",
".git/objects/5d/173e000cd99277b0674a1b3254bb9b2b670954": "51c9d7535553351d72cd9ed270e95d45",
".git/objects/3a/a77f347207867273327dcfcf4d6debbf3a6898": "407031a6b1f39b71374d0b4a1f24f657",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/78/4de1ef4516063886f7e76d6bf0cfe11952c652": "830d73aecbf94d1768804b60d1fce9cc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f2/41777259354b1fb36093cb5882def10e94f3e0": "78508b46f5d56b8ed3ee41374b35412d",
".git/objects/cb/574941e44cbe610c61b4d817af586529207871": "e3461f239eb2dea50509180be0f37811",
".git/objects/e6/fcd106f5f2ce09f206ba9ade0cb43c553e91d9": "854eeb4b6c1aee240496c588f019b94e",
".git/objects/e6/3a67b937e4fe5b59f1e2e0fbc18205ddf4e6a8": "2d4056ff02e4812d1656c6ec2bee360f",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/a7/b4b35b669dfa66e29424626532207687b7ee74": "da09332b3ef3605c98affad4a7b9fd22",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/5e/62b18387d4f46356ec584c43e025cf7f71ef6a": "d7dc171f74712768398563ea3617273f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/37/51ad78c382260bb01b6370ae6cebe1fdb2511b": "b96770b71c1f09100737dd1c3f1c4831",
".git/objects/07/7a69ff6c54f808a490c2b29a86ae22127a4c9f": "372ae6ce2b88a3ec9002c9667e47e9a7",
".git/objects/76/98c53b9b0bc54de29a022a8849238242862879": "c31e24e84da42d9f46d2406157ea3707",
".git/objects/ba/3eebdd985a8dffd909ac4d5a817a0d41971648": "5bee783a23c1fd48e4c4fa1fe13bebe1",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/83c3fb5de5d86ef31fbc84fd1bd4c3bfc5e97d": "86909981fbb50ac1dcabe5dbee7c6f58",
".git/objects/12/35dae01da3023682ebaa7eb85d89bbf8c25fac": "77f85c7e61571bd43ced671295a30dd0",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/41/05fce9c946a4ced94e0b02fcd056661392656b": "52f995960888e0ec47a856ed5721d777",
".git/objects/f7/2ee0ad07243bcdf0aa8e17c5cfd9f90cf99249": "2f0437687e3e2e21d443b7e448bc27ff",
".git/objects/fb/5679c8aa4bc036ab278b24be9710d2d39b97a0": "5bbb3486493bb54b7bd9bf290ea04010",
".git/objects/1b/080fe29b628599e2bed886635fc074dc106274": "d9b81db1b2b5fbfecc39817fec8c08bc",
".git/objects/01/600fa6052d65f17d3f6d5d01e321664fe7eb3a": "7ef79c0165d1161706e31c5118813443",
".git/objects/01/b8419a64a45b023fde40368d2e0f081f31457b": "9aac938a7b1302bdb96d34b5e61b807f",
".git/objects/cc/8844af7b6b1c7619e3716a5f377ca172b2790d": "f757f82a11449f21d30a8dbefb72d0a1",
".git/objects/d1/08d6f4fb17320b32c578cf90d752073383e31d": "318315a7e99d513fbf15c56f20bdcb5d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/11/760cf36d2de1d33f65faa018a123961d3692e9": "b91d5212aa40c6d9ae328d549a006ec2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b5763ae2b5260d049c36b0e42b01816e772afb": "26aaff25a514b01a860f4f1b0b4696a4",
".git/objects/8a/04ab8cc908f6a2b6bb712048d595509c623013": "06b92715df9e0c9a98e492d098013564",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/23/c1e4a0fdcb635712a43511889034a1a85d0fc1": "4dcb7b8a509c53f62bbc08e57634756f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/7e/fb8494cb6ca95c833d04e8673c33799b204901": "17b682b56cd144e4d859da53c43f66c2",
".git/objects/05/9b9b95aecb5b97daf47d707c8fbad49dc32802": "08d3c9885ec14b1d412596abe89bdfd6",
".git/objects/a1/33dd717ef7a8e25bc2090d050b3f4db6c811ac": "86d221005b0d9c56e3e80531caadb0c4",
".git/objects/a1/643d87d750d64000b92162151257d9e13e3bfb": "8690ccd6a0a9647684ad88320486a9cf",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/7647895024290a278190c87c5318f178d6e4f6": "d270a023f3a7231f93eb735587a43cf4",
".git/objects/a2/69d2ba6cd3fd6f8a1d79a261a649e40d4ecd0a": "e0cbdbba6559b1108cce7db034b81e43",
".git/objects/2e/f6233281398244f98bfc6a4944ea1cc3c6d264": "0efe3bedafcb569d08aef64475006eef",
".git/objects/64/c8b777425a687933fabf51964ad96743e30f87": "e0aa62f4d8d27167fe331d4ac7d61012",
".git/objects/ae/a8ffea3262ee2e7fbd02164ccbdc02da6f210b": "5f93d641ee27d01beb4b8b8e63e96c11",
".git/objects/02/75f5d8530fcaad98f9dbca7932dde3350d2b25": "1be721c1540d6c86cee0a7b70a595f50",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/9c/ee9cd94e639516c07685102c90d3a581d6ae74": "0d64f2e09df8f7927a810d7d465408ae",
".git/objects/9c/398117c876ae981646fb8fc936f33fba313f5f": "15de023fa07f0f670ad55cdf4321e312",
".git/objects/73/3792611b1acbc299d48d7dfe216b78efb8bc20": "5e8785c03ee9ad94654676e8d970d4c1",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/0f42824e6cb032249bf3a426de11a425ff4eb5": "443224f15537247694c674474cd2f7be",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/e5e44b3628eea97b5992cc960fdf9558035d21": "54f9ff02f95c1e1d3e82006c5ef8cfe3",
".git/objects/4e/044b43ab59ddf62e4d305ef86394f1ba6a5b7a": "480ec08e7bf7b4471f30066ec7a7eecd",
".git/objects/e2/a40ef20ada81e1fb72b55bc5eee73ff93e552a": "e92fec906fb34a881df353415ebde725",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/2c/8546f45f2433ecb569b03b411b188a9e997d5e": "bbcd3833c18b29c195af37d5586d7edc",
".git/objects/ab/e4d9f4a55ad8bb682bd90127a02e799074b201": "2106225fd22b32a90748ccf2a466e913",
".git/objects/f9/c6f7e51b6d7e961630970339dd8694fef269fd": "a5e2e509f38dd167d30fc92ccb49831c",
".git/objects/0a/4d93afabbe4a8de4a63caeda6946909ed2d773": "e30402b4202dab18b0763901145679bc",
".git/objects/0a/d00df2d57afeafa3bcf7b4506c0a2e7618cc00": "7fb40ab00ca6a2b58c929e8e62c6df27",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/f5cebe7e0e8b347cecabb23d420195e24a6252": "5117aadc15a6dc40d8ed8575928107f8",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/7068f335882f0bc0127fa1312823024fec969c": "1bdaec7079982a71e4d228f073327648",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/21/fde1fd0fccd4b75142a900d6ae65cfb3e29703": "648aaea24586e9ba04cf0713c05d136f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/83/3af5b8af4f7826ea5351c7b889db8b15c92218": "4e342de41cbd21fbef5eab99d0fc41fd",
".git/objects/33/0e895f48fdd2477739583e9c96e745d9e26d73": "bc5293b6e72a14fe2421413212ad82c8",
".git/objects/25/b69a86d30e24e520dea4831f4d952ef354ff75": "d3e4d5258213b7deea879eed3914f6e8",
".git/objects/d6/b8ab5b7e5a3f8bb0a255e29523c8c1b019aff1": "734434a3d200733f1294fe143e238c2b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/10d0aeb8a0884a9f8c04a13d44279a17a66231": "e4c35fcdfcdc393bddee45ef83305210",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "d62a4723ef1dce0f9c088c0a850a86fd",
".git/logs/HEAD": "7cdbc963e6a98eceb55d6d508b31dda2",
".git/logs/refs/heads/main": "0676d2d39633723344e199c4f6a81ac9",
".git/logs/refs/remotes/origin/main": "0fb5936a81c82dce7eca676349b63952",
".git/config": "73a739a480f0541464901369dd2daf42",
".git/index": "26e4931e5e3422702f6acf6774b565a1",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/refs/heads/main": "61064aa2364b57c8a1091d04f4a59817",
".git/refs/remotes/origin/main": "61064aa2364b57c8a1091d04f4a59817",
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
"README.md": "cbc43f7b6def684510ff8b31b724e978",
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
