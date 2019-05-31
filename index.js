require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const pc = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;



massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
  console.log('rocking a db')

  // dbInstance.new_planes()
  //   .then(planes => console.log(planes))
  //   .catch(err => console.log(err));
  // dbInstance.get_planes().then(planes => console.log(planes)).catch(err => console.log(err));
});

app.use(express.json());


app.get(`/api/planes/:id`, pc.getPlanes);

app.listen(SERVER_PORT, () => {
  console.log(`party like ${SERVER_PORT}`);
});
