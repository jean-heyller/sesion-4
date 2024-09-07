/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Header from "../../components/Header/Header";
import "./Recycling.css";
import TrashCan from "./models-3d/TrashCan";
import { OrbitControls } from "@react-three/drei";



const RecyCling = () => {
  return (
    <>
      <Header />
      <div className="container">

        <Canvas>
          <OrbitControls autoRotate={false}  autoRotateSpeed={10}/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={5} />
          <TrashCan />
        </Canvas>

      </div>
    </>
  );
};

export default RecyCling;
