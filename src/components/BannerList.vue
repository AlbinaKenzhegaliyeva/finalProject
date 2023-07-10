<template>
  <p id="join">Как принять участие?</p>
  <div class="row1">
    <div class="row1__one">
      <img src="../assets/one.png" id="one" />
      <div class="row1__one__firstStep">
        <p class="row1__one__firstStep__application">
          Оставь <span style="color: #0c4dce"><u>заявку</u></span>
        </p>
        <p class="row1__one__firstStep__text">
          Заполни форму максимально честно, выбери продукты которые хочешь
          тестировать
        </p>
      </div>
    </div>
    <div class="row1__two">
      <img src="../assets/twoo.png" id="two" />
      <div class="row1__two__secondStep">
        <p class="row1__two__secondStep__application">
          Ожидай приглашения на интервью
        </p>
        <p class="row1__two__secondStep__text">
          Будь на связи :) Мы напишем/позвоним тебе заранее и договоримся об
          удобном времени. Обычно интервью не занимает больше 30-40 минут.
        </p>
      </div>
    </div>
  </div>
  <div class="row2">
    <div class="row2__one">
      <img src="../assets/three.png" id="three" />
      <div class="row2__one__firstStep">
        <p class="row2__one__firstStep__application">Позаботься об окружении</p>
        <p class="row2__one__firstStep__text">
          Выбери спокойное, тихое место с хорошим интернетом. Обязательно
          приноси с собой хорошее настроение 😉
        </p>
      </div>
    </div>
    <div class="row2__two">
      <img src="../assets/four.png" id="four" />
      <div class="row2__two__secondStep">
        <p class="row2__two__secondStep__application">Получи клевую ачивку</p>
        <p class="row2__two__secondStep__text">
          После первого интервью, в приложении Мой Билайн тебе откроется новая
          ачивка «Яркий пиздюк». Спасибо, что ты с нами!
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerList",
};
</script>

<style lang="scss">
@mixin firstText() {
  color: #000;
  font-size: 20px;
  font-weight: 500;
}
@mixin SecondText() {
  color: var(--light-label-secondary, #858295);
  font-size: 18px;
}
#join {
  margin: 110px 220px 0 217px;
  color: var(--light-label-primary, #10083f);
  font-size: 40px;
  font-weight: 700;
}
.row1,
.row2 {
  display: flex;
  margin-top: 46px;
}
#one {
  padding: 0 499.5px 18px 217px;
}
#two {
  padding: 0 599.5px 18px 0;
}
#three {
  padding: 0 500.5px 18px 217px;
}
#four {
  padding: 0 599.5px 18px 0;
}
.row1__one__firstStep {
  padding: 0 120px 0 217px;
  &__application {
    @include firstText();
  }
  &__text {
    @include SecondText();
  }
}
.row1__two__secondStep {
  padding: 0 220px 0 0;
  &__application {
    @include firstText();
  }
  &__text {
    @include SecondText();
  }
}
.row2__one__firstStep {
  padding: 0 120px 0 217px;
  &__application {
    @include firstText();
  }
  &__text {
    @include SecondText();
  }
}
.row2__two__secondStep {
  padding: 0 220px 0 0;
  &__application {
    @include firstText();
  }
  &__text {
    @include SecondText();
  }
}
@media (max-width: 600px) {
  #join {
    margin: 80px 60px 0 60px;
    font-size: 30px;
    text-align: center;
  }
  .row1,
  .row2 {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  #one {
    padding: 0 156px 20px 157px;
  }
  #two {
    padding: 40px 156px 20px 157px;
  }
  #three,
  #four {
    padding: 40px 156px 20px 157px;
  }
  .row1__one__firstStep {
    text-align: center;
    padding: 0;
    &__application {
      padding: 0 69px 12px 70px;
      margin: 0;
    }
    &__text {
      padding: 0 36px 0 36px;
      margin: 0;
    }
  }
  .row1__two__secondStep {
    text-align: center;
    padding: 0;
    &__application {
      padding: 0 69px 12px 70px;
      margin: 0;
    }
    &__text {
      padding: 0 36px 0 36px;
      margin: 0;
    }
  }
  .row2__one__firstStep {
    text-align: center;
    padding: 0;
    &__application {
      padding: 0 69px 12px 70px;
      margin: 0;
    }
    &__text {
      padding: 0 36px 0 36px;
      margin: 0;
    }
  }
  .row2__two__secondStep {
    text-align: center;
    padding: 0;
    &__application {
      padding: 0 69px 12px 70px;
      margin: 0;
    }
    &__text {
      padding: 0 36px 0 36px;
      margin: 0;
    }
  }
}
</style>
