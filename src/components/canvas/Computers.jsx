import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";
const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    // when creating 3js elements we are not starting with div but rather than we are going to start with mesh
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}></pointLight>
      <spotLight position={[-20,50,10]}></spotLight>
      <primitive object={computer.scene} scale={ isMobile?0.4:0.75} 
      position={isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}/>
    </mesh>
  );
};

const ComputerCanvas = () => {
  const   [isMobile, setIsMobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia('max-width:500px ');
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
    
  },[])
  return (
    <Canvas
      frameloop="demand"
      
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI / 2}
        ></OrbitControls>

        <Computers isMobile={isMobile}></Computers>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
