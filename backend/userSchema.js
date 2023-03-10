const pool = require('./dbConnect');

const createUserTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      teamname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    console.log('users table created');
  });
};

module.exports = {
  createUserTable,
};
