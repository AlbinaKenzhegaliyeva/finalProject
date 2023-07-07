<template>
  <div class="mission">
    <img src="../assets/respondent.png" id="respond_girl" />
    <div class="mission_text">
      <p id="our_mission">Наша миссия</p>
      <div>
        <p class="our_mission_text">
          Тебя тоже раздражает, когда ты пользуешься приложением или сайтом и
          непонятно куда нажать? Когда попадаешь на пустой экран после ввода
          данных?
        </p>
        <p class="our_mission_text">Нам тоже это не нравится!</p>
        <p class="our_mission_text">
          Мы хотим улучшать наши продукты, делать их проще и удобнее для
          пользователя. Присоединяйся, без тебя нам не обойтись!
        </p>
        <button class="our_mission_btn">Присоединиться</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#respond_girl {
  margin: 175px 0 164.5px 133px;
}
.mission {
  display: flex;
  gap: 88.63px;
}
.mission_text {
  display: flex;
  flex-direction: column;
}
#our_mission {
  color: var(--light-label-primary, #10083f);
  font-size: 40px;
  font-weight: 700;
  margin: 175px 406px 0 0;
}
.our_mission_text {
  color: var(--light-label-paragraph, #504d64);
  font-size: 18px;
  padding: 40px 220px 0 0;
  margin: 0;
}
.our_mission_btn {
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
</style>
