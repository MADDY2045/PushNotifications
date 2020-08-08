import React,{useEffect,useState} from 'react';
import './App.css';


const App = () => {

  useEffect(() => {
    console.clear();
   //traversing the dom
    //event listeners
    var button = document.getElementById('button').addEventListener('click', ()=>{
      console.clear();
      console.log('clicked')});//method 1

      var button = document.getElementById('button').addEventListener('click', buttonclick);//method 2
      //var eventbutton = document.getElementById('eventbutton').addEventListener('dblclick', eventbuttonclick);//various events
      //var eventbutton = document.getElementById('eventbutton').addEventListener('mousedown', eventbuttonclick);
      // var eventbutton = document.getElementById('eventbutton').addEventListener('mouseup', eventbuttonclick);
      // var mouseevent = document.getElementById('box').addEventListener('mouseover', mouseeventbuttonclick);
      // var mouseevent = document.getElementById('box').addEventListener('mouseenter', mouseeventbuttonclick);
      // var mouseevent = document.getElementById('box').addEventListener('mouseleave', mouseeventbuttonclick);
      // var mouseevent = document.getElementById('box').addEventListener('mouseout', mouseeventbuttonclick);
      var mouseevent = document.getElementById('box').addEventListener('mousemove', mouseeventbuttonclick);
      // var inputevent2 = document.querySelector('input[type="text"]').addEventListener('keydown', inputevent);
      //  var inputevent2 = document.querySelector('input[type="text"]').addEventListener('keyup', inputevent);
      // var inputevent2 = document.querySelector('input[type="text"]').addEventListener('keypress', inputevent);
      // var inputevent2 = document.querySelector('input[type="text"]').addEventListener('focus', inputevent);
      // var inputevent2 = document.querySelector('input[type="text"]').addEventListener('blur', inputevent);
      // var inputevent2 = document.querySelector('input[type="text"]').addEventListener('cut', inputevent);
      // var inputevent2 = document.querySelector('input[type="text"]').addEventListener('paste', inputevent);
      var inputevent2 = document.querySelector('input[type="text"]').addEventListener('input', inputevent);
      var select = document.querySelector('select').addEventListener('change', inputevent);
      var formsubmit = document.querySelector('form').addEventListener('submit', inputevent);
  }, [])

  const inputevent=(e)=>{
    e.preventDefault();
    console.clear();
    console.log('clicked',e.type,e.target.value);
  }

  const buttonclick=(e)=>{
    console.clear()
    // document.getElementById('header-title').textContent = "Hello changed";
    // document.querySelector('#main').style.background = "grey";
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);//return dom token list of classes
    var buttoncontent = document.getElementById('buttoncontent');
    buttoncontent.innerHTML = e.target.id;
    console.log(e.type)//returns the type of event
    console.log(e.clientX);//returns the actual element position mouse wrt width
    console.log(e.clientY);//returns the actual element position mouse wrt height
    console.log(e.offsetX);//returns the actual element position mouse wrt width
    console.log(e.offsetY);//returns the actual element position mouse wrt height

    //key pressed
    console.log(e.altKey);//returns true if button is clicked with holding alt key;
    console.log(e.ctrlKey);//returns true if button is clicked with holding ctrl key
    console.log(e.shiftKey);//returns true if button is clicked with holding shift key
    if(e.altKey && e.ctrlKey){
      alert("opened");
    }
  }

  const eventbuttonclick=(e)=>{
    console.clear();
    console.log('clicked',e.type);
  }
  const mouseeventbuttonclick=(e)=>{
    console.clear();
    console.log('clicked',e.type);
    var output = `OutputX : ${e.offsetX} ,OutputY: ${e.offsetY}`;
    var h3 = document.getElementById('h3').innerHTML=output;
    var box = document.getElementById('box');
    document.body.style.background = `rgb(${e.offsetX},${e.offsetY},100)`
    //box.style.background = `rgb(${e.offsetX},${e.offsetY},100)`
  }



  return (
    <div >
     <header id="main-header" className="bg-success text-white p-4 mb-3">
    <div className="container">
      <h1 id="header-title">Item Lister <span style={{display:"none"}}>123</span></h1>
    </div>
  </header>
  <div className="container">
   <div id="main" className="card card-body">
    <h2 className="title">Add Items</h2>
    <form className="form-inline mb-3">
      <input type="text" className="form-control mr-2"/>
      <select className="form-control mr-2">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="submit" className="btn btn-dark" value="Submit"/>
    </form>
    <h2 className="title">Items</h2>
    <ul id="items" className="list-group">
      <li className="list-group-item">Item 1</li>
      <li className="list-group-item">Item 2</li>
      <li className="list-group-item">Item 3</li>
      <li className="list-group-item">Item 4</li>
    </ul>
    <br/>
    <h4 id="buttoncontent"></h4>
    <button className="btn btn-dark btn-block" id="button">CLICK</button>
    <button className="btn btn-dark btn-block" id="eventbutton">EVENTS</button>
    <br/>
    <div id="box" style={{width:"200px",height:"200px",background:"orange"}}>
      <h3 >Hello</h3>
      <h3 id="h3"></h3>
    </div>
   </div>
  </div>
    </div>
  );
}

export default App;
