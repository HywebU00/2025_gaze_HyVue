<template>
  <div class="loginBlock">
    <div class="subTitle1">重設你的密碼</div>
    <div class="subTitle2">請輸入六位數密碼。</div>
    <form action="">
      <div class="form">
        <div class="formGrp">
          <div class="password">
            <input
              name="password"
              :type="passwordShow ? 'password' : 'text'"
              placeholder="輸入新密碼"
              title="輸入新密碼"
            />
            <button
              @click="passwordShow = !passwordShow"
              type="button"
              :class="['passwordEye', passwordShow ? 'hide' : 'show']"
            >
              顯示密碼
            </button>
          </div>
          <div class="notice error">請輸入六位數密碼</div>
        </div>
        <div class="formGrp">
          <div class="password">
            <input
              name="password"
              :type="passwordShow1 ? 'password' : 'text'"
              placeholder="再次輸入新密碼"
              title="再次輸入新密碼"
            />
            <button
              @click="passwordShow1 = !passwordShow1"
              type="button"
              :class="['passwordEye', passwordShow1 ? 'hide' : 'show']"
            >
              顯示密碼
            </button>
          </div>
          <div class="notice error">您輸入的密碼不一致</div>
        </div>
        <div class="btnGrp">
          <button type="button" class="btn">清除</button>
          <button
            type="button"
            class="btn submit"
            onclick="window.location.href='01-3.forget_pw3.html'"
          >
            重設密碼
          </button>
        </div>
        <div class="forgerPW"><a href="01.login.html">返回登入頁</a></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordShow: true,
      passwordShow1: true,
    };
  },
};
</script>

<style></style>
