import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import * as THREE from "three";
import CameraController from "./Camera/CameraController";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Canvas shadows dpr={window.devicePixelRatio}>
          <CameraController />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default App;
