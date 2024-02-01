<template>
  <div class="lines-down">
    <h1>|</h1>
    <h1>|</h1>
    <h1>|</h1>
  </div>
  <div
    @click="turnOnLights"
    :class="{ 'pulse-animation': lights }"
    class="lines-left"
  >
    <h2>|</h2>
    <h3>|</h3>
    <h2>|</h2>
    <h3>|</h3>
    <h2>|</h2>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
const lights = ref(false);

const turnOnLights = () => {
  lights.value = !lights.value;
};
</script>

<style scoped>
.tip {
  position: absolute;
  font-family: "Oswald", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
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
