import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

// Mets ton prénom ici. Laisse une chaîne vide ('') pour afficher « Hello, there! »
const firstName = 'Said';

function App() {
  return (
    <div className="App">
      <Container className="py-5 d-flex flex-column align-items-center">
        {/* Carte du produit : elle regroupe les 4 composants */}
        <Card className="product-card shadow">
          <div className="image-wrapper">
            <Image />
          </div>
          <Card.Body>
            <Card.Title as="div">
              <Name />
            </Card.Title>
            <Price />
            <Card.Text as="div">
              <Description />
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Message de bienvenue sous la carte */}
        <div className="greeting">
          <h3>Hello, {firstName ? firstName : 'there!'}</h3>
          {firstName && (
            <img
              className="greeting-avatar"
              src="/images/avatar.svg"
              alt={`Avatar de ${firstName}`}
            />
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
