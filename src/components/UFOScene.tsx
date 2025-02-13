"use client";

import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function UFOScene() {
  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('ufo-scene-container').appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Load UFO model
    const loader = new GLTFLoader();
    let ufo;
    loader.load('/models/ufo/scene.gltf', (gltf) => {
      ufo = gltf.scene;
      ufo.position.set(0, 2, -5); // Adjust position as needed
      scene.add(ufo);
    });

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      if (ufo) {
        ufo.rotation.y += 0.01; // Rotate UFO
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Clean up on unmount
    return () => {
      renderer.dispose();
      document.getElementById('ufo-scene-container').removeChild(renderer.domElement);
    };
  }, []);

  return <div id="ufo-scene-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
}
