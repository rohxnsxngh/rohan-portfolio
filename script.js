import * as THREE from "three";
import { gsap } from "gsap";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { LuminosityShader } from "three/examples/jsm/shaders/LuminosityShader.js";
import { SobelOperatorShader } from "three/examples/jsm/shaders/SobelOperatorShader.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const objectsDistance = 4;

// Material
const material = new THREE.MeshPhongMaterial({ color: "#ffeded" });

// Meshes
const mesh1 = new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.25, 125, 15, 2, 7), material);
const mesh2 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.4, 0.35, 100, 16),material);
const mesh3 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.2, 0.35, 100, 16),material);
const mesh4 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.6, 55, 8,9,3),material);
const mesh5 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 16, 60), material);
const mesh6 = new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.5, 77, 8,20,1),material);
const mesh7 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.3, 0.08, 70, 5, 17.5,12),material);


mesh4.position.y = -objectsDistance * 0;
mesh2.position.y = -objectsDistance * 1.2;
mesh3.position.y = -objectsDistance * 2.2;
mesh5.position.y = -objectsDistance * 2.2;
mesh6.position.y = -objectsDistance * 3;
mesh1.position.y = -objectsDistance * 4.5;
mesh7.position.y = -objectsDistance * 3.5;

mesh1.position.x = 0;
mesh2.position.x = 1;
mesh3.position.x = 2;
mesh4.position.x = 0;
mesh5.position.x = 2;
mesh6.position.x = -0.75;
mesh7.position.x = 2;

const sectionMeshes = [mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7];

scene.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7);

//sprite texture
// const sprite = new THREE.TextureLoader().load("./src/assets/dust.png");

/**
 * Particles
 */
// Geometry
const particlesCount = 1500;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount; i++) {
  positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 1] =
    objectsDistance * 0.5 -
    Math.random() * objectsDistance * sectionMeshes.length;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

// Material
const particlesMaterial = new THREE.PointsMaterial({
  // color: '#ffeded',
  sizeAttenuation: true,
  size: 0.03,
  transparent: true,
  alphaTest: 0.5,
});

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
directionalLight.position.set(1, 1, 0);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  composer.setSize(window.innerWidth, window.innerHeight);

  effectSobel.uniforms["resolution"].value.x =
    window.innerWidth * window.devicePixelRatio;
  effectSobel.uniforms["resolution"].value.y =
    window.innerHeight * window.devicePixelRatio;
});

/**
 * Scroll
 */
let scrollY = window.scrollY;
let currentSection = 0;

window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
  const newSection = Math.round(scrollY / sizes.height);

  if (newSection != currentSection) {
    currentSection = newSection;

    gsap.to(sectionMeshes[currentSection].rotation, {
      duration: 1.5,
      ease: "power2.inOut",
      x: "+=6",
      y: "+=3",
    });
  }
});

/**
 * Cursor
 */
const cursor = {};
cursor.x = 0;
cursor.y = 0;

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
});

/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group();
scene.add(cameraGroup);

// Base camera
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 6;
cameraGroup.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: false,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// postprocessing

const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// color to grayscale conversion

const effectGrayScale = new ShaderPass(LuminosityShader);
composer.addPass(effectGrayScale);

// Sobel operator

const effectSobel = new ShaderPass(SobelOperatorShader);
effectSobel.uniforms["resolution"].value.x =
  window.innerWidth * window.devicePixelRatio;
effectSobel.uniforms["resolution"].value.y =
  window.innerHeight * window.devicePixelRatio;
composer.addPass(effectSobel);

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  // Animate meshes
  for (const mesh of sectionMeshes) {
    mesh.rotation.x += deltaTime * 0.1;
    mesh.rotation.y += deltaTime * 0.12;
  }

  // Animate camera
  camera.position.y = (-scrollY / sizes.height) * objectsDistance;

  const parallaxX = cursor.x * 0.5;
  const parallaxY = -cursor.y * 0.5;

  cameraGroup.position.x +=
    (parallaxX - cameraGroup.position.x) * 10 * deltaTime;
  cameraGroup.position.y +=
    (parallaxY - cameraGroup.position.y) * 10 * deltaTime;

  // Render
//   renderer.render(scene, camera);
    composer.render();

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
