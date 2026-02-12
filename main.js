import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100);

camera.position.z = 5;

const light = new THREE.DirectionalLight("white",2);
light.position.set(2,2,2);
scene.add(light);
// const material = new THREE.MeshStandardMaterial();

// const light2 = new THREE.DirectionalLight("red",3);
// light2.position.set(-2,-2,-2);
// scene.add(light2);

const geometry = new THREE.SphereGeometry(1,40,40);
const material = new THREE.MeshPhysicalMaterial();
// material.metalness = 1;
// material.roughness = 0;
// material.clearcoat = 1;
const mesh = new THREE.Mesh(geometry,material);

mesh.rotation.y = 0.01;

scene.add(mesh);


const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);

const controls = new OrbitControls(camera,renderer.domElement);
function animate(){
    window.requestAnimationFrame(animate);
    controls.update();
    // mesh.rotation.y += 0.1;
    renderer.render(scene,camera);
}
animate();