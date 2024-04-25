import './ThreeBackground.css';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useEffect } from 'react';
import { render } from '@testing-library/react';

function ThreeBackground() {
  const three_canvas = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(21.30, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, powerPreference: "high-performance", antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMappingExposure = 1;
    renderer.domElement.style.pointerEvents = 'none'
    three_canvas.current.appendChild(renderer.domElement);



    let logoModel;
    let mixer;

    const loader = new GLTFLoader();

    loader.load('./scene.glb', function (gltf) {
      const model = gltf.scene;
      mixer = new THREE.AnimationMixer(model);
      mixer.update()


      gltf.animations.forEach((clip) => {
        clip.loop = false;
        const action = mixer.clipAction(clip);
        action.clampWhenFinished = true; // Keep the animation at its last frame when completed
        mixer.clipAction(clip).play();
        mixer.update(0); // Update animation
      });

      scene.add(model);

      const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();

    }, undefined, function (error) {
      console.error(error);
    });


    camera.position.x = 1.06;
    camera.position.z = 5.7;
    camera.position.y = 5.403;
    //camera.position.z = 50;
    //camera.position.y = -5;


    function getScrollPercent() {
      var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
      return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    }

    function updateAnimation() {
      const scrollFraction = getScrollPercent() / 100;
      if (mixer) {
        console.log(scrollFraction)
        if (scrollFraction > 0.95) {
          mixer.setTime(mixer._actions[0]._clip.duration * 0.99); // Set the animation time based on scroll
        } else {
          mixer.setTime(mixer._actions[0]._clip.duration * (scrollFraction)); // Set the animation time based on scroll
        }
        mixer.update(0.001); // Update animation
      }
    }

    window.addEventListener('scroll', updateAnimation);



    function animate() {
      requestAnimationFrame(animate);
      // Perform any desired animation or updates here
      renderer.render(scene, camera);
    }

    animate();
  }, [])
  return (
    <div ref={three_canvas} id='three_canvas'></div>
  );
}
export default ThreeBackground;



/*
*/