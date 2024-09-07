/* eslint-disable react/no-unknown-property */
import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";


const TrashCan = (props) => {
    const { nodes, materials } = useGLTF("models-3d/trash-can.glb");
    const PATH = useMemo(() => "materials/floor/patterned_brick_floor_", []);
    // eslint-disable-next-line no-unused-vars
    const floorTexture = useTexture({
        map: PATH + "diff_1k.jpg",
        displacementMap: PATH + "disp_1k.png",
        normalMap: PATH + "nor_gl_1k.jpg",
        roughnessMap: PATH + "rough_1k.jpg",
        ambientOcclusionMap: PATH + "ao_1k.jpg",
    });

    console.log(floorTexture);

    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="Tong_Sampah"
                    geometry={nodes.Tong_Sampah.geometry}
                    material={materials.Texture}
                />
                <mesh rotation-x={Math.PI * 0.5}>
                    <boxGeometry args={[2,2,0.1]}>
                    </boxGeometry>
                    <meshStandardMaterial color="green" />
                </mesh>
            </group>
        </group>
    );
}

export default TrashCan;

useGLTF.preload("models-3d/trash-can.glb");