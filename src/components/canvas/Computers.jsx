import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import CanvasLoader from "../Loader";

const Computers = ({ models, isMobile, initialRotation }) => {
  if (!models || models.length === 0) return null;

  return (
    <>
      {models.map((model, index) => (
        <mesh key={index} rotation={initialRotation}>
          <hemisphereLight intensity={0.15} groundColor='black' />
          <pointLight intensity={10} />
          <primitive
            object={model.scene}
            scale={isMobile ? 1 : 1.5}
            position={isMobile ? [0, -2.8, 0] : [0, -4, 0]}
          />
        </mesh>
      ))}
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [initialRotation, setInitialRotation] = useState([0, Math.PI / 2.5, 0]); // Set initial rotation here
  const [models, setModels] = useState([]);

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
    const modelUrls = [
      "./smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf",
      // Add more model URLs as needed
    ];

    Promise.all(modelUrls.map(url => new Promise((resolve, reject) => {
      loader.load(url,
        (gltf) => {
          resolve(gltf);
        },
        undefined,
        (error) => {
          reject(error);
        }
      );
    })))
    .then((models) => {
      setModels(models);
    })
    .catch((error) => {
      console.error("Error loading GLTF models", error);
    });
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
        <Computers models={models} isMobile={isMobile} initialRotation={initialRotation} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
