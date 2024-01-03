import './Home.css';
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Rating } from '@mui/material';

const Home = () => {
  const products = [
    { name: 'Apple', type: 'Fruit', price: '₹150' },
    { name: 'Banana', type: 'Fruit', price: '₹60' },
    { name: 'Carrot', type: 'Vegetable', price: '₹40' },
  ];

  return (
    <div className="home-container">
      <h1>
        <span className="farm-fresco-text">FarmFresco</span> - <span className="fruits-veggies-text">Fruits & Vegetables Store</span>
      </h1>

      <section className="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="farm-fresco-text">FarmFresco</span>, your one-stop destination for fresh and quality fruits and vegetables. We are
          passionate about providing you with the best products sourced directly from local farms. Explore our wide
          range of offerings and experience the goodness of farm-fresh produce.
        </p>
      </section>

      <div className="category-container">
        {products.map((product, index) => (
          <Card key={index} className="category-card">
            <CardMedia
              component="img"
              height="140"
              image={`/${product.name.toLowerCase()}.png`} // Assuming your images are in the public directory
              alt={product.name}
            />
            <CardContent className="category-card-content">
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {product.price}
              </Typography>
              <Rating name={`rating-${index}`} value={4} readOnly />
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

     
      <section className="special-offers">
        <h2>Special Offers</h2>
    
      </section>

    </div>
  );
};

export default Home;
