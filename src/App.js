import React,{useEffect,useState} from 'react';
import './App.css';


const App = () => {

  useEffect(() => {
    console.clear();
    //we can view the document object model full
    console.dir(document);
    //to access my domain
    console.log(document.domain);
    //to access the entire url
    console.log(document.URL);
    //to access the document title
    console.log(document.title);
    document.title = "Test";//we can edit the title too
    //to access any forms
    console.log(document.forms[0]);
    //get element by id
    console.log(document.getElementById('header-title'));
    let titleheading = document.getElementById('header-title');
    console.log(titleheading.textContent);
    console.log(titleheading.innerText);//both are almost same except in showing some styled contents
    //we can also style using the dom property
    let header = document.getElementById("main-header");
    header.style.borderBottom="10px solid black";
    //get element by classname
    let list2 = document.getElementsByClassName('list-group-item');
    console.log(list2);
    // list2[1].innerText = "Maddy2";
    // list2[1].style.background = "yellow";
    // list2[1].style.fontWeight = "bold";
    for(var i=0;i<list2.length;i++){
      list2[i].style.background = "white";
    }
    //get element by tagname
    let li2 = document.getElementsByTagName('li');
    console.log(li2);

    //Queryselector fetches anything but the first instance
    var header2 = document.querySelector("#main-header");//note we need to give # for id and . for classname
    console.log(header2);
    header.style.border = "3px solid red";
    var input = document.querySelector('input');
    input.value = "Hello Maddy";
    var submit = document.querySelector('input[type="submit"]');
    submit.value = "Send";

    //we can access whichever child item we want
    var firstitem = document.querySelector('.list-group-item');
    firstitem.style.color='green';

    var lastitem = document.querySelector('.list-group-item:last-child');
    lastitem.style.color='red';

    // var seconditem = document.querySelector('.list-group-item:nth-child(2)');
    // seconditem.style.background='navy';
    // seconditem.style.color='white';

    //query selector all returns a node list(arrays)

    var title = document.querySelectorAll('.title');
    console.log(title);

    //queryselectorAll method offers flexibility of styling alternate items
    var listitemsodd = document.querySelectorAll('li:nth-child(odd)');
    for(var i=0;i<listitemsodd.length;i++){
      listitemsodd[i].style.background = "orange";
    }
  }, [])

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
      <input type="submit" className="btn btn-dark" value="Submit"/>
    </form>
    <h2 className="title">Items</h2>
    <ul id="items" className="list-group">
      <li className="list-group-item">Item 1</li>
      <li className="list-group-item">Item 2</li>
      <li className="list-group-item">Item 3</li>
      <li className="list-group-item">Item 4</li>
    </ul>
   </div>
  </div>
    </div>
  );
}

export default App;
