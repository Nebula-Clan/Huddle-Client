<template>
  <div class="intro d-flex justify-center elevation-20">
    <div class="intro-text pa-5 rounded-lg text-center">
      <h1>Huddle Is Your Universe!</h1>

      <p class="mt-10 font-weight-black">Write what comes to your mind ...</p>
      <p class="font-weight-bold">Explore other universes...</p>
      <p class="font-weight-medium">And more fun stuff...</p>

    </div>
  </div>
</template>

<script>
export default {
name: "intro"
}
</script>

<style lang="scss" scoped>
.intro {
  border-radius: 0 10px 10px 0;
  background-image: url("../../static/images/universe.jpg");
  background-size: cover;
  min-width: 80vh;
  .intro-text {
    color: black;
    width: 80%;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.6);
    h1, p{
      color: #2e0057;
    }
  }
}
</style>
