// Write your "actions" router here!
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('how is life going???');
  res.end();
})

module.exports = router;