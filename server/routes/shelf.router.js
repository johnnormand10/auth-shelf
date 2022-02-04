const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // Requesting data from the db
  let queryText = `
    SELECT * FROM "item"
  `;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('get error', error);
    });

});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  console.log('req.user:', req.user);
  if(req.isAuthenticated()) {
    const queryString = `
    DELETE FROM "item"
      WHERE "user_id" = $1;
    `;
    const queryParams = req.user;
    pool.query(queryString)
      .then((result) => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error('DELETE item failed', err);
        res.sendStatus(500);
      });
    } else {
      res.sendStatus(403);
    }
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
