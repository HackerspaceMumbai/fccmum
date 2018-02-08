importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

console.log('this is my custom service worker');

workbox.routing.registerRoute(
    new RegExp('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com/css?family=Varela+Round'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg'),
    workbox.strategies.cacheFirst()
);
  
workbox.routing.registerRoute(
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://res.cloudinary.com/mumbai-hackerspace/image/upload/q_auto,f_auto/v1517349573/Mumbai_Taj_gkgzvb.jpg'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://res.cloudinary.com/mumbai-hackerspace/image/upload/v1517349728/fcc_mumbai_kg4eon.jpg'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://res.cloudinary.com/mumbai-hackerspace/image/upload/q_auto,f_auto/v1517349712/Mumbai_Skyline_at_Night_yqto3p.jpg'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://avatars0.githubusercontent.com/u/2099300?v=3&s=460'),
    workbox.strategies.cacheFirst()
);


workbox.precaching.precacheAndRoute([]);