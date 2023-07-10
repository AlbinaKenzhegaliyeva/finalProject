<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Anton&family=Lilita+One&family=Nanum+Gothic&family=Oswald:wght@500&family=PT+Sans+Narrow:wght@700&family=Roboto:wght@100;300;400;500;700;900&display=swap"
    rel="stylesheet"
  />
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
$text-color: #10083f;
body {
  font-family: "Roboto", sans-serif;
  background-image: linear-gradient(
    to bottom,
    #f1f1f4 0%,
    #f1f1f4 20%,
    white 20%,
    white 100%
  );
}
a {
  color: $text-color;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}
@media (max-width: 600px) {
  body {
    font-family: "Roboto", sans-serif;
    background-image: linear-gradient(
      to bottom,
      #f1f1f4 0%,
      #f1f1f4 16%,
      white 16%,
      white 100%
    );
  }
}
</style>
