<script setup lang="ts">
import DescriptionSection from "./components/DescriptionSection.vue";
</script>

<template>
  <div class="header">
    <div class="left-side">
      <h1 class="name">Onur Kantarci</h1>
      <h1 class="line">|</h1>
      <h2 class="front-end">Frontend Developer</h2>
      <div class="icons">
        <a href="https://github.com/onurkantarci">
          <v-icon
            class="icon"
            name="bi-github"
            scale="1.5"
            speed="slow"
            fill="white"
            animation="pulse"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/onur-kantarci-1933672b1/?profileId=ACoAAEr7Sj8BcVUr5tCh79uckj2F7kTDq5n_JyY"
        >
          <v-icon
            class="icon"
            name="bi-linkedin"
            scale="1.5"
            speed="slow"
            fill="white"
          />
        </a>
        <a href="https://www.instagram.com/onur.kntrc/">
          <v-icon
            class="icon"
            name="bi-instagram"
            scale="1.5"
            animation="wrench"
            speed="slow"
            fill="white"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCfcbVqPevCZ-31ALu2znTqg">
          <v-icon
            class="icon"
            name="ri-youtube-line"
            scale="1.5"
            speed="slow"
            fill="white"
          />
        </a>
      </div>
    </div>
  </div>
  <div class="ceiling">
    <DescriptionSection />
  </div>
</template>

<style scoped>
a:hover {
  transition: background-color 1s;
  background-color: rgba(255, 255, 255, 0.21);
  border-radius: 20px;
}
.icon {
  padding: 10px;
}
.icons {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.line {
  color: #00ebff;
  position: relative;
  animation: glitch 5s infinite linear;
}

@keyframes glitch {
  0%,
  100% {
    text-shadow: -2px -2px 2px #00ebff, 2px 2px 2px #ffffff;
    color: #00ebff;
  }
  50% {
    text-shadow: 2px -2px 2px #00ebff, -2px 2px 2px #ffffff;
    color: #ffffff;
  }
}

.right-side {
  display: flex;
  justify-content: flex-end;
}
.left-side {
  background: linear-gradient(to right, #232424, #042642);
  padding: 10px;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  max-height: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.name {
  margin-left: 15px;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 22px;
}
.front-end {
  color: #289dc4;
  font-family: "Sixtyfour", sans-serif;
  margin-top: 17px;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
}
h3 {
  color: #de3c4b;
  font-family: "Sixtyfour", sans-serif;
  font-size: 12px;
}
h4 {
  color: #c42847;
  font-family: "Roboto", sans-serif;
}
</style>
