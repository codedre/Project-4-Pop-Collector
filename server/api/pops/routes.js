var express                 = require("express");
var router                  = express.Router();
var controller              = require("./pop.controller");
var bodyParser              = require("body-parser");
var methodOverride          = require("method-override");

router.get('/api/pops', controller.index);
router.get('/api/pops/:id', controller.show);
// router.post('/', controller.create);
router.put('/api/pops/:id', controller.update);
router.patch('/api/pops/:id', controller.update);
router.delete('/api/pops/:id', controller.destroy);

module.exports = router;
