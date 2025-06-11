<template>
  <div class="loginBlock">
    <div class="subTitle1">輸入電子郵件來重設您的密碼</div>
    <div class="subTitle2">我們將傳送重設密碼的指示您的電子郵件信箱。</div>
    <form action="">
      <div class="form">
        <div class="formGrp">
          <input
            name="username"
            type="email"
            placeholder="請輸入電子郵件"
            title="請輸入電子郵件"
          />
          <div class="notice error">您的電子郵件不是正確格式</div>
        </div>
        <div class="btnGrp">
          <button type="button" class="btn">清除</button>
          <button
            type="button"
            class="btn submit"
            onclick="window.location.href='01-2.forget_pw2.html'"
          >
            傳送
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
