import react from "react";
import "./Login.css";
import Button from "../UI/Button";

const Login = () => {
    return(
        <div id="login-form-wrap">
            <h2>Login</h2>
            <form id="login-form">
                <p>
                    <input type="text" id="username" name="username" placeholder="Username" required></input><i class="validation"><span></span><span></span></i>
                </p>
                <p>
                    <input type="email" id="email" name="email" placeholder="Email Address" required></input><i class="validation"><span></span><span></span></i>
                </p>
                <p>
                    <input type="submit" id="login" value="Login"></input>
                </p>
            </form>
            <div id="create-account-wrap">
                <p>Not a member? <a href="#">Create Account</a></p>
                </div>
            </div>
    );
}

export default Login;