import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
<<<<<<< HEAD
import { browserHistory, Router, Routes, Route } from 'react-router';
=======
import {Routes, Route } from 'react-router';
>>>>>>> springboot_training
import AllHeroes from './components/AllHeroes';
import HeroForm from './components/HeroForm';

function App() {
  return (
    <>
    
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Heroes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/allheroes">All Heroes</Nav.Link>
              <Nav.Link href="/addhero">Add Hero</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        <Routes>
          <Route path="allheroes" element={<AllHeroes/>} />
          <Route path="addhero" element={<HeroForm/>} />
          <Route path="/" element={<AllHeroes/>} />
        </Routes>
      
    </>
  );
}

export default App;
