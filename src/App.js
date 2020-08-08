import React,{useEffect,useState} from 'react';
import './App.css';


const App = () => {

  useEffect(() => {
    console.clear();
   //traversing the dom
    //lets find the parent node
    var itemsparent = document.querySelector('#items');
    //console.log(itemsparent.parentNode);
    itemsparent.parentNode.style.background="grey";
    //actually we chain the node to get parentelement
    // console.log('parentnode',itemsparent.parentNode.parentNode.parentNode);
    //  similarly parent elements are same as parent nodes
    // console.log('parentelement',itemsparent.parentElement.parentElement.parentElement);

    //getting the child nodes
    console.log('childnodes',itemsparent.childNodes)//gets all the children including line breaks (not recommended) -> nodelist
    console.log('children',itemsparent.children)//gets all the children excluding line breaks (recommended) ->html collection
    itemsparent.children[1].style.background = "yellow";
    console.log(itemsparent.firstElementChild);
    itemsparent.firstElementChild.textContent="Mady"
    itemsparent.lastElementChild.textContent="Popeye";

    //next sibling
    console.log(itemsparent.nextSibling);//not recommended
    console.log(itemsparent.nextElementSibling);//recommended

    //previous sibling
    console.log(itemsparent.previousSibling);//not recommended
    console.log(itemsparent.previousElementSibling);//recommended

    //creating a new div

    var newdiv = document.createElement('div');
    //adding classname
    newdiv.className="myname";
    //adding id
    newdiv.id="mynameid";
    //setting attributes
    newdiv.setAttribute('title', 'mytitle');
    // enter a textnode
    var newdivtext = document.createTextNode('hello world');
    //add text to div
    newdiv.appendChild(newdivtext);
    console.log(newdiv);
    //now if we want to insert before the header h1 inside the container div
    var container = document.querySelector('header .container');
    console.log('container',container)
    var h1 = document.querySelector('header h1');
    console.log('h1',h1);
    container.insertBefore(newdiv,h1);
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
