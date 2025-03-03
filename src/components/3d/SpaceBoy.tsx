import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useGLTF } from "@react-three/drei"; // For GLTF model loading
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function SpaceBoyScene() {
  const canvasRef = useRef(null);
  const spaceBoyRef = useRef(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cameraRef2 = useRef<THREE.PerspectiveCamera | null>(null);
  const cameraRef3 = useRef<THREE.PerspectiveCamera | null>(null);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile screen width threshold
    };

    checkMobile();
    window.addEventListener("resize", checkMobile); // Update on resize

    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  return (
    <div ref={spaceBoyRef} style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ width: "100%", height: "100vh" }} ref={canvasRef}>
        <PerspectiveCamera ref = {cameraRef} makeDefault position={[0, 2, 10]} fov={75} />
        <PerspectiveCamera ref = {cameraRef2}  position={[0, 2, 4]} fov={75} />
        <PerspectiveCamera ref = {cameraRef3}  position={[0, 2, 10]} fov={75} />
        
        <SpaceBoyModel isMobile={isMobile} />
      </Canvas>
    </div>
  );
}

function SpaceBoyModel({ isMobile }: { isMobile: boolean }) {
  const { nodes, materials } = useGLTF('/models/space_boi/scene.gltf');
  const modelRef = useRef<THREE.Group | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x: mouseX, y: mouseY });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  // Rotation animation
  useEffect(() => {
    if (modelRef.current) {
      if (isMobile) {
        gsap.to(modelRef.current.rotation, {
          duration: 20,
          y: "+=6.28", // 360° rotation (2π radians)
          repeat: -1,
          ease: "none",
        });
      } else {
        gsap.to(modelRef.current.rotation, {
          duration: 0.5,
          x: mousePos.y * Math.PI / 16,
          y: mousePos.x * Math.PI,
          ease: "power1.out",
        });
      }
    }
  }, [mousePos, isMobile]);

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




useGLTF.preload('/models/space_boi/scene.gltf')

	
