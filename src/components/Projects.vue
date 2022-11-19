<template>
  <div class="backdrop-blur-sm">
    <h2
      class="text-center tablet:text-left shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"
    >
      Projects
    </h2>
    <!-- Robotics Homepage -->
    <div id="turtle" class="relative w-full my-20">
      <div>
        <div class="my-6">
          <h1
            class="font-bold shadow-sky-800 shadow-sm my-4 text-xl text-regal-blue tablet:text-2xl text-regal-blue"
          >
            Texas A&M Robotics and Leadership Experience Homepage:
          </h1>
          <p class="text-sm font-semibold tablet:text-xl font-semibold">
            Texas A&M Robotics and Leadership Experience (TURTLE) homepage which
            was built with VueJS, Tailwind, and utlized the Texas A&M REST API.
            This webpage is used by the Texas A&M Robotics team to display
            projects, contacts, announcements, and recruit new members to the
            organization. It is currently being hosted internally by Texas A&M
            under their clubs & organization subsection.
          </p>
        </div>
        <img class="w-84" src="../assets/turtle-robotics-home.gif" />
      </div>
    </div>
    <!-- Three Portfolio Experiment -->
    <div id="three-portfolio" class="relative w-full my-20">
      <div>
        <div class="my-6">
          <h1
            class="font-bold shadow-sky-800 shadow-sm my-4 text-xl text-regal-blue tablet:text-2xl text-regal-blue"
          >
            Experimental Portfolio Built with ThreeJS, Vue, Vite, and AmmoJS
          </h1>
          <p class="text-sm font-semibold tablet:text-xl font-semibold">
            Personal webpage built in ThreeJS, VueJS, Vite, and AmmoJS. The idea
            was to use WebGL and create an infinite plane with waternormals
            being reflected throughout. Next, utilize first person controls and
            AmmoJS which is a physics engine to allow the user to interact and
            explore its environment. Using lighting and fog effects, among other
            easter eggs, the webpage should slowly lead the user letting them
            discover each part of the portfolio. This short clip doesn't do it
            justice so go to my github and check it out! This project is still
            in development.
          </p>
        </div>
        <img class="w-84" src="../assets/three-portfolio.gif" />
      </div>
    </div>
    <div id="strandbeest" class="relative w-full my-20">
      <div>
        <div class="my-6">
          <h1
            class="font-build shadow-sky-800 shadow-sm my-4 text-xl text-regal-blue tablet:text-2xl text-regal-blue"
          >
            🚧 Mechanical Strandbeest Kinematics Experiment Coming Soon 🚧:
          </h1>
          <p class="text-sm font-semibold tablet:text-md font-semibold"></p>
        </div>
        <!-- <div class="tablet:flex">
          <img class="w-96" src="../assets/strandBeestLegAssemb.png" />
          <img class="w-96" src="../assets/strandBeestElectronicDiagram.jpg" />
          <img class="w-96" src="../assets/strandBeestExample.jpg" />
          <video class="w-96">
            <source
              src="../assets/InitialLegAssembly100rpm.mp4"
              type="video/mp4"
            />
          </video>
        </div> -->
      </div>
    </div>
  </div>
</template>
