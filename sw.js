const 
    version = '1.0.0',
    CACHE = version + '::PWAsite',
    offlineURL = '/offline/',
    installFilesEssential = [
        '/',
        '/manifest.json',
        '/index.html',
        '/index.js',
        '/styles.css',
        '/images/logos/fcc_puckRoundedCorners600.png',
        'images/fcc mumbai.jpg'
    ];

function installStaticFiles() {
    return caches.open(CACHE)
                    .then(cache => {
                        console.log('Adding Essential files');
                        return cache.addAll(installFilesEssential);
                        console.log('   Added Essential files');
                    } );
}

self.addEventListener('install', event => {
    console.log('Service worker fccBOM: install');
    event.waitUntil(
        installStaticFiles()
            .then(()=> self.skipWaiting())
    );
});

function clearOldCaches(){
    return caches.keys().then(keylist => {
        return Promise.all(
            keylist
                .filter(key => key !== CACHE)
                .map(key => caches.delete(key))
        );
    });
};

self.addEventListener('activate', event => {
    console.log('Service worker fccBOM: activate');

    event.waitUntil(
        clearOldCaches()
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;


    let url = event.request.url;

    event.respondWith(
        caches.open(CACHE)
            .then (cache => {
                return cache.match(event.request)
                                .then(response => {
                                    if (response) {
                                        console.log('cache : fetch ' + url);
                                        return response || fetch(event.request) ;
                                    }
                                })
            })  
    );
});
