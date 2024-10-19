
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');
const productRoutes = require('./routes/productsRoutes.js');
const blogRoutes = require('./routes/blogRoutes.js');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();
const port = 3000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 
// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();


// app.use(express.json());

app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true,
  }
));

// const authRoutes = './routes/authRoutes.js';
app.use('/', authRoutes);
app.use('/', blogRoutes);
app.use('/api', productRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
