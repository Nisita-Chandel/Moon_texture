import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100);

camera.position.z = 6;


const geometry = new THREE.BoxGeometry(1,4,3);
const material = new THREE.MeshBasicMaterial({color:"red"});
const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);


const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
// controls.dampingFactor = 0.4;
controls.minAzimuthAngle = Math.PI/4;
controls.maxAzimuthAngle = Math.PI/4;

controls.minPolarAngle = Math.PI/4;
controls.maxPolarAngle = Math.PI/1.25;

controls.maxDistance = 2;
controls.maxDistance = 10;


const mouse = {
    x : 0,
    y : 0,

}
window.addEventListener("mousemove",function(e){
    mouse.x = e.clientX / this.window.innerWidth;
    mouse.y = e.clientY / this.window.innerHeight;
})


window.addEventListener("resize",function(e){
camera.aspect = window.innerWidth/ this.window.innerHeight;
renderer.setSize(this.window.innerWidth,window.innerHeight);
camera.updateProjectionMatrix();
})

function animate(){
    window.requestAnimationFrame(animate);
    controls.update();
    mesh.lookAt(new THREE.Vector3(mouse.x - 0.5, -mouse.y + 0.5,0));
    // mesh.rotation.y += 0.1;
    renderer.render(scene,camera);
}
animate();