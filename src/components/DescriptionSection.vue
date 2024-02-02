<template>
  <div class="whole-container">
    <div class="description">
      <p>
        Hey! I'm <span class="bold">ONUR</span>, a Frontend Developer from
        <span class="bold">KOSOVO</span>.
      </p>
      <p>Currently I'm doing a lawyer internship in Ankara/Turkey,</p>
      <p>which also I'm working on Frontend projects at the same time.</p>
    </div>
    <h2 class="title-of-projects">Technologies I have used so far:</h2>
    <div class="technologies-container">
      <h2 class="technologies">HTML</h2>
      <h2 class="technologies">CSS</h2>
      <h2 class="technologies">JAVASCRIPT</h2>
      <h2 class="technologies">TYPESCRIPT</h2>
      <h2 class="technologies">REACT</h2>
      <h2 class="technologies">VUEJS</h2>
    </div>

    <h2 class="title-of-projects">Some of the Projects I worked on:</h2>

    <div class="info-boxes">
      <div class="info-container">
        <a href="https://github.com/onurkantarci/watchup" target="_blank">
          <div class="info-container">
            <img src="../../public/Trending Movies.png" />

            <p class="info-text">WatchUp</p>
          </div>
        </a>
      </div>
      <div class="info-container">
        <a href="https://github.com/onurkantarci/todolist-vue" target="_blank">
          <div class="info-container">
            <img src="../../public/TodoListPage.png" />

            <p class="info-text">TODO List</p>
          </div>
        </a>
      </div>
      <div class="info-container">
        <a href="https://github.com/onurkantarci/hyrule-jobs" target="_blank">
          <div class="info-container">
            <img src="../../public/hyruljobs.png" />

            <p class="info-text">Hyrule Jobs</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technologies-container {
  display: flex;
  justify-content: center;
  gap: 13px;
}
.technologies {
  font-family: "Oswald", sans-serif;
  display: flex;
  justify-content: center;
  color: #ffffffcf;
  margin-top: 20px;
  font-size: 20px;
}
.whole-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
}
.title-of-projects {
  font-family: "Oswald", sans-serif;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #00eaffa1;
  padding: 3px;
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
  padding: 10px;
  background-color: #15354a;
  border: 1px solid rgba(52, 152, 219, 0.4);
  display: flex;
  justify-content: space-around;
  border-radius: 50px;
  margin: 22px 50px 22px 50px;
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
.bold {
  font-weight: bold;
}
.description {
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
  color: white;
  margin-bottom: 40px;
  font-size: 18px;
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

@media (max-width: 600px) {
  .title-of-projects {
    font-size: 18px;
  }
  .technologies {
    font-size: 16px;
    margin-top: 15px;
  }

  .technologies-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .info-container {
    padding: 30px;
    width: 120px;
    height: 100px;
  }
  .info-boxes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .whole-container {
    padding: 10px;
  }
}
</style>
