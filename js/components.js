const components = {};

components.loginPage = `
<div class="app" id="login-screen">
<div id="login-form-container" class="login-form-container">
    <form id="login-form">
        <img src="../images/chat-logo.png" alt="logo" class="logo">
        <div>
            <input type="email" name="email" placeholder="Email Address" />
            <div class="error-message" id="email-error-message"></div>
        </div>

        <div>
            <input type="password" name="password" placeholder="Password" />
            <div class="error-message" id="password-error-message"></div>
        </div>

        <div>
            <div>
                <br>
                <a href="#"  id="register-link">Don't have an account? Register.</a><br><br>
                <a href="#" id="reset-password-link">Forgot your password? Reset Password.</a><br>
                <br>
                <input type="submit" value="Log In" />
                <br>
            </div>
        </div>
    </form>
</div>
</div>
`;

components.registerPage = `
<div class="app" id="register-screen">
    <div id="register-form-container" class="register-form-container">
        <form id="register-form">
            <img src="../images/register.png" alt="logo" class="logo-register">
            <div class="name">
                <input type="text" id="firstName" placeholder="Fisrt Name" />
                <input type="text" id="lastName" placeholder="Last Name" />
            </div>
            <div class="error-message" id="name-error-message"></div>
            <div>
                <input type="email" name="email" placeholder="Email Address" />
                <div class="error-message" id="email-error-message"></div>
            </div>

            <div>
                <input type="password" name="password" placeholder="Password" />
                <div class="error-message" id="password-error-message"></div>
            </div>

            <div>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                <div class="error-message" id="confirm-password-error-message"></div>
                <div class="error-message" id="error-message"></div>
                <div class="success-message" id="success-message"></div>
            </div>
                <div>
                    <br>
                    <a href="#" id="login-link">Already have an account? Log In.</a><br><br>
                    <br>
                    <input type="submit" value="Register" />
                    <br>
                </div>
        </form>
    </div>
</div>
`;

components.resetPasswordPage = `
<div class="app" id="reset-password-screen">
<div id="reset-password-form-container" class="login-form-container">
    <form id="reset-password-form">
        <img src="../images/reset-password.png" alt="logo" class="reset-password">
        <div>
            <input type="email" name="email" placeholder="Email Address" />
            <div class="error-message" id="email-error-message"></div>
            <div class="success-message" id="success-message"></div>
        </div>

        <div>
            <div>
                <br>
                <a href="#" id="register-link">Don't have an account? Register.</a><br><br>
                <a href="#" id="login-link">Already have an account? Log In.</a><br><br>
                <br>
                <input type="submit" value="Reset Password" />
                <br>
            </div>
        </div>
    </form>
</div>
</div>
`;

components.chatPage = `
<div class='chat-container'>
    <div class='header'>
      Chat App
    </div>
    <div class='main'>
      <div class='conversation-detail'>
        <div id='conversation-name' class='conversation-header'>
          Hải Sơn Nguyễn
        </div>
        <div class='conversation-messages' id='conversation-messages'>
            <div class="message-container" id="message-container">
            </div>
        </div>
        <form name='message-form' id='message-form'>
        
          <div class='conversation-input'>
            <input id='message-input' name='message' placeholder='Type a message ...'></input>
            <button class='button' type='submit'>Send</button>
          </div>
        <form>
      </div>
    </div>
  </div>
`;