import React, { useRef, useEffect, useFrame } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useFBX } from '@react-three/drei';
import Scene from '../../public/Scene';



export default function Spaceman() {
  return (
    <div className='flex justify-center items-center absolute inset-0 z-50 h-screen w-screen'>
      <Canvas className='flex absolute left-[30%] w-screen h-screen' camera={{ fov: 75, position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} color='#008cab' />
        <pointLight position={[0, 5, 0]} color='#008cab' intensity={1.5} distance={10} decay={2} />
        <directionalLight position={[0, 5, -10]} intensity={1} color="#008cab" />
        <spotLight position={[0, 5, -10]} angle={0.3} penumbra={0.5} intensity={1.5} color="#008cab" />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
