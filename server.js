const express = require('express');
const app = express();

app.use(express.static( __dirname + '/client/dist/client' ));
app.use(express.json());

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));