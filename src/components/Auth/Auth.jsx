import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
        <p className="subtitle">
          {isLogin
            ? "Login to continue shopping"
            : "Join us and elevate your style"}
        </p>

        <form className="auth-form">

          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}

          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          {!isLogin && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          {isLogin && (
            <div className="forgot">
              <span onClick={() => setShowForgot(true)}>
                Forgot Password?
              </span>
            </div>
          )}

          <button className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Continue with Google
          </button>
        </form>

        <div className="switch">
          {isLogin ? (
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </div>
      </div>

      {/* ===== Forgot Password Modal ===== */}
      {showForgot && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Reset Password</h3>
            <p>Enter your email to receive reset link</p>
            <input type="email" placeholder="Email Address" />
            <button className="auth-btn">Send Reset Link</button>
            <span
              className="close"
              onClick={() => setShowForgot(false)}
            >
              Cancel
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
