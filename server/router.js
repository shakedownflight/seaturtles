//import router from 'express'.Router();
var controller = require('./controller.js');
var router = require('express').Router();
for (var rt in controller) { //controller객체 안의 property (메세지, 유저)=> route 라고 한다. (messages, user)
  router.route("/" + rt)  // ***** a shortcut to apply the Express Router ***** (../classes/다음에 오는 주소에 따라.)
    .get(controller[rt].get); 
}
module.exports = router;