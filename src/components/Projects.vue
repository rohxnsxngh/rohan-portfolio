<template>
  <div class="backdrop-blur-sm">
    <h2
      class="text-center tablet:text-left shadow-sky-800 shadow-sm text-4xl tablet:text-6xl text-regal-blue font-bold mb-5"
    >
      Projects
    </h2>
    <div class="carousel w-full backdrop-blur-sm">
      <div id="slide1" class="carousel-item relative w-full">
        <div>
          <img class="w-84" src="../assets/turtle-robotics-home.gif" />
          <div>
            <h1
              class="shadow-sky-800 shadow-sm my-4 text-xl text-regal-blue tablet:text-2xl text-regal-blue"
            >
              Texas A&M Robotics and Leadership Experience Homepage:
            </h1>
            <p class="text-sm font-semibold tablet:text-md font-semibold">
              Texas A&M Robotics and Leadership Experience (TURTLE) homepage
              which was built with VueJS, Tailwind, and utlized the Texas A&M
              REST API. This webpage is used by the Texas A&M Robotics team to
              display projects, contacts, announcements, and recruit new members
              to the organization. It is currently being hosted internally by
              Texas A&M under their clubs & organization subsection.
            </p>
          </div>
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a
            href="#slide4"
            class="btn btn-xs btn-circle mb-96 tablet:btn tablet:btn-circle tablet:bg-regal-blue tablet:text-white tablet:mb-32"
            >❮</a
          >
          <a
            href="#slide2"
            class="btn btn-xs btn-circle mb-96 tablet:btn tablet:btn-circle tablet:bg-regal-blue tablet:text-white tablet:mb-32"
            >❯</a
          >
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <div>
          <img class="w-84" src="../assets/three-portfolio.gif" />
          <div>
            <h1
              class="shadow-sky-800 shadow-sm my-4 text-xl text-regal-blue tablet:text-2xl text-regal-blue"
            >
              Experimental Portfolio Built with ThreeJS, Vue, Vite, and AmmoJS
            </h1>
            <p class="text-sm font-semibold tablet:text-md font-semibold">
              Personal webpage built in ThreeJS, VueJS, Vite, and AmmoJS. The
              idea was to use WebGL and create an infinite plane with
              waternormals being reflected throughout. Next, utilize first
              person controls and AmmoJS which is a physics engine to allow the
              user to interact and explore its environment. Using lighting and
              fog effects, among other easter eggs, the webpage should slowly
              lead the user letting them discover each part of the portfolio.
              This short clip doesn't do it justice so go to my github and check
              it out! This project is still in development.
            </p>
          </div>
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide1" class="btn btn-xs btn-circle mb-96 tablet:btn tablet:btn-circle tablet:bg-regal-blue tablet:text-white tablet:mb-32"
            >❮</a
          >
          <a href="#slide3" class="btn btn-xs btn-circle mb-96 tablet:btn tablet:btn-circle tablet:bg-regal-blue tablet:text-white tablet:mb-32"
            >❯</a
          >
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <div>
          <img src="../assets/comingSoon.jpg" class="w-full" />
          <!-- <div>Slide3</div> -->
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide2" class="btn btn-xs btn-circle mb-96 tablet:btn tablet:btn-circle tablet:bg-regal-blue tablet:text-white tablet:mb-32"
            >❮</a
          >
          <a href="#slide4" class="btn btn-xs btn-circle mb-96 tablet:btn tablet:btn-circle tablet:bg-regal-blue tablet:text-white tablet:mb-32"
            >❯</a
          >
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <div>
          <img src="../assets/comingSoon.jpg" class="w-full" />
          <!-- <div>Slide4</div> -->
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide3" class="btn btn-xs btn-circle mb-96 tablet:btn tablet:btn-circle tablet:bg-regal-blue tablet:text-white tablet:mb-32"
            >❮</a
          >
          <a href="#slide1" class="btn btn-xs btn-circle mb-96 tablet:btn tablet:btn-circle tablet:bg-regal-blue tablet:text-white tablet:mb-32"
            >❯</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
