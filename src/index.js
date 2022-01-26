const express = require('express');
const app = express();
const path = require('path');
const routesConfig = require('./config/routes');

const root = require('./routes/root')
app.use(express.static(path.join(__dirname, 'public')));
app.use(root);

app.listen(routesConfig.PORT, () => {
	console.log(`Started Listening At PORT ${routesConfig.PORT} ... `);
})
