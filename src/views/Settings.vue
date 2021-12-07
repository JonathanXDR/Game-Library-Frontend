<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="profile-holder">
            <div class="profile-people-holder">
              <div class="profile-name">
                <h1 class="login100-form-title p-b-53 titleSettings">
                  Profile settings
                </h1>
                <p>Update your profile settings</p>
              </div>
            </div>
            <div class="profile-settings-holder">
              <form class="form-horizontal profile-update">
                <!-- <div class="form-group clearfix">
                  <div class="col-sm-12 control-label">
                    <label for="profile_email">Your email</label>
                  </div>
                  <div class="col-sm-12 profile-email clearfix">
                    <p>hcarneiro@fliplet.com</p>
                    <div class="btn btn-primary text-helper">
                      Request new invitation
                    </div>
                  </div>
                </div> -->

                <div class="form-group clearfix">
                  <div class="col-sm-12 control-label">
                    <label for="profile_username">Change username</label>
                    <span class="text-helper"
                      >Only enter a username if you want to change it</span
                    >
                  </div>
                  <div class="col-sm-12">
                    <input
                      class="input100 inputHome"
                      type="text"
                      name="username"
                      placeholder="Enter username to update it"
                      maxlength="20"
                      v-model.trim="username"
                      v-bind:class="{ notValid: !validation.username }"
                    />
                  </div>
                </div>

                <div class="profile-people-holder lineSettings"></div>

                <div class="form-group clearfix">
                  <div class="col-sm-12 control-label">
                    <label for="profile_password">Change password</label>
                    <span class="text-helper"
                      >Only enter a password if you want to change it</span
                    >
                  </div>
                  <div class="col-sm-12">
                    <input
                      class="input100 inputHome"
                      type="password"
                      name="pass"
                      placeholder="Enter password to update it"
                      maxlength="40"
                      v-model.trim="password"
                      v-bind:class="{ notValid: !validation.password }"
                    />
                  </div>
                </div>
                <div class="form-group clearfix">
                  <div class="col-sm-12 control-label">
                    <label for="profile_password">Confirm password</label>
                  </div>
                  <div class="col-sm-12">
                    <input
                      class="input100 inputHome"
                      type="password"
                      name="pass"
                      maxlength="40"
                      placeholder="Re-enter password to confirm"
                      v-model.trim="repeatPassword"
                      v-bind:class="{ notValid: !validation.repeatPassword }"
                    />
                  </div>
                </div>

                <div class="profile-people-holder lineSettings"></div>

                <button class="login100-form-btn btnSettings">
                  Delete Account
                </button>

                <div class="profile-people-holder lineSettings"></div>

                <button class="login100-form-btn btnSettings2">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../Services/HTTPService';
export default {
  name: 'Settings',
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
      if (this.password !== this.repeatPassword) {
        this.validation.repeatPassword = false;
        return;
      }
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
