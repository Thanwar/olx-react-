import React from 'react';
import '../App.css';
import searchbtn from '../images/search.png'


export default class Search extends React.Component {
  render(){

   function searchads() { 
      var word = document.getElementById("searchbar").value,
      queue = [document.body],
      curr
  ;
  while (curr = queue.pop()) {
      if (!curr.textContent.match(word)) continue;
      for (var i = 0; i < curr.childNodes.length; ++i) {
          switch (curr.childNodes[i].nodeType) {
              case Node.TEXT_NODE : // 3
                  if (curr.childNodes[i].textContent.match(word)) {
                      console.log("Found!");
                      console.log(curr);
                      curr.style.backgroundColor = "#FDFF47";
                      curr.scrollIntoView();
                      // you might want to end your search here.
                  }
                  break;
              case Node.ELEMENT_NODE : // 1
                  queue.push(curr.childNodes[i]);
                  break;
          }
      }
      //setTimeout(function(){ window.location.reload() }, 10000);         
    }
  } 

    return(<>
      <textarea className="searchbox" rows="2" cols="100" id="searchbar" placeholder="Find Cars, Mobile Phones and more..."></textarea>
      {/* <button onClick={searchads} className="searchbtn">Search </button> */}
      <a onClick={searchads} className="searchbtn" >
        <img src = {searchbtn} width="40px"/>
      </a>
      
    </>)
  }
}
