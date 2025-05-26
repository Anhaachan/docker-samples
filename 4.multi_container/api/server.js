const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'sample_db,
  password: 'password',
  port: 5432,
});

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM test_table');
    res.json(result.rows);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
