import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  let scale, position;
  if (isMobile) {
    scale = 0.7;
    position = [0, -3, -2.2];
  } else if (isTablet) {
    scale = 0.75;
    position = [0, -4, -2.5];
  } else {
    scale = 0.75;
    position = [0, -4.25, -2];
  }

  return (
    <mesh>
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <primitive 
        object={scene} 
        scale={scale} 
        position={position} 
        rotation={[-0.01, -0.3, -0.15]} 
      />
      <pointLight intensity={1} />
      <hemisphereLight intensity={0.35} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 500) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (width <= 768) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas 
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
        /> 
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
