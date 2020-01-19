import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/crmRoutes';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;
const uri = process.env.DB_URI || 'mongodb://localhost/CRMdb';

mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => (
  res.send(`Express Server running on port ${port}`)
));

app.listen(port, () => (
  console.log(`Server running on port ${port}`)
));
