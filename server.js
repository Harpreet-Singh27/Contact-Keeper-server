const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();
app.use(cors());

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to Contact keeper API',
  });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(8080, () => {
  console.log(`Server started on port ${PORT}`);
});
