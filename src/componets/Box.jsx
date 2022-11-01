import React from 'react';
import { Mesh } from 'three';

export default function() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="blue"/>
    </mesh>
  )
}