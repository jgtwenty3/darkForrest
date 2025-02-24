import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"; // For GLTF model loading
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function SpaceBoyScene() {
  const canvasRef = useRef(null);
  const spaceBoyRef = useRef(null);
  
  return (
    <div ref = {spaceBoyRef} style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ width: "100%", height: "100vh" }} ref ={canvasRef}>
        <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={75} />
        <SpaceBoyModel />
      </Canvas>
          </div>
  );
}

function SpaceBoyModel() {
  const { nodes, materials } = useGLTF('/models/space_boi/scene.gltf'); // Load GLTF model
  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (modelRef.current){
    gsap.to(modelRef.current.rotation, {
      duration: 30,
      y: "+=6.2832", // 2π to rotate 360 degrees
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }
  }, [nodes]);

  return (
    <group dispose={null} ref ={modelRef}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.body_Material001_0 as THREE.Mesh).geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.body_Material002_0 as THREE.Mesh).geometry}
            material={materials['Material.002']}
          />
        </group>
        <group position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Sphere002_Material001_0 as THREE.Mesh).geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Sphere002_Material002_0 as THREE.Mesh).geometry}
            material={materials['Material.002']}
          />
        </group>
        <group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Sphere007_Material001_0 as THREE.Mesh).geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Sphere007_Material002_0 as THREE.Mesh).geometry}
            material={materials['Material.002']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.waves_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.waves1_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.waves2_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.particles_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere_Material001_0 as THREE.Mesh).geometry}
          material={materials['Material.001']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere001_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere004_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere005_Material001_0 as THREE.Mesh).geometry}
          material={materials['Material.001']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere006_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere009_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere010_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere011_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube_Material001_0 as THREE.Mesh).geometry}
          material={materials['Material.001']}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere003_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere008_Material002_0 as THREE.Mesh).geometry}
          material={materials['Material.002']}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/space_boi.scene.gltf')

	
