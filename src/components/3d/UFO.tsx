"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function UFOScene() {
  const canvasRef = useRef(null);
  const ufoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ufoRef.current) {
      gsap.to(ufoRef.current, {
        x: "random(-200, 200)",
        y: "random(-100, 100)",
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "power1.inOut",
      });
    }
  });

  return (
    <div ref={ufoRef} style={{ width: "100vw", height: "100vh" }}>
      <Canvas ref={canvasRef}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <spotLight position={[10, 10, 10]} intensity={2.5} angle={0.3} penumbra={1} />
        <spotLight position={[-10, -10, -10]} intensity={1.5} angle={0.3} penumbra={1} />
        <UFOModel />
      </Canvas>
    </div>
  );
}

// ✅ Move model loading and spinning logic inside a separate component
function UFOModel() {
  const modelRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);
  const pointLight1Ref = useRef<THREE.PointLight>(null);
  const pointLight2Ref = useRef<THREE.PointLight>(null);
  const pointLight3Ref = useRef<THREE.PointLight>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    const textureLoader = new THREE.TextureLoader();

    const baseColorMap = textureLoader.load(
      "/models/ufo/textures/material_baseColor.jpeg")
    
    const normalMap = textureLoader.load(
      "/models/ufo/textures/material_normal.png",
     )

    const metalRoughnessMap = textureLoader.load(
      "/models/ufo/textures/material_metallicRoughness.png")
  

    loader.load("/models/ufo/scene.gltf", (gltf) => {
      gltf.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshPhysicalMaterial({
            map: baseColorMap,
            normalMap: normalMap,
            metalnessMap: metalRoughnessMap,
            roughnessMap: metalRoughnessMap,
            metalness: 1,
            roughness: 1,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
          });
        }
      });

      setModel(gltf.scene);
    });
  }, []);

  // ✅ Rotate the UFO model inside `useFrame`
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.02; // Spin UFO
    }

  });

  return (
    <>
      {model ? (
        <>
          <primitive ref={modelRef} object={model} position={[0, 0, 0]} />
          
          {/* Point Lights Below UFO */}
          <pointLight ref={pointLight1Ref} intensity={10} distance={20} color="white" position={[0, -2, 0]} />
          <pointLight ref={pointLight2Ref} intensity={10} distance={20} color="white" position={[1, -2, 0]} />
          <pointLight ref={pointLight3Ref} intensity={10} distance={20} color="white" position={[-1, -2, 0]} />
          <pointLight ref={pointLight3Ref} intensity={10} distance={20} color="white" position={[-1, 2, 0]} />
          <pointLight ref={pointLight3Ref} intensity={10} distance={20} color="white" position={[-1, 2, 0]} />
          <pointLight ref={pointLight3Ref} intensity={10} distance={20} color="white" position={[-1, 2, 0]} />
        </>
      ) : null}
    </>
  );
}
