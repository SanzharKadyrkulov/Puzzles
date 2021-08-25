
import React from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useProducts } from '../../contexts/ProductContext';
import Song from '../../Song/Song';
import logo from './logo-new.jpeg';

const Header = () => {
  const { history } = useProducts()
  const { user, logout } = useAuth()

  // const handleValue = (e) => {
  //   const search = new URLSearchParams(history.location.search)
  //   search.set('q', e.target.value)
  //   search.set('_page', 1)
  //   history.push(`${history.location.pathname}?${search.toString()}`)
  //   getProductsData()
  // }
  useEffect(() => {
    console.log(user);
  }, [user])
  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" style={{backgroundColor: '#fff'}} color='black' >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="#"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{fontSize:'18px'}} className="mr-auto">
              <Song />
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/browsinghistory">Browsing history</Nav.Link>
              <Nav.Link href="/productlist" >Catalog</Nav.Link>
              <Nav.Link href="/chat">Chat</Nav.Link>
              <Nav.Link href="/cart">Busket</Nav.Link>
              <Nav.Link href="/fav">Favorite</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-4"
              onChange={(e) => handleValue(e)}
            />
          </Form> */}
          {user ? (<>
            <div style={{ color: '#000', margin: '10px', border: '1px solid #000', padding: '5px', borderRadius: '5px',  }}>{user.email}</div>
            <Button style={{ marginLeft: '10px', fontSize:'18px'  }} onClick={handleLogout} variant="danger" >Log Out</Button>
          </>)
            :
            (<>
              <Button onClick={() => history.push('/login')} variant="danger" style={{ marginLeft: '10px', fontSize:'18px' }}>Log In</Button>
              <Button onClick={() => history.push('/registration')} variant="danger" style={{ marginLeft: '10px', fontSize:'18px' }} >Sign Up</Button>
            </>)

          }
        </Container>
      </Navbar>
    </>
  );
}

export default Header;