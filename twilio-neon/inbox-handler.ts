addEventListener('fetch', event => {
  event.respondWith(
    new Response('Hello from Neon WhatsApp Bot!', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    })
  )
})

