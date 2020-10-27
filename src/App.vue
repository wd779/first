<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: "app",
  components: { },
  data() {
    return {};
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  list-style: none;
  font-size: 0.16rem;
}
* {
  margin: 0;
  padding: 0;
}
</style>
