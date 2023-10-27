<template>
  <div class="login-container">
    <el-form
      ref="changePasswordForm"
      :model="changePasswordForm"
      :rules="changePasswordRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">Đổi mật khẩu</h3>
      </div>
      <el-form-item prop="new_password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="new_password"
          v-model="changePasswordForm.new_password"
          :type="passwordType"
          placeholder="Mật khẩu mới"
          name="new_password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleChangePassword"
        />
        <span class="show-pwd" @click="showPwd('new_password')">
          <svg-icon
            :icon-class="passwordType === 'new_password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <el-form-item prop="repeat_new_password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="repeat_new_password"
          v-model="changePasswordForm.repeat_new_password"
          :type="passwordType"
          placeholder="Nhập lại mật khẩu"
          name="repeat_new_password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleChangePassword"
        />
        <span class="show-pwd" @click="showPwd('repeat_new_password')">
          <svg-icon
            :icon-class="
              passwordType === 'repeat_new_password' ? 'eye' : 'eye-open'
            "
          />
        </span>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleChangePassword"
        >Login</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { changePassword } from '@/api/user';
import router from '@/router';
import { Message } from 'element-ui';

export default {
  name: 'Login',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'));
      } else {
        callback();
      }
    };
    return {
      changePasswordForm: {
        new_password: '',
        repeat_new_password: '',
      },
      changePasswordRules: {
        new_password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
        repeat_new_password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
      },
      loading: false,
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
      if (this.passwordType === key) {
        this.passwordType = '';
      } else {
        this.passwordType = key;
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
              router.push({ path: 'rank' });
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
