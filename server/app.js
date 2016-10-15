var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var auth = require('./auth');
 
// passport.use(new GoogleStrategy({
//     clientID: "717328947231-hjs9934s99qo7giuvpb7vg3rthb3lsao.apps.googleusercontent.com";,
//     clientSecret: "-iFt_hOMh3pWPHI226mY-73l",
//     callbackURL: "http://localhost:7777/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//        if (clientID === "717328947231-hjs9934s99qo7giuvpb7vg3rthb3lsao.apps.googleusercontent.com" && clientSecret === "-iFt_hOMh3pWPHI226mY-73l") {
//        	var user = {id: 'user_1'};
//           return done(null, user);
//         } else {
//           return done(null, false, { message: 'Fail to login.' });
//         }
//        }
//        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//        //   return done(err, user);
//        // });
//   }
// ));

// require('./passport').setup();

// var router = express.Router();

// // 로그인 라우팅 POST /login
// router.post('/', function(req, res, next) {

//   //  패스포트 모듈로 인증 시도
//   passport.authenticate('local', function (err, user, info) {
//     var error = err || info;
//     if (error) return res.json(401, error);
//     if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

//     // 인증된 유저 정보로 응답
//     res.json(req.user);
//   })(req, res, next);
// });

// passport.use(new GoogleStrategy({
//     clientID: "717328947231-hjs9934s99qo7giuvpb7vg3rthb3lsao.apps.googleusercontent.com",
//     clientSecret: "-iFt_hOMh3pWPHI226mY-73l",
//     callbackURL: "http://localhost:7777/auth/google/callback"
//   },
//   function(token, tokenSecret, profile, done) {
//     Account.findOne({ domain: 'google.com', uid: profile.id }, function(err, account) {
//       if (err) { return done(err); }
//       if (account) { return done(null, account); }

//       var account = new Account();
//       account.domain = 'google.com';
//       account.uid = profile.id;
//       var t = { kind: 'oauth', token: token, attributes: { tokenSecret: tokenSecret } };
//       account.tokens.push(t);
//       return done(null, account);
//       console.log("success")
//     });
//   }
// ));

// mongoDB connection
var db = mongoose.connection;
db.on('error', console.error); // if it fails to connect, console error
db.once('open', function() {
	console.log('Connected to mongod sever'); // if success to connect, console log
})

mongoose.connect('mongodb://localhost/choco'); // It means that connect to local mongoDB, database name is 'choco'

// Router
// var router = require('./routes.js'); // router is not yet made

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 7777);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// URL test page
app.get("/hello", (req, res)=> {
	return res.send("Hello World!");
})

// MongoDB test page
app.get("/mongo", (req, res)=> {
	choco.find({}, function(err, data) {

		var result = [];
		for (var i in data) {
			console.log(data[i]);
			result.push(data[i]['name']);
		}

		res.send(result)
	})
})

var chocoDB = new mongoose.Schema({
	name: String
}, {collection: 'choco'}); // chocoDB 라는 database를 만들고 collection 이름을 'choco'로 한다.

var chocoModel = mongoose.model('choco', chocoDB); // chocoDB의 choco collection에 CRUD 할 수 있는 variable 생성.
var choco = mongoose.model('choco'); // 이유는 모르겠지만 이걸 추가해주면 mongoDB에 저장된 자료를 불러올 수 있음.

// Launch server
if(!module.parent) {
	app.listen(app.get("port"));
	console.log("Listening on ", app.get("port"));
}