import React, { Suspense , useEffect , useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF , Preload} from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      {/* Your 3D model and lights go here */}
      <spotLight position={[-20 , 50 , 10]} 
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <primitive object={scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0 , -3 , -2.2] : [0, -4.25, -2]} rotation={[-0.01, -0.3, -0.15]} />
      <pointLight  intensity={1} />
      <hemisphereLight intensity={0.35} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile , setIsMobile ] = useState(false);
  useEffect(() =>{
    //event Listner screen size <= 500(moblie screen)
    const mediaQuery = window.matchMedia("(max-width: 500px)"); 
    setIsMobile(mediaQuery.matches); //set Initial val of var isMoblie
    const handleMediaQueryChange = (event) => { //define callback for changes to madia query
      setIsMobile(event.matches);
    }
    //Add callback as listners -- || --
    mediaQuery.addEventListener("change" , handleMediaQueryChange); // Corrected misspelling
    return() => {
      mediaQuery.removeEventListener("change" , handleMediaQueryChange); // Corrected misspelling
    }
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
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
