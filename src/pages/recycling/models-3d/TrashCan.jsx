/* eslint-disable react/no-unknown-property */
import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { RepeatWrapping } from "three";


const TrashCan = (props) => {
    const { nodes, materials } = useGLTF("models-3d/trash-can.glb");
    const PATH = useMemo(() => "materials/floor/patterned_brick_floor_", []);
    // eslint-disable-next-line no-unused-vars
    const floorTexture = useTexture({
        map: PATH + "diff_1k.jpg",
        // displacementMap: PATH + "disp_1k.png",
        normalMap: PATH + "nor_gl_1k.jpg",
        roughnessMap: PATH + "rough_1k.jpg",
        ambientOcclusionMap: PATH + "ao_1k.jpg",
    });

    Object.keys(floorTexture).map((key) => {
        floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping;
        floorTexture[key].repeat.set(2, 2);
    }
    );

    // floorTexture.map.wrapS = RepeatWrapping;
    // floorTexture.map.wrapT = RepeatWrapping;

    // floorTexture.normalMap.wrapS = RepeatWrapping;
    // floorTexture.normalMap.wrapT = RepeatWrapping;

    // floorTexture.roughnessMap.wrapS = RepeatWrapping;
    // floorTexture.roughnessMap.wrapT = RepeatWrapping;

    // floorTexture.ambientOcclusionMap.wrapS = RepeatWrapping;
    // floorTexture.ambientOcclusionMap.wrapT = RepeatWrapping;


    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="Tong_Sampah"
                    geometry={nodes.Tong_Sampah.geometry}
                    material={materials.Texture}
                />
                <mesh rotation-x={Math.PI * 0.5}>
                    <boxGeometry args={[10, 10, 0.1]}>
                    </boxGeometry>
                    <meshStandardMaterial
                        // map={floorTexture.map}
                        // normalMap={floorTexture.normalMap}
                        // roughnessMap={floorTexture.roughnessMap}
                        // ambientOcclusionMap={floorTexture.ambientOcclusionMap}
                        // displacementMap={floorTexture.displacementMap}
                        {...floorTexture}
                    />
                </mesh>
            </group>
        </group>
    );
}

export default TrashCan;

useGLTF.preload("models-3d/trash-can.glb");