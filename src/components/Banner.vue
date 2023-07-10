<template>
  <div class="description">
    <div class="description__whois">
      <p id="whois">Кто такой респондент?</p>
    </div>
    <div class="description__full">
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
  gap: 36px;
  margin-top: 110px;
  &__full {
    padding: 0 399px 0 399px;
    text-align: center;
  }
  &__whois {
    padding: 0 498px 0 497px;
  }
}
#whois {
  color: var(--light-label-primary, #10083f);
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
}
#description_respondent {
  color: var(--light-label-paragraph, #504d64);
  text-align: center;
  font-size: 18px;
}

@media (max-width: 600px) {
  .description {
    gap: 12px;
    margin-top: 64px;
    &__full {
      padding: 0 26px 0 27px;
      text-align: center;
    }
    &__whois {
      padding: 0 67px 0 67px;
    }
  }
  #whois {
    font-size: 30px;
  }
  #description_respondent {
    margin: 0;
  }
}
</style>
