<template>
  <div class="lines-down">
    <h1>|</h1>
  </div>
  <div
    @click="turnOnLights"
    :class="{ 'pulse-animation': lights }"
    class="lines-left"
  >
    <v-icon
      name="io-bulb-sharp"
      scale="1.5"
      speed="slow"
      fill="rgba(40, 115, 196, 0.5)"
      flip="vertical"
    ></v-icon>
  </div>
  <transition name="fade">
    <p
      class="tip"
      style="color: white; margin-left: 15px"
      v-if="!lights"
      key="paragraph1"
    >
      "Turning on a light is not just about dispelling darkness; it's an act of
      unveiling possibilities and banishing uncertainty."
    </p>
  </transition>
  <div v-if="lights" class="description">
    <p>
      Hey! I'm <span class="sixtyfour">ONUR</span>, a Frontend Developer from
      <span class="sixtyfour">KOSOVO</span>.
    </p>
    <p>Currently I'm doing a lawyer internship in Ankara/Turkey,</p>
    <p>which also I'm working on Frontend projects at the same time.</p>
  </div>

  <h2 v-if="lights" class="title-of-projects">
    I have used <v-icon name="co-html5-shield" scale="1.5"></v-icon>,
    <v-icon name="fa-css3-alt" scale="1.5"></v-icon>,<v-icon
      name="co-javascript"
      scale="1.5"
    ></v-icon
    >, <v-icon name="co-typescript" scale="1.5"></v-icon>,
    <v-icon name="co-react" scale="1.5"></v-icon>,
    <v-icon name="co-vue-js" scale="1.5"></v-icon> so far .
  </h2>
  <h2 class="title-of-projects" v-if="lights">
    Some of the Projects I worked on
    <v-icon name="md-filecopy-outlined" scale="2"></v-icon>
  </h2>

  <div class="info-boxes" v-if="lights">
    <div v-if="lights" class="info-container">
      <a
        href="https://www.linkedin.com/in/onur-kantarci-1933672b1/overlay/projects/1434176168/multiple-media-viewer/?profileId=ACoAAEr7Sj8BcVUr5tCh79uckj2F7kTDq5n_JyY&treasuryMediaId=1706536193106"
        ><img src="../../public/Trending Movies.png"
      /></a>

      <p class="info-text">WatchUp</p>
    </div>
    <div v-if="lights" class="info-container">
      <a
        href="https://www.linkedin.com/in/onur-kantarci-1933672b1/overlay/projects/1437697405/multiple-media-viewer/?profileId=ACoAAEr7Sj8BcVUr5tCh79uckj2F7kTDq5n_JyY&treasuryMediaId=1706539713975"
        ><img src="../../public/TodoListPage.png"
      /></a>

      <p class="info-text">TODO List</p>
    </div>
    <div v-if="lights" class="info-container">
      <a href="https://github.com/onurkantarci/hyrule-jobs"
        ><img src="../../public/hyruljobs.png"
      /></a>

      <p class="info-text">Hyrule Jobs</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const lights = ref<boolean>(false);

const turnOnLights = () => {
  lights.value = !lights.value;
};
</script>

<style scoped>
.title-of-projects {
  font-family: "Oswald", sans-serif;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #00eaffa1;
}
.info-text {
  font-family: "Oswald", sans-serif;
}

img {
  opacity: 0.8;
  max-width: 100%;
  max-height: 150px;
  display: block;
  margin: auto;
}
.info-boxes {
  background-color: #15354a;
  border: 1px solid rgba(52, 152, 219, 0.4);
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  border-radius: 50px;
  margin: 50px;
}
.info-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #22587d;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.4);
  border: 2px solid #2980b9;
  width: 250px;
  height: 200px;
  margin: 20px;
  overflow: hidden;
}
.info-container:hover {
  box-shadow: 0 8px 16px rgba(52, 152, 219, 0.8);
  transform: translateY(-2px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tip {
  position: absolute;
  font-family: "Oswald", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.sixtyfour {
  font-family: "Sixtyfour", sans-serif;
}
.description {
  font-family: "Oswald", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
  animation: pulsetext 1s infinite alternate;
}

@keyframes pulsetext {
  0% {
    color: rgba(255, 255, 255, 0.5);
  }
  100% {
    color: rgb(255, 255, 255);
  }
}
.lines-down {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.lines-left {
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
}

.pulse-animation {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 50px;
  z-index: 1;
  border-radius: 50%;
  border: 1px solid rgb(27, 26, 26, 0.2);
  animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  0% {
    box-shadow: 10px 10px 10px rgba(40, 115, 196, 0.5);
  }
  100% {
    box-shadow: 10px 10px 10px rgb(40, 102, 196);
  }
}

h3 {
  color: #3ca0de;
  font-family: "Sixtyfour", sans-serif;
  font-size: 12px;
}

h1,
h2 {
  color: #287ec4;
  margin: 0;
}
</style>
