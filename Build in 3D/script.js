
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const canvas = document.querySelector('#world');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#070914');

const camera = new THREE.PerspectiveCamera(
  45, 1, 0.1, 100
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry = new THREE.IcosahedronGeometry(1.35, 1);

const material = new THREE.MeshStandardMaterial({
  color: '#00cfff',
  metalness: 0.7,
  roughness: 0.2,
  wireframe: true
});

const object = new THREE.Mesh(geometry, material);
scene.add(object);

const light = new THREE.PointLight('#00e5ff', 30);
light.position.set(3, 3, 4);
scene.add(light);

scene.add(new THREE.AmbientLight('#ffffff', 1.5));

function resize() {
  const width = canvas.clientWidth;
  const height = width * 0.85;

  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize);
resize();

canvas.addEventListener('pointermove', (event) => {
  const rect = canvas.getBoundingClientRect();

  object.rotation.y =
    ((event.clientX - rect.left) / rect.width - 0.5) * 2;

  object.rotation.x =
    ((event.clientY - rect.top) / rect.height - 0.5) * 2;
});

document.querySelector('#explore').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
  });
});

function animate() {
  requestAnimationFrame(animate);

  object.rotation.x += 0.003;
  object.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();
