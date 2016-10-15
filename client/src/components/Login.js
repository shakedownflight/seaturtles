import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';//npm install --save react-google-login
import $ from 'jquery';

class Login extends React.Component{
constructor(props){
  super(props);
  this.state = {
      userId : "Login with Google"
    };
  this.responseGoogle = this.responseGoogle.bind(this);
};

responseGoogle(googleUser) {  //1. 구글 로그인 클릭하면 token 받음 
  // // Useful data for your client-side scripts:
  const profile = googleUser.getBasicProfile();
  
  // // The ID token you need to pass to your backend:
  const id_token = googleUser.getAuthResponse().id_token;//standard JWT

  $.ajax({  //ajax 이용해 서버에 token 보내거나, 구글에 보낸다.
    type:'GET',
    url:'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+ id_token,//'/localhost/localDB', //?????
    dataType:'jsonp',//??
    success:((data)=> {
      console.log('google token compare check success',data);
      this.setState({userId:data.name})  
     }).bind(this),      
    error: (err) => {
      console.log('google token compare check false');
    }
  });      
};

render(){
  return (
     <GoogleLogin
        clientId={"717328947231-hjs9934s99qo7giuvpb7vg3rthb3lsao.apps.googleusercontent.com"}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        offline={false}>
      
      <span>{this.state.userId}</span>
      </GoogleLogin>  
  );
};
};

export default Login;



// import React from 'react';
// import { GoogleLogin } from 'react-google-login-component';
// import $ from 'jquery';

// class Login extends React.Component{

//   constructor (props, context) {
//     super(props, context);
//   }


//   responseGoogle (googleUser) {
//    const profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail());
//     var id_token = googleUser.getAuthResponse().id_token;
//     console.log({accessToken: id_token});
    
//   $.ajax({  //ajax 이용해 서버에 token 보내거나, 구글에 보낸다.
//     type:'GET',
//     url:'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+ id_token,//'/localhost/localDB', //?????
//     dataType:'jsonp',//??
//     success:((data)=> {
//       console.log('google token compare check success',data);
//       this.setState({userId:data.name})  
//      }).bind(this),      
//     error: (err) => {
//       console.log('google token compare check false');
//     }
//   });      
  

    
// };
//     //anything else you want to do(save to localStorage)...
  

//   render () {
//     return(
//       <div>
//         <GoogleLogin socialId="717328947231-hjs9934s99qo7giuvpb7vg3rthb3lsao.apps.googleusercontent.com"
//                      class="google-login"
//                      scope="profile"
//                      responseHandler={this.responseGoogle}
//                      buttonText="Login With Google"/>
//       </div>
//     );
//   }

// }

// export default Login;