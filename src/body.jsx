import React from 'react';
import 'react-bootstrap'
import {Container,Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css'





const Image = () => {
    return (
      <article className="article" id="compImage">
        <img src="https://www.quadbtech.com/images/basket0.5x.png" className='card-pix' alt="background" width="inherit" />
        <span className="header">QuadB
        <p className='msubtitle'>...the very best</p></span>
      </article>
    );
  };


        // <div>
        //  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsm1wREhRFxDXYStVpdV6U0St8fh6rSqErHQ&usqp=CAU' className='card-pix'></img>
        // Engineering Technology
        // </div>

function Body(){
    return (
        <div id='bdy' >
        <Navbar   className="gap-3 px-3 flex-grow-2 justify-content-spaceBetween" style={{height:"70px" ,fontSize:"1rem" ,justifyContent:"space-between", borderBottom: "3px solid grey", borderTop:"2px solid grey"}} fixed='top'   bg= "white">
  <Container >
     <Navbar.Brand className="Brand" style={{ fontSize:"2rem" ,marginRight: "30%" , lineHeight:"50%", fontWeight:"bolder" }} href="#home">QuadB Tech</Navbar.Brand>   
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </Container>
</Navbar>

        {Image()}
        
        <Nav className='newd' variant='tabs' defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1" href="/home">All Posts(132)</Nav.Link>
  </Nav.Item>
  
</Nav>
</div>

    )
};



export default Body
