// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

//- 01 - styling base
// const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium"style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className="box box--large"style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>
// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

//- extra 01 - create component

// function Box({className, ...otherProps}){
//   return (
//     <div className={`box ${className}`} {...otherProps}>{content}</div>
//   )
// }

// function App(){
//   return (
//     <div>
//       <Box className="box--small" content="small lightblue box" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}/>
//       <Box className="box--medium" content="medium pink box" style={{backgroundColor: 'pink', fontStyle: 'italic'}}/>
//       <Box className="box--large" content="large orange box" style={{backgroundColor: 'orange', fontStyle: 'italic'}}/>
//     </div>
//   )
// }

//- extra 02 - add a size prop
function Box({className = '', style='', size, ...otherProps}){
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div className={`box ${className} ${sizeClassName}`} style={{fontStyle: 'italic', ...style}}  {...otherProps} />
  )
}

function App(){
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}> Small lightblue box</Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}> Medium pink box</Box>
      <Box size="large" style={{backgroundColor: 'orange'}}> Large orange box</Box>
      <Box size="small"> Sizeless box</Box>
    </div>
  )
}


export default App
