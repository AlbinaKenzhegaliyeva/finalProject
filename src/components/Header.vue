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
    <div class="respondent__be">
      <p id="apply">Стань нашим респондентом</p>
      <p id="opinion">
        Мы хотим услышать твое мнение, опыт и боли общения с цифровыми
        продуктами Beeline.
      </p>
      <button id="ready_btn" @click="openInNewTab()">Я готов!</button>
    </div>
    <div class="respondent__opeartor">
      <img src="../assets/girl.png" alt="" id="girl" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  methods: {
    openInNewTab() {
      return this.$store.getters.openLink;
    },
  },
};
</script>

<style lang="scss">
.nav {
  display: flex;
  margin-left: 217px;
  &__options {
    margin: 42px 0 0 361px;
    a {
      padding-left: 36px;
    }
  }
}
.logo {
  margin-top: 32px;
}
.respondent {
  display: flex;
  gap: 61.27px;
  &__be {
    margin: 100px 0 0 217px;
  }
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

@media (max-width: 600px) {
  .nav {
    margin: 28px 0 0 20px;
  }
  .nav__options {
    display: none;
  }
  .logo {
    margin-top: 0;
  }
  .respondent {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 12px;
    &__be {
      margin: 0;
    }
  }
  #apply {
    margin: 48px 81px 0 82px;
    font-size: 30px;
    color: var(--light-label-primary, #10083f);
    text-align: center;
  }
  #opinion {
    margin: 12px 38px 24px 38px;
    text-align: center;
  }
  #ready_btn {
    height: 48px;
    font-size: 16px;
  }
  #girl {
    width: 353.57px;
    height: 234.176px;
    padding: 59px 21px 0 0.43px;
  }
}
</style>
