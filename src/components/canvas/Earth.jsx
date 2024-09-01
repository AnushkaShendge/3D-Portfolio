import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = ({ isMobile }) => {
  const { scene } = useGLTF('/planet/scene.gltf');
  return (
    <primitive
      object={scene}
      scale={isMobile ? [1.5, 1.5, 1.5] : [2.5, 2.5, 2.5]} // Adjust scale based on screen size
      position={isMobile ? [0, 0, 0] : [0, 0, 0]} // Adjust position if necessary
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen size is mobile (width <= 768px)
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Attach listener to monitor screen size changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: isMobile ? 60 : 45, near: 0.1, far: 200, position: isMobile ? [-3, 2, 5] : [-4, 3, 6] }} // Adjust camera settings based on screen size
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
