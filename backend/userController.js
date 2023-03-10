const pool = require('./dbConnect');

// Create new user
exports.createUser = (teamname, email, password) =>
  new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO users (teamname, email, password) VALUES (?, ?, ?)',
      [teamname, email, password],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      }
    );
  });

// Get all users
exports.getAllUsers = () =>
  new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
