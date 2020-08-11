//for caching based on assets
const cacheName = 'v1';

const cacheAssets=[
    'custom.js',
    'index.html'

]
// install event listener
self.addEventListener('install', (e)=>{console.log(`service worker installed...`)});

// Activate event listener
self.addEventListener('activate', (e)=>{console.log(`service worker activated...`)});