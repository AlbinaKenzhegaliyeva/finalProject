<template>
  <p id="plus">Какие плюсы?</p>
  <div class="options">
    <div class="first">
      <img src="../assets/telephone.png" id="cellphone" />
      <div class="first_text">
        <p class="first_text_be">Будь первым</p>
        <p id="full">
          Ты первым увидишь наши новые продукты и поучаствуешь в их разработке
        </p>
      </div>
    </div>
    <div class="second">
      <img src="../assets/smile.png" id="smile" />
      <div class="second_text">
        <p id="experience">Поделись опытом</p>
      </div>
    </div>
    <div class="third">
      <img src="../assets/dog.png" id="dog" />
      <div class="third_text">
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
#plus {
  padding: 110px 945px 0 217px;
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
}
.second {
  width: 293px;
  height: 441px;
  border-radius: 16px;
  background-color: #eaf4ff;
}
.third {
  width: 293px;
  height: 441px;
  border-radius: 16px;
  background-color: #000;
}
#cellphone {
  padding: 84px 106px 0 105px;
  width: 150px;
  height: 150px;
}
.first_text {
  padding: 12px 63px 0 62px;
  text-align: center;
}
.first_text_be {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
#full {
  color: #78735e;
  text-align: center;
  font-size: 18px;
}
#smile {
  padding: 104px 71px 0 72px;
  width: 150px;
  height: 150px;
}
.second_text {
  padding: 36px 28px 0 29px;
  text-align: center;
}
#experience {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
#dog {
  padding: 102px 72px 0 71px;
  width: 150px;
  height: 150px;
}
.third_text {
  padding: 29.36px 28px 0 29px;
}
#share {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
</style>
