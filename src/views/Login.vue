<template>
  <div>
    <div class="limiter">
      <div
        class="container-login100"
        style="background-image: url('images/bg-01.jpg')"
      >
        <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form class="login100-form validate-form flex-sb flex-w">
            <span class="login100-form-title p-b-53"> Login </span>

            <div class="p-t-31 p-b-9">
              <span class="txt1"> Username </span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input class="input100" type="text" name="username" />
              <span class="focus-input100"></span>
            </div>

            <div class="p-t-13 p-b-9">
              <span class="txt1"> Password </span>

              <a href="#" class="txt2 bo1 m-l-5"> Forgot? </a>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input class="input100" type="password" name="pass" />
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn m-t-17">
              <button class="login100-form-btn">Sign In</button>
            </div>

            <div class="w-full text-center p-t-55">
              <span class="txt2"> Not a member? </span>

              <a href="#" class="txt2 bo1"> Sign up now </a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>
  </div>
</template>
<script>
export default {
  name: 'Login',
};
</script>
TODO: daten ans backend senden // TODO: Bearer token im localstorage
abspeichern. (localStorage.setItem('auth', token))
<style scoped>
/*//////////////////////////////////////////////////////////////////
[ FONT ]*/

/* @font-face {
  font-family: Poppins-Regular;
  src: url('../fonts/poppins/Poppins-Regular.ttf');
}

@font-face {
  font-family: Poppins-Medium;
  src: url('../fonts/poppins/Poppins-Medium.ttf');
}

@font-face {
  font-family: Montserrat-Medium;
  src: url('../fonts/montserrat/Montserrat-Medium.ttf');
}

@font-face {
  font-family: Montserrat-SemiBold;
  src: url('../fonts/montserrat/Montserrat-SemiBold.ttf');
} */

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');

/*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

template {
  height: 100%;
  font-family: 'Source Sans Pro';
  /* font-family: Poppins-Regular, sans-serif; */
}

/*---------------------------------------------*/
a {
  /* font-family: Poppins-Regular; */
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: red;
  border-color: red;
}

/*---------------------------------------------*/
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  /* font-family: Poppins-Regular; */
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/
input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

label {
  display: block;
  margin: 0;
}

/*---------------------------------------------*/
button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

/*//////////////////////////////////////////////////////////////////
[ Utility ]*/
.txt1 {
  /* font-family: Montserrat-SemiBold; */
  font-size: 16px;
  color: black;
  line-height: 1.5;
}

.txt2 {
  /* font-family: Poppins-Regular; */
  font-size: 14px;
  color: #999999;
  line-height: 1.5;
}

.bo1 {
  border-bottom: 1px solid #999999;
}

/*//////////////////////////////////////////////////////////////////
[ login ]*/

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.wrap-login100 {
  width: 680px;
  background: white;
  border-radius: 10px;
  position: relative;
}

/*==================================================================
[ Form ]*/

.login100-form {
  width: 100%;
}

.login100-form-title {
  width: 100%;
  display: block;
  /* font-family: Montserrat-Medium; */
  font-size: 39px;
  color: black;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
}

/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  width: 100%;
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
}

/*---------------------------------------------*/
.input100 {
  /* font-family: Poppins-Regular; */
  color: black;
  line-height: 1.2;
  font-size: 18px;
  display: block;
  width: 100%;
  background: transparent;
  height: 60px;
  padding: 0 20px;
}
/*------------------------------------------------------------------
[ Focus Input ]*/

.focus-input100 {
  position: absolute;
  display: block;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;
  pointer-events: none;
  border: 1px solid red;
  border-radius: 10px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s;
  transform: scaleX(1.1) scaleY(1.3);
}

.input100:focus + .focus-input100 {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}

.eff-focus-selection {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.login100-form-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: black;
  border-radius: 10px;
  /* font-family: Poppins-Medium; */
  font-size: 16px;
  color: white;
  line-height: 1.2;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  max-width: 70%;
  background-color: white;
  border: 1px solid #c80000;
  border-radius: 2px;
  padding: 4px 25px 5px 10px;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  pointer-events: none;
  /* font-family: Poppins-Regular; */
  color: #c80000;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: '\f12a';
  /* font-family: FontAwesome; */
  display: block;
  position: absolute;
  color: #c80000;
  font-size: 18px;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}
/*------------------------------------------------------------------
[ Utils ]*/

.p-r-110 {
  padding-right: 110px;
}

.p-l-110 {
  padding-left: 110px;
}

.p-b-33 {
  padding-bottom: 33px;
}

.p-t-62 {
  padding-top: 30px;
}

.flex-sb {
  display: flex;
  justify-content: space-between;
}

.flex-w {
  display: flex;
  flex-wrap: wrap;
}

/* .p-b-53 {
  padding-bottom: 53px;
} */

.p-b-9 {
  padding-bottom: 9px;
}

.p-t-31 {
  padding-top: 31px;
}

.p-t-13 {
  padding-top: 13px;
}

.m-l-5 {
  margin-left: 5px;
}

.m-t-17 {
  margin-top: 17px;
}

.w-full {
  width: 100%;
}

.text-center {
  text-align: center;
}

.p-t-55 {
  padding-top: 50px;
}

/*//////////////////////////////////////////////////////////////////
[ Responsive ]*/
@media (max-width: 768px) {
  .wrap-login100 {
    padding-left: 60px;
    padding-right: 60px;
  }
}

@media (max-width: 576px) {
  .wrap-login100 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .btn-face,
  .btn-google {
    width: 100%;
  }
}
</style>
