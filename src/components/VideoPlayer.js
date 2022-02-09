import { useRef, useState,useEffect } from "react";
// import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import { ReactSketchCanvas } from 'react-sketch-canvas';

import image3 from "../assets/images/image3.png";
import ImageOverlay from "./ImageOverlay";
import styled from 'styled-components';
import image1 from "./image1.png";

function VideoPlayer() {
  const videoRef = useRef(null); //used to get current timestamp in video
  const [currentTime, setCurrentTime] = useState(0);

  /**
   * Runs whenever time in video changes
   * Sets current time in milliseconds
   */
  const onTimeUpdateHandler = () => {
    const timestamp = videoRef.current.currentTime * 1000;
    setCurrentTime(timestamp);
  };


  // const images = [
  //   {
  //     name: "image1",
  //     startTime: 3500,
  //     endTime: 5000,
  //     image: image1,
  //     occurance: 1,
  //   },
  //   {
  //     name: "image2",
  //     startTime: 6000,
  //     endTime: 8000,
  //     image: image2,
  //     occurance: 2,
  //   },
  //   {
  //     name: "image3",
  //     startTime: 7000,
  //     endTime: 8500,
  //     image: image3,
  //     occurance: 3,
  //   },
  // ];
const [num,setNum]=useState(0);
const [startTime,setStartTime]=useState();
const [endTime,setEndTime]=useState();
const [isNumberGame,setIsNumberGame]=useState(false);
let [im,setIm]=useState(image1);
const startchange=(e)=>{
  setStartTime(e.target.value);
}
const endchange=(e)=>{
  setEndTime(e.target.value);
};
let [istextbox,setIsTextBox]=useState(false);
 useEffect(()=>{
  // console.log(num);
  // console.log(im);
  if(num===1){
setIm(image1);
setIsTextBox(false);
setIsNumberGame(false);
}
if(num===2){
  setIm(image2);
  setIsTextBox(false);
  setIsNumberGame(false);
  }
  if(num===3){
    setIm(image3);
    setIsTextBox(false);
    setIsNumberGame(false);
    }
    if(num===4){
      setIm();
      setIsTextBox(true);
      setIsNumberGame(false);
    }
    if(num===5){
      setIsTextBox(false);
      setIm();
      setIsNumberGame(true);
    
      
    }
},[num]);
  return (
    <div className="whole">
      
     {/* <ReactSketchCanvas width="600"
      height="400"
      strokeWidth={4}
      strokeColor="red">Hey</ReactSketchCanvas> */}
      <div className="video-container">
        <video
          className="video-player"
          ref={videoRef}
          onTimeUpdate={onTimeUpdateHandler}
          controls
          
        >
          <source src="./Big_Buck_Bunny_1080_10s_5MB.mp4" type="video/mp4" />{" "}
          Sorry, your browser doesn't support embedded videos
        </video>
        <div className="images">       
          <ImageOverlay
            startTime={startTime}
            endTime={endTime}
            image={im} //image1 , image2 , image3
            currentTime={currentTime}
            isTextBox={istextbox}
            isNumberGame={isNumberGame}
            target="10"
          />
      
      </div>
        </div>
        
      <div className="option_bar">
    <button className="btn" onClick={()=>setNum(1)} >Rectangle</button>
    <button className="btn" onClick={()=>setNum(2)}>Circle</button>
    <button className="btn" onClick={()=>setNum(4)}>TextBox</button>
    <button className="btn" onClick={()=>setNum(3)}>Triangle</button>
    <button className="btn" onClick={()=>setNum(5)}>Number-Game</button>
      </div>
      {/* <div className="images">       
          <ImageOverlay
            startTime={startTime}
            endTime={endTime}
            image={im} //image1 , image2 , image3
            currentTime={currentTime}
          />
      
      </div> */}
        <div className="time">
        Please enter the start and end time for the overlay
        <br></br>
        Start-time:
        <input  className="startime" onChange={startchange} value={startTime}/>
        <br></br>
        end-time:
        <input  className="end-time" onChange={endchange} value={endTime}/>
      </div>
        {/* {num} */}
      {/* 
      image1:rectangle
      image2:triangle
      image3:square


      Ba */}
      

     
      
      {/* <ImageOverlay startTime={startTime} endTime={endTime}/> */}
      {/* <img src={image1} alt={'not loaded'}/> */}
     
      {/* <div className="images">       
          <ImageOverlay
            startTime={startTime}
            endTime={endTime}
            image={im} //image1 , image2 , image3
            currentTime={currentTime}
          />
      
      </div> */}
    </div>
  );
}


export default VideoPlayer;
