<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  height: 100%;
}
#app,
.wrapper,
body {
  min-width: 1263px;
  overflow-y: hidden;
}
</style>
