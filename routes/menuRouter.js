


const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// POST /auth/Addjobs
router.post('/AddMenu', menuController.Menu);

// GET /api/jobs/getAllJobs/ studentz
router.get('/getAllmenu', menuController.Allmenu);




module.exports = router;


