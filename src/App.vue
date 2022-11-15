<template>
  <div>
    <MenuPage />
    <section class="section" id="introduction">
      <Home />
      <br />
    </section>
    <section class="section" id="middle">
      <ExperienceTesla />
    </section>
    <section class="section" id="middle">
      <ExperienceTesla />
    </section>
    <section class="section" id="middle">
      <ExperienceTesla />
    </section>
    <section class="section" id="middle-second">
      <Skills />
    </section>
    <section class="section" id="conclusion">
      <Contact />
    </section>
  </div>
</template>

<style scoped>
p {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 20px;
}

#introduction {
  overflow: auto;
}

#middle {
  overflow: visible;
}

#middle-second {
  overflow: auto;
}

#conclusion {
  overflow: hidden;
}

#profile {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  float: left;
  margin-bottom: 25px;
}

img:hover {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.67);
  -moz-box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.67);
  box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.67);
}

::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1c1818;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1c1818;
}
</style>

<script>
import ExperienceTesla from "./components/ExperienceTesla.vue";
import Contact from "./components/Contact.vue";
import Skills from "./components/Skill.vue";
import Home from "./components/Home.vue";
import MenuPage from "./components/MenuPage.vue";

export default {
  name: "home",
  components: {
    ExperienceTesla,
    Contact,
    Skills,
    Home,
    MenuPage,
  },
};
</script>
