import './ThreeBackground.css';
import React, { useRef, useEffect } from 'react';
import { useGLTF} from '@react-three/drei';
import { useFrame, useThree, Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function Model() {
  const three_canvas = useRef(null);
  const { scene, animations } = useGLTF('./scenedimon.glb');
  const mixer = useRef(new THREE.AnimationMixer(null));
  const cameraRef = useRef();
  const { set, size } = useThree();
  const initialRotation = useRef(new THREE.Euler());
  const initialAspect = useRef(size.width / size.height); 

  useEffect(() => {
    scene.traverse(child => {
      if (child instanceof THREE.PerspectiveCamera && child.name === "PerspectiveCamera") {
        cameraRef.current = child;
        initialRotation.current = child.rotation.clone();
        updateCamera(size);
        set({ camera: child });
      }
    });
    mixer.current = new THREE.AnimationMixer(scene);
    const action = mixer.current.clipAction(animations[0]);
    action.play();
  }, [scene, set, size, animations]);

  useEffect(() => {
    const handleResize = () => {
      updateCamera(size); 
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      mixer.current?.stopAllAction(); 
    };
  }, [size]); 

  const updateCamera = ({width, height}) => {
    if (cameraRef.current) {
      const newAspect = width / height;
      cameraRef.current.aspect = newAspect;
      cameraRef.current.fov = adjustFOVForAspectRatio(newAspect);
      cameraRef.current.updateProjectionMatrix();
    }
  };

  const adjustFOVForAspectRatio = (newAspect) => {
    const initialFOV = 21.36; 
    return initialFOV * (initialAspect.current / newAspect);
  };

  function getScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
  }

  useFrame((state, delta) => {
    const scrollY = getScrollPercent() / 100;
    const clipDuration = animations[0].duration;
    mixer.current.setTime(clipDuration * scrollY * 0.999);
    mixer.current.update(delta);
  });

  return (
    <primitive object={scene} />
  );
}

export default function ModelWrapper() {
  return (
    <div id="three_canvas">
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
}