const express = require('express');
const mapRoutes = require('./routes/index');

const app = express();
mapRoutes(app);
app.listen(1245);
export default app;
