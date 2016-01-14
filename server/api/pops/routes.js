var express                 = require("express");
var router                  = express.Router();
var controller              = require("./pop.controller");
var bodyParser              = require("body-parser");
var methodOverride          = require("method-override");

router.get('/api/pops', controller.index);
// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;