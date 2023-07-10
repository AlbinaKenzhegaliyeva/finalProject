<template>
  <div class="mission">
    <img src="../assets/respondent.png" id="respond_girl" />
    <div class="mission__text">
      <p id="our_mission">Наша миссия</p>
      <div>
        <p class="mission__text__our">
          Тебя тоже раздражает, когда ты пользуешься приложением или сайтом и
          непонятно куда нажать? Когда попадаешь на пустой экран после ввода
          данных?
        </p>
        <p class="mission__text__our">Нам тоже это не нравится!</p>
        <p class="mission__text__our">
          Мы хотим улучшать наши продукты, делать их проще и удобнее для
          пользователя. Присоединяйся, без тебя нам не обойтись!
        </p>
        <button class="mission__btn">Присоединиться</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mission {
  display: flex;
  gap: 88.63px;
  &__btn {
    width: 258px;
    height: 56px;
    padding: 0px 32px;
    border-radius: 12px;
    background-color: var(--ui-buttons-primary-active, #ffe14d);
    color: var(--label-primary, #10083f);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    border-style: none;
    margin: 55px 407px 181px 0;
  }
  &__text {
    display: flex;
    flex-direction: column;
    &__our {
      color: var(--light-label-paragraph, #504d64);
      font-size: 18px;
      padding: 40px 220px 0 0;
      margin: 0;
    }
  }
}
#respond_girl {
  margin: 175px 0 164.5px 133px;
}
#our_mission {
  color: var(--light-label-primary, #10083f);
  font-size: 40px;
  font-weight: 700;
  margin: 175px 406px 0 0;
}
@media (max-width: 600px) {
  #respond_girl {
    margin: 48px 0 40.89px 42px;
    width: 333px;
    height: 274.109px;
    position: absolute;
    bottom: 1px;
  }
  #our_mission {
    margin: 80px 90px 0 91px;
    font-size: 30px;
  }
  .mission {
    display: flex;
    flex-direction: column;
    position: relative;
    &__btn {
      margin: 24px 58px 350px 57px;
      font-size: 16px;
      width: 258px;
      height: 48px;
    }
    &__text {
      &__our {
        padding: 40px 18px 0 18px;
        margin: 0;
        text-align: center;
      }
    }
  }
}
</style>
