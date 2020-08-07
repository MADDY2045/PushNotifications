import React,{useEffect,useState} from 'react';
import './App.css';


const App = () => {

  const [innerWidth,setInnerWidth] = useState(window.innerWidth);
  const [innerHeight,setInnerHeight] = useState(window.innerHeight);
useEffect(()=>{
  window.onresize=()=>{
    console.clear();
    let changedwidth = window.innerWidth;
    let changedheight = window.innerHeight;
    setInnerWidth(changedwidth);
    setInnerHeight(changedheight)
    console.log("changed",changedwidth);
  }
},[])

let height=  innerHeight - 120;
let width  = innerWidth - 100;
  return (
    <div style={{background:"blue",height:innerHeight}} >
    <h1>{`width: ${width}px ,height: ${height}px`}</h1>
    <div className="row">
      <div className="col-md-10 card" style={{background:"white",width,height,position:"absolute",left:"30px"}}>
        test
      </div>
    </div>
    </div>
  );
}

export default App;
