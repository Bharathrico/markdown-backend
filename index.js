const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello boi!'))

// Only listen when running locally
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

module.exports = app;