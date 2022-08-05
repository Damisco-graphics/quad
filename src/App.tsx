import React from 'react';
// import ReactDOM from 'react-dom';

// import { Container, Card, Col, Button } from 'react-bootstrap';
import './App.css';

import  'bootstrap';
import  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './card.css'


import './body.css';
import Body from './body.jsx'
import footer from './footer.jsx';


import {Routes, Route,Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Loadsummary from "./pages/Loadsummary"

import Nopage from './pages/Nopage.jsx'





  

function Crecard(obj) {
    const { show: { url, name } } = obj;
    return (
      <div id="Crewcard" >
         <>
    <nav>
    <ul>
        <h1>{name}</h1>
        <a href={url}>{url}</a><br></br>
        <hr></hr>
        <ol><Link to="/summary">Summary</Link> </ol>
        {/* <a href="" target="_blank" style={{color: "black",fontWeight:"italic"}}>Summary</a> */}
        </ul>
        </nav>
        </>
      </div>
    )
  };
  
  
 
 
  function App({api}) {
    // const api = 'https://api.tvmaze.com/search/shows?q=all';
    const [data, setData]= useState([]);
    useEffect(()=>{
      function getData(api){
        fetch(api)
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err));
      }
    getData(api)
    }, []);
    if (!data.length) return <div>Loading</div>
      return (
        <div className="App">
        <div >
          {Body()}           
        </div>
        <div className="App-header">
          <br/>
          <Routes>  
          <Route path ="/" element='' />          
        <Route path ="/summary" element={<Loadsummary/>} />
        <Route path = "*" element={<Nopage/>}/>
      </Routes>
         
      <div className="CardsHolder">
        {data.map(Crecard)}
        </div>
        </div>
      
      
      
      {footer()}
      </div>
      
) 
      }
    
  


    

export default App;
