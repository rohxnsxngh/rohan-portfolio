<template>
  <div class="block">
    <MenuPage />
    <section class="section" id="home">
      <Home />
      <br />
    </section>
    <section class="block section" id="about">
      <About />
    </section>
    <section class="block section" id="river">
      <ExperienceRiver />
    </section>
    <section class="block section" id="tesla">
      <ExperienceTesla />
    </section>
    <section class="block section" id="turtle">
      <ExperienceTurtle />
    </section>
    <section class="block section" id="skills">
      <Skills />
    </section>
    <section class="block section" id="contact">
      <Contact />
    </section>
  </div>
</template>

<!-- <style scoped>
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
</style> -->

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
