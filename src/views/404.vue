<template>
  <div class="home">
    <div class="container">
      <h1>404</h1>
      <p>How did you end up here?</p>
       <router-link class="link" to="/">Go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourOFour',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

p {
  font-family: 'Roboto', sans-serif;
  color: #5e564352;
  margin-top: 0;
}

.link {
  font-family: 'Roboto', sans-serif;
  color: #c779d08e;
  margin-top: 0;
}

h1 {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  vertical-align: middle;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 100px;
  color: transparent;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.67),
    rgba(255, 255, 255, 0.25)
  ),
  linear-gradient(180deg, #feac5e, #c779d0, #4bc0c8);
  background-clip: text;
  margin-bottom: 0;
}

.home {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.671),
    rgba(255, 255, 255, 0.67)
  ),
  linear-gradient(270deg, #feac5e, #c779d0, #4bc0c8);
  background-size: 600% 600%;

  -webkit-animation: gradientMove 30s ease infinite;
  -moz-animation: gradientMove 30s ease infinite;
  animation: gradientMove 30s ease infinite;
  position: absolute; top: 0; left: 0; height: 100%; width: 100%;
}

@-webkit-keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
