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
            <h1 class="login100-form-title p-b-53">Login</h1>

            <div class="p-t-31 p-b-9">
              <label class="txt1">Username</label>
            </div>
            <input
              class="input100"
              type="text"
              name="username"
              placeholder="Username..."
              maxlength="20"
              v-model.trim="username"
              v-bind:class="{ notValid: !validation.username }"
            />

            <div class="p-t-13 p-b-9">
              <label class="txt1"> Password </label>
              <!-- <a href="#" class="txt2 m-l-5"> Forgot? </a> -->
            </div>
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Password..."
              maxlength="40"
              v-model="password"
              v-bind:class="{ notValid: !validation.password }"
            />

            <div class="container-login100-form-btn m-t-17">
              <button
                class="login100-form-btn"
                v-bind:disabled="disableBtn()"
                type="submit"
              >
                Sign In
              </button>
            </div>

            <div class="w-full text-center p-t-55">
              <span class="txt2"> Not a member? </span>
              <a href="/signup" class="txt2"> Sign up now </a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>
  </div>
</template>
<script>
import axios from '../../Services/HTTPService';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',

      validation: {
        username: false,
        password: false,
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
      // console.log(token.data);
      this.$router.push('/');
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
  },
};
</script>
<style scoped>
@import '../assets/main.css';
</style>
