const feedController = require('../controllers/feederController')
const app = require('express')
const router = app.Router();

router.post('/feeds',feedController.saveFeeds);

module.exports = router;