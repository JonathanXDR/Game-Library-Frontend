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
            @submit.prevent="loginUser"
          >
            <span class="login100-form-title p-b-53"> Login </span>

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
                v-model="username"
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
                v-model="password"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn m-t-17">
              <button class="login100-form-btn" type="submit">Sign In</button>
            </div>

            <div class="w-full text-center p-t-55">
              <span class="txt2"> Not a member? </span>
              <a href="/signup" class="txt2 bo1"> Sign up now </a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>
  </div>
</template>
TODO: daten ans backend senden // TODO: Bearer token im localstorage
abspeichern. (localStorage.setItem('auth', token))
<script>
import axios from '../../Services/HTTPService';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',

      validation: {
        name: false,
        year: false,
        rating: false,
      },

      axiosConfig: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
      },
    };
  },

  methods: {
    async loginUser() {
      console.log('test');
      this.disableBtn();
      const token = await axios.post(
        'user/login',
        {
          username: this.username,
          password: this.password,
        },
        this.axiosConfig
      );

      localStorage.setItem('auth', token.data);
    },

    disableBtn() {
      if (
        this.validation.username === true &&
        this.validation.password === true
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {},
};
</script>
<style scoped>
@import '../assets/main.css';
</style>
