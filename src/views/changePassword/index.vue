<template>
  <div class="login-container" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
    <el-form ref="changePasswordForm" :model="changePasswordForm" :rules="changePasswordRules" class="login-form"
      auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">Đổi mật khẩu</h3>
      </div>
      <el-form-item class="focus:shadow" prop="old_password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input :key="oldPasswordType" ref="password" v-model="changePasswordForm.old_password" :type="oldPasswordType"
          placeholder="Mật khẩu hiện tại" name="old_password" tabindex="2" auto-complete="on"
          @keyup.enter.native="handleChangePassword" />
        <span class="show-pwd" @click="showPwd('old_password')">
          <svg-icon :icon-class="oldPasswordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item class="focus:shadow" prop="new_password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input :key="newPasswordType" ref="password" v-model="changePasswordForm.new_password" :type="newPasswordType"
          placeholder="Mật khẩu mới" name="new_password" tabindex="2" auto-complete="on"
          @keyup.enter.native="handleChangePassword" />
        <span class="show-pwd" @click="showPwd('new_password')">
          <svg-icon :icon-class="newPasswordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item class="focus:shadow" prop="repeat_new_password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input :key="passwordType" ref="password" v-model="changePasswordForm.repeat_new_password" :type="passwordType"
          placeholder="Nhập lại mật khẩu" name="repeat_new_password" tabindex="2" auto-complete="on"
          @keyup.enter.native="handleChangePassword" />
        <span class="show-pwd" @click="showPwd('repeat_new_password')">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleChangePassword">Đổi mật khẩu</el-button>
    </el-form>
  </div>
</template>

<script>
import { main } from '@/assets/js/main';
import { changePassword } from '@/api/user';
import router from '@/router';
import { Message } from 'element-ui';
import backgroundImage from '@/assets/img/slider/slider_bg.jpg';


export default {
  name: 'Change Password',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('Mật khẩu mới phải có ít nhất 6 ký tự.'));
      } else {
        callback();
      }
    };

    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.changePasswordForm.new_password) {
        callback(new Error('Mật khẩu xác nhận không khớp với mật khẩu mới.'));
      } else {
        callback();
      }
    };

    const validateOldPassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('Mật khẩu cũ phải có ít nhất 6 ký tự.'));
      } else {
        callback();
      }
    };

    return {
      backgroundImage,
      changePasswordForm: {
        old_password: '',
        new_password: '',
        repeat_new_password: '',
      },
      changePasswordRules: {
        old_password: [
          { required: true, trigger: 'blur', validator: validateOldPassword },
        ],
        new_password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
        repeat_new_password: [
          {
            required: true,
            trigger: 'blur',
            validator: validateConfirmPassword,
          },
        ],
      },
      loading: false,
      oldPasswordType: 'password',
      newPasswordType: 'password',
      passwordType: 'password',
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    showPwd(key) {
      if (key === 'new_password') {
        this.newPasswordType =
          this.newPasswordType === 'password' ? '' : 'password';
      } else if (key === 'old_password') {
        this.oldPasswordType =
          this.oldPasswordType === 'password' ? '' : 'password';
      } else {
        this.passwordType = this.passwordType === 'password' ? '' : 'password';
      }

      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleChangePassword() {
      this.$refs.changePasswordForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          changePassword(this.changePasswordForm)
            .then(() => {
              Message({
                message: 'Thay đổi mật khẩu thành công!',
                type: 'success',
                duration: 5 * 1000,
              });
              this.$store.dispatch('users/logout').then(() => {
                router.push({ path: 'login' });
              })
            })
            .finally(() => {
              this.loading = false;
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  mounted() {
    setTimeout(() => {
      main(window.jQuery);
    });
  }
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  height: 100vh;

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      -webkit-box-shadow: unset;
      box-shadow: unset;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 30%;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
