<template>
  <div class="block">
    <MenuPage />
    <section class="section" id="introduction">
      <Home />
      <br />
    </section>
    <section class="section" id="introduction">
      <About />
    </section>
    <section class="section" id="middle">
      <ExperienceRiver />
    </section>
    <section class="section" id="middle">
      <ExperienceTesla />
    </section>
    <section class="section" id="middle">
      <ExperienceTurtle />
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
import ExperienceTurtle from "./components/ExperienceTurtle.vue";
import ExperienceRiver from "./components/ExperienceRiver.vue";
import About from "./components/About.vue";

export default {
  name: "home",
  components: {
    ExperienceTesla,
    ExperienceTurtle,
    ExperienceRiver,
    Contact,
    Skills,
    About,
    Home,
    MenuPage,
  },
};
</script>
