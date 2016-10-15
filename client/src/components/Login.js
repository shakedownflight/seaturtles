import React from 'react';
import ReactDOM from 'react-dom';

import GoogleLogin from 'react-google-login';
import $ from 'jquery';
 
class Login extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      loginText : "Login with Google"
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
    console.log({accessToken: id_token});
    console.log(profile.getName());
    //anything else you want to do(save to localStorage)... 
 
 $.ajax({
  type:'GET',
  url:'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+id_token,
  datatype:'jsonp',
  success:((data)=> {
    console.log("googgle token check success");
    this.setState({loginText:data.name});
  }).bind(this),
  error: (err) => {
    console.log('decoding err');
  }
 });
}



  render () {
    return (
        <GoogleLogin clientId={"448333283053-4j6292rub35isemkloo4g8233jlj5lbp.apps.googleusercontent.com"}
                     //class="google-login"
                     // 접근 요청할 수 있는 데이터
                     //scope="profile"
                     onSuccess={this.responseGoogle}
                     onFailure={this.responseGoogle}
                     offline={false}
                     //responseHandler={this.responseGoogle}
                     >
                     <span>{this.state.loginText}</span>
                     </GoogleLogin>
    );
  }
 
}
 
export default Login;

// import React from 'react';
// import {GoogleLogin} from 'react-google-login-component';
 
// class Login extends React.Component{
 
//   constructor (props, context) {
//     super(props, context);
//   }
 
//   responseGoogle (googleUser) {
//     var id_token = googleUser.getAuthResponse().id_token;
//     console.log({accessToken: id_token});
//     //anything else you want to do(save to localStorage)... 
//   }
 
//   render () {
//     return (
//       <div>
//         <GoogleLogin clientId="448333283053-4j6292rub35isemkloo4g8233jlj5lbp.apps.googleusercontent.com"

//                      class="google-login"
//                      scope="profile"
//                      responseHandler={this.responseGoogle}
//                      buttonText="Login With Google"/>
//       </div>
//     );
//   }

// export default Login;