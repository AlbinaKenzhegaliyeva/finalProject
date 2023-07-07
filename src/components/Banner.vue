<template>
  <div class="description">
    <div class="description_whois">
      <p id="whois">Кто такой респондент?</p>
    </div>
    <div class="description_full">
      <p id="description_respondent">
        Респондент - человек, принимающий участие в опросе, интервью или
        тестировании дизайна. Мы используем твои ответы в проектировании новых
        продуктов, чтобы сделать их понятнее, удобнее и приятнее для
        пользователей.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComp",
};
</script>

<style lang="scss">
.description {
  display: flex;
  flex-direction: column;
  margin-top: 110px;
}
#whois {
  color: var(--light-label-primary, #10083f);
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}
.description_full {
  padding: 0 399px 0 399px;
  text-align: center;
}
.description_whois {
  padding: 0 498px 0 497px;
}
.description_respondent {
  padding-top: 36px;
  color: var(--light-label-paragraph, #504d64);
  text-align: center;
  font-size: 18px;
}
</style>
