importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "bundle.js",
    "revision": "220c3dd55b7781f6d5cebaa39aa5d725"
  },
  {
    "url": "index.html",
    "revision": "9382e96d6efed3dc7b00295f3acbb6b1"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/maxcdn.bootstrapcdn.com\/font-awesome\/4.7.0\/css\/font-awesome.min.css/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/materialize\/0.100.1\/css\/materialize.min.css/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/fonts.googleapis.com\/css?family=Varela+Round/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/res.cloudinary.com\/mumbai-hackerspace\/image\/upload\/v1518116887\/Flag_of_India_w9feth.svg/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/3.2.1\/jquery.min.js/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/materialize\/0.100.1\/js\/materialize.min.js/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/res.cloudinary.com\/mumbai-hackerspace\/image\/upload\/q_auto,f_auto\/v1517349573\/Mumbai_Taj_gkgzvb.jpg/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/res.cloudinary.com\/mumbai-hackerspace\/image\/upload\/v1517349728\/fcc_mumbai_kg4eon.jpg/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/res.cloudinary.com\/mumbai-hackerspace\/image\/upload\/q_auto,f_auto\/v1517349712\/Mumbai_Skyline_at_Night_yqto3p.jpg/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/avatars0.githubusercontent.com\/u\/2099300?v=3&s=460/, workboxSW.strategies.cacheFirst({}), 'GET');
