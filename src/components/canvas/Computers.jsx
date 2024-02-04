import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import CanvasLoader from "../Loader";

const Computers = ({ model, isMobile, initialRotation }) => {
  if (!model || isMobile) return null;

  return (
    <mesh rotation={initialRotation}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={10} />
      <primitive
        object={model.scene}
        scale={isMobile ? 1 : 1.5}
        position={isMobile ? [0, -2.8, 0] : [0, -4, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [initialRotation, setInitialRotation] = useState([0, Math.PI / 2.5, 0]); // Set initial rotation here
  const [model, setModel] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "./smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf",
      (gltf) => {
        setModel(gltf);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model", error);
      }
    );
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false} // Disable pan to prevent potential issues with touch events
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // Add touch event handlers to prevent default behavior
          onTouchStart={(event) => event.preventDefault()}
          onTouchMove={(event) => event.preventDefault()}
          onTouchEnd={(event) => event.preventDefault()}
        />
        <Computers model={model} isMobile={isMobile} initialRotation={initialRotation} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
