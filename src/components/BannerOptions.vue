<template>
  <p id="plus">Какие плюсы?</p>
  <div class="options">
    <div class="first">
      <img src="../assets/telephone.png" id="cellphone" />
      <div class="first__text">
        <p class="first__text__be">Будь первым</p>
        <p id="full">
          Ты первым увидишь наши новые продукты и поучаствуешь в их разработке
        </p>
      </div>
    </div>
    <div class="second">
      <img src="../assets/smile.png" id="smile" />
      <div class="second__text">
        <p id="experience">Поделись опытом</p>
      </div>
    </div>
    <div class="third">
      <img src="../assets/dog.png" id="dog" />
      <div class="third__text">
        <p id="share">Получи уникальную ачивку</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerOptions",
};
</script>

<style lang="scss">
@mixin cardSize() {
  width: 293px;
  height: 441px;
  border-radius: 16px;
}
@mixin iconSize() {
  width: 150px;
  height: 150px;
}
#plus {
  margin: 110px 945px 0 217px;
  color: var(--light-label-primary, #10083f);
  font-size: 40px;
  font-weight: 700;
}
.options {
  display: flex;
  gap: 28px;
  margin: 40px 220px 0 217px;
}
.first {
  width: 361px;
  height: 441px;
  border-radius: 16px;
  background-color: #fff6cc;
  &__text {
    margin: 12px 63px 0 62px;
    text-align: center;
    &__be {
      color: #000;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      margin: 0;
    }
  }
}
.second {
  @include cardSize();
  background-color: #eaf4ff;
  &__text {
    padding: 36px 28px 0 29px;
    text-align: center;
  }
}
.third {
  @include cardSize();
  background-color: #000;
  &__text {
    padding: 29.36px 28px 0 29px;
  }
}
#cellphone {
  padding: 84px 106px 0 105px;
  @include iconSize();
}
#full {
  color: #78735e;
  text-align: center;
  font-size: 18px;
  margin: 12px 0 85px 0;
}
#smile {
  padding: 104px 71px 0 72px;
  @include iconSize();
}
#experience {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
#dog {
  padding: 102px 72px 0 71px;
  @include iconSize();
}
#share {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
@media (max-width: 600px) {
  #plus {
    margin: 64px 83px 0 84px;
    text-align: center;
    font-size: 30px;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 24px 16px 0 16px;
  }
  .first,
  .second,
  .third {
    width: 343px;
    height: 336px;
  }
  #cellphone,
  #smile,
  #dog {
    padding: 24px 96px 0 97px;
  }
}
</style>
