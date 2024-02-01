<script setup lang="ts">
import DescriptionLights from "./components/DescriptionLights.vue";
</script>

<template>
  <div class="header">
    <h1 class="name">Onur Kantarci</h1>
    <h1 class="line">|</h1>
    <h2 class="front-end">Frontend Developer</h2>
  </div>
  <div class="ceiling">
    <DescriptionLights />
  </div>
</template>

<style scoped>
.line {
  color: #ff5555; /* Reddish color */
  position: relative;
  animation: glitch 5s infinite linear;
}

@keyframes glitch {
  0%,
  100% {
    text-shadow: -2px -2px 2px #ff5555, 2px 2px 2px #ffffff;
    color: #ff5555; /* Reddish color */
  }
  50% {
    text-shadow: 2px -2px 2px #ff5555, -2px 2px 2px #ffffff;
    color: #ffffff; /* Whiteish color */
  }
}
.header {
  background: linear-gradient(
    to right,
    #232424,
    #042642
  ); /* Reddish to Blackish gradient */
  padding: 10px;
  background-color: transparent;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  max-height: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.name {
  margin-left: 15px;
  color: #ffffff; /* Whiteish color */
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 25px;
}
.front-end {
  color: #289dc4; /* Reddish color */
  font-family: "Sixtyfour", sans-serif;
  margin-top: 17px;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
}
h3 {
  color: #de3c4b; /* Reddish color */
  font-family: "Sixtyfour", sans-serif;
  font-size: 12px;
}
h4 {
  color: #c42847; /* Reddish color */
  font-family: "Roboto", sans-serif;
}
</style>
