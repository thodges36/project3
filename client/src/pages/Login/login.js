import React, { Component } from "react";
import "./css/style.css"
class Login extends Component {

    render() {
      return (
          <div>
        <h1>Rental Central </h1>
       
        <div className="main">
            
            <div className="w3">
                <div className="signin-form profile">
                    <h3>Login</h3>
                    
                    <div className="login-form">
                        <form action="/" method="post">
                            <input type="text" name="logemail" placeholder="E-mail" required=""/>
                            <input type="password" name="logpassword" placeholder="Password" required=""/>
                            <div className="tp">
                                <input type="submit" value="LOGIN NOW"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="agile">
                <div className="signin-form profile">
                    <h3>Register</h3>
                    
                    <div className="login-form">
                        <form action="/" method="post">
                            <input type="text" name="email" placeholder="E-mail" required=""/>
                            <input type="text" name="username" placeholder="Username" required=""/>
                            <input type="password" name="password" placeholder="Password" required=""/>
                            <input type="password" name="passwordConf" placeholder="Confirm Password" required=""/>
                            <input type="submit" value="REGISTER"/>
                        </form>
                    </div>
                    <p><a href="#"> By clicking register, I agree to your terms</a></p>
                </div>
            </div>
            <div className="clear"></div>
           	
        </div>
        </div>
      );
    }
  }
  export default Login;