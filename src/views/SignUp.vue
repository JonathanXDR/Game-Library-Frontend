<template>
  <div>
    <div class="limiter">
      <div
        class="container-login100"
        style="background-image: url('images/bg-01.jpg')"
      >
        <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form
            class="login100-form validate-form flex-sb flex-w"
            @submit.prevent="signUpUser"
          >
            <span class="login100-form-title p-b-53"> Create Account </span>

            <div class="p-t-31 p-b-9">
              <label class="txt1"> Username </label>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                class="input100"
                type="text"
                name="username"
                maxlength="16"
                v-model.trim="username"
                v-bind:class="{ valid: !validation.username }"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="p-t-13 p-b-9">
              <label class="txt1"> Password </label>
              <!-- <a href="#" class="txt2 bo1 m-l-5"> Forgot? </a> -->
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                class="input100"
                type="password"
                name="pass"
                maxlength="24"
                v-model.trim="password"
                v-bind:class="{ valid: !validation.password }"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="p-t-13 p-b-9">
              <label class="txt1"> Repeat Password </label>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                class="input100"
                type="password"
                name="pass"
                maxlength="24"
                v-model.trim="repeatPassword"
                v-bind:class="{ valid: !validation.repeatPassword }"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn m-t-17">
              <button
                class="login100-form-btn signUpBtn"
                v-bind:disabled="disableBtn()"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <div class="w-full text-center p-t-55">
              <span class="txt2"> Already a member? </span>
              <a href="/login" class="txt2 bo1"> Login here </a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>
  </div>
</template>
// TODO: Mit den Daten einen user erstellen // TODO: Auf Login seite
weiterleiten router.push('/login')
<script>
import axios from '../../Services/HTTPService';
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      password: '',
      repeatPassword: '',

      validation: {
        username: false,
        password: false,
        repeatPassword: false,
      },

      axiosConfig: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
      },
    };
  },

  methods: {
    async signUpUser() {
      console.log('test');
      this.disableBtn();
      const createdUser = await axios.post(
        'user',
        {
          username: this.username,
          password: this.password,
          repeatPassword: this.repeatPassword,
        },
        this.axiosConfig
      );
      console.log(createdUser);
      this.$router.push('/login');
    },

    disableBtn() {
      if (
        this.validation.username === true &&
        this.validation.password === true &&
        this.validation.repeatPassword === true
      ) {
        return false;
      } else {
        return true;
      }
    },
  },

  mounted() {},

  watch: {
    username() {
      if (this.username === '') {
        this.validation.username = false;
      } else {
        this.validation.username = true;
      }
      this.disableBtn();
    },

    password() {
      if (this.password === '') {
        this.validation.password = false;
      } else {
        this.validation.password = true;
      }
      this.disableBtn();
    },

    repeatPassword() {
      // if password is empty or not equal to repeatPassword then set validation to false
      if (this.repeatPassword === '' || this.repeatPassword !== this.password) {
        this.validation.repeatPassword = false;
      } else {
        this.validation.repeatPassword = true;
      }
      this.disableBtn();
    },
  },
};
</script>
<style scoped>
@import '../assets/main.css';
</style>
