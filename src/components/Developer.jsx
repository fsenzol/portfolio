/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer, SSAO } from '@react-three/postprocessing'

const Developer = ({animationName = 'victory', ...props}) => {
  const { nodes, materials } = useGLTF('/models/developer.glb')
  const { animations: clapAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clapAnimation[0].name = 'clap';
  victoryAnimation[0].name = 'victory';
  
  // Reference to the group where the animation will be applied
  const groupRef = useRef();
  
  // Pass the animations and groupRef correctly to useAnimations

    const { actions } = useAnimations([idleAnimation[0], clapAnimation[0], saluteAnimation[0], victoryAnimation[0]], groupRef);

    // Ensure that `actions[animationName]` exists before playing

    useEffect(() => {
        if (actions[animationName]) {
            actions[animationName].reset().fadeIn(0.5).play();
          }
        
          return () => {
            if (actions[animationName]) {
              actions[animationName].fadeOut(0.5);
            }
          };
  }, [animationName]);

  return (
    <group {...props} dispose={null} ref={groupRef} rotation={[0, Math.PI / 1.9, 0]}>
        <EffectComposer enableNormalPass>
            <Bloom intensity={5} luminanceThreshold={0.1} luminanceSmoothing={5} />
        </EffectComposer>

      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Headwear.geometry}
        material={materials.Wolf3D_Headwear}
        skeleton={nodes.Wolf3D_Headwear.skeleton}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        castShadow
        receiveShadow
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload('/models/developer.glb')

export default Developer