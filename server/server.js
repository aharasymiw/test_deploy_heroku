const express = require('express');
const app = express();

const planetRouter = require('./routes/planet.router');

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

app.use('/api/planets', planetRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
