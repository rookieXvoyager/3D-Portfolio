import { useEffect } from 'react';
import React from 'react'
import {Environment,Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { color } from 'three/tsl';
import * as THREE from 'three';
// Load a .glb model (GLTF format)
//  add basic lighting
// Applies environment reflections for realism
//  wrap the model in  a floating animation
//  optionally tweakl the material
// diable zoom 
const TechIcon = ({model}) => {
  const scene = useGLTF(model.modelPath);
  useEffect(()=>{
    if(model.name==='Interactive Developer')
    {
      scene.scene.traverse((child)=>{
        if(child.isMesh && child.name ==='Object_5'){
          child.material =new THREE.MeshStandardMaterial({color:'white'})
        }
      })
    }
  },[scene])

  useEffect(()=>{
    if(model.name==='Java Developer')
    {
      scene.scene.traverse((child)=>{
        if(child.isMesh && child.name ==='Object_5'){
          child.material =new THREE.MeshStandardMaterial({color:'red'})
        }
      })
    }
  },[scene])

  return (
    // use a canvas to deploy the 3d model
    <Canvas>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[5,5,5]} intensity={1}/>
      <Environment preset="city"/>
      <OrbitControls enabledZoom={false}/>
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} model={model.rotation}>
          <primitive object={scene.scene}/>
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon
