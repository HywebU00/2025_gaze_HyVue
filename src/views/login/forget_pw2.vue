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
              type="password"
              placeholder="輸入新密碼"
              title="輸入新密碼"
            />
            <button type="button" class="passwordEye hide">顯示密碼</button>
          </div>
          <div class="notice error">請輸入六位數密碼</div>
        </div>
        <div class="formGrp">
          <div class="password">
            <input
              name="password"
              type="password"
              placeholder="再次輸入新密碼"
              title="再次輸入新密碼"
            />
            <button type="button" class="passwordEye hide">顯示密碼</button>
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
export default {};
</script>

<style></style>
