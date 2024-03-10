import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoLogInSharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
function Navbartop() {
  return (
    <Navbar expand="lg" className=" shadow-sm bg-white">
    <Container >
      <Navbar.Brand href="#" className=' font-bold'><h1 className=' '>Arrong</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" className='font-semibold text-[20px] ml-10'>Home</Nav.Link>
          <Nav.Link href="#action1" className='font-semibold text-[20px] ml-10'>About</Nav.Link>
          <Nav.Link href="#action1" className='font-semibold text-[20px] ml-10'>Product</Nav.Link>
          <Nav.Link href="#action1" className='font-semibold text-[20px] ml-10'>Contact</Nav.Link>

    
        </Nav>
        <Form className="d-flex">
   
          <Button className=' btn btn-outline-dark flex items-center text-[22px] '><IoLogInSharp />Login</Button>
          <Button className=' btn btn-outline-dark ms-2 flex items-center text-[22px]'><IoPersonAddSharp />Regester</Button>
          <Button className=' btn btn-outline-dark ms-2 flex items-center text-[22px]'><FaCartPlus />Cart (0)</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbartop