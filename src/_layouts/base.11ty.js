module.exports = ({ lang = 'en', title = 'Hello, world!', content }) => `
  <!doctype html>
  <html lang="${lang}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="/main.bundle.css" />
    </head>
    <body>
      <main class="container mx-auto max-w-2xl">
        ${content}
      </main>
    </body>
  </html>
`
