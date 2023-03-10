const dotenv = require('dotenv');
const pool = require('./dbConnect');

dotenv.config({ path: './config.env' });

const app = require('./app');

//Handle uncaught exceptions:
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

//Connect Database
pool.getConnection((err) => {
  if (err) {
    console.error('Error getting database connection', err);
    return;
  }
  console.log('Database connection established');
});

//Display ENVIROMENT
console.log(`Enviroment: ${process.env.NODE_ENV}Stage`);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//Handle unhandled promise rejections:
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
