self.addEventListener('install', function (event) {
  console.log('Hello world from the Service Worker 🤙')
})

self.addEventListener('fetch', function (event) {
  console.log(event.request)
  event.respondWith(
    caches.open('mysite-dynamic').then(function (cache) {
      return fetch(event.request).then(function (response) {
        if (event.request.url.indexOf('http') === 0) {
          cache.put(event.request, response.clone())
        }
        return response
      })
    })
  )
})
