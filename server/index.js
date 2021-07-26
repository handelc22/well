const express = require('express');
const app = express();
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('hello');
// })

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('listening on port 3000!')
})