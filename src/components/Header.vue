<template>
  <div class="nav">
    <div class="logo">
      <a href="#">
        <img src="../assets/logo.png" alt="" />
      </a>
    </div>
    <div class="nav__options">
      <a href="#">Какие плюсы?</a>
      <a href="#">Что потребуется от тебя</a>
      <a href="#">Наша миссия </a>
      <a href="#">Присоединиться</a>
    </div>
  </div>
  <div class="respondent">
    <div class="be_respondent">
      <p id="apply">Стань нашим респондентом</p>
      <p id="opinion">
        Мы хотим услышать твое мнение, опыт и боли общения с цифровыми
        продуктами Beeline.
      </p>
      <button id="ready_btn">Я готов!</button>
    </div>
    <div class="opeartor_respondent">
      <img src="../assets/girl.png" alt="" id="girl" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<style lang="scss">
.nav {
  display: flex;
  margin-left: 217px;
}
.logo {
  margin-top: 32px;
}
.nav__options {
  margin: 42px 0 0 361px;
}
.nav__options a {
  padding-left: 36px;
}
.respondent {
  display: flex;
  gap: 61.27px;
}
.be_respondent {
  margin: 130px 0 0 217px;
}
#girl {
  width: 647.73px;
  height: 429px;
  padding: 70px 174px 0 61.27px;
}
#apply {
  font-size: 40px;
  font-weight: 700;
}
#opinion {
  font-size: 18px;
  color: var(--light-label-paragraph, #504d64);
  margin: 24px 0 24px 0;
}
#ready_btn {
  border-radius: 12px;
  border-style: none;
  background-color: var(--ui-buttons-primary-active, #ffe14d);
  width: 158px;
  height: 56px;
  padding: 0px 32px;
  color: var(--label-primary, #10083f);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}
</style>
