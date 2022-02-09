import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import { ResizableBox } from 'react-resizable';
import DragResizeContainer from 'react-drag-resize';

function ImageOverlay({ startTime, endTime, image, currentTime,isTextBox,isNumberGame,target }) {
  
  let [num,setNum]=useState(1);
  
useEffect(()=>{
if(isNumberGame&&num<target){
  setTimeout(()=>setNum(num+1),1000)
}

},[num,isNumberGame])
  const showImage = () => {
    if (currentTime >= startTime && currentTime <= endTime) return true;

    return false;
  };

  if(isTextBox&&showImage){
    return(
      // <Draggable><DragResizeContainer>
      //   <ResizableBox>
      <Draggable bounds={{left:10,top:10,right:500,bottom:200}}>
           <div> 
       
      <textarea placeholder="Enter the text"/>
        </div>
        </Draggable>
    );
  }
 if(isNumberGame){
   return(
     <Draggable bounds={{left:10,top:10,right:500,bottom:200}}>
      
     <div className="numbers">
       
   <p>  {num} </p>
   
   
   </div>
   
   </Draggable>
   );
 }
 
  return <>{showImage()&& image && <Draggable  bounds={{left:10,top:10,right:500,bottom:200}}><img src={image} alt={'no'} className="images"  /></Draggable>}</>;

}
// const Container=styled.div`
// background-color:red,


// `
export default ImageOverlay;
