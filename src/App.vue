<template>
  <div class="block">
    <MenuPage />
    <section class="block section" id="home">
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
      <Projects />
    </section>
    <section class="block section" id="skills">
      <Skills />
    </section>
    <section class="block section" id="contact">
      <Contact />
    </section>
  </div>
</template>

<script>
import ExperienceTesla from "./components/ExperienceTesla.vue";
import Contact from "./components/Contact.vue";
import Skills from "./components/Skill.vue";
import Home from "./components/Home.vue";
import MenuPage from "./components/MenuPage.vue";
import Projects from "./components/Projects.vue";
import ExperienceRiver from "./components/ExperienceRiver.vue";
import About from "./components/About.vue";

export default {
  name: "home",
  components: {
    ExperienceTesla,
    Projects,
    ExperienceRiver,
    Contact,
    Skills,
    About,
    Home,
    MenuPage,
  },
};
</script>
