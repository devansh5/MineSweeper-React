import React from 'react';
import {Canvas} from 'react-three-fiber';
import Box from './components/Mesh';
function App() {
  const style={
    width:"100%",
    height:"800px",
    backgroundColor:"black"
  }
  return (
    <Canvas style={style}>
    <ambientLight/>
    <pointLight position={[-1,2, 4]} />
    <Box position={[0, 0, 0]} />
    
 </Canvas>
  )
}
export default App;