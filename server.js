const express = require('express');
const cors = require('cors');
const shoes = require('./data/shoes');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// GET all shoes
app.get('/api/shoes', (req, res) => {
  const { brand, category, gender, minPrice, maxPrice } = req.query;
  
  let filteredShoes = [...shoes];
  
  // Filter by brand
  if (brand) {
    filteredShoes = filteredShoes.filter(shoe => 
      shoe.brand.toLowerCase() === brand.toLowerCase()
    );
  }
  
  // Filter by category
  if (category) {
    filteredShoes = filteredShoes.filter(shoe => 
      shoe.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Filter by gender
  if (gender) {
    filteredShoes = filteredShoes.filter(shoe => 
      shoe.gender.toLowerCase() === gender.toLowerCase() || 
      shoe.gender.toLowerCase() === 'unisex'
    );
  }
  
  // Filter by price range
  if (minPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice));
  }
  
  if (maxPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice));
  }
  
  res.json(filteredShoes);
});

// GET single shoe by ID
app.get('/api/shoes/:id', (req, res) => {
  const shoe = shoes.find(s => s.id === parseInt(req.params.id));
  
  if (!shoe) {
    return res.status(404).json({ message: 'Shoe not found' });
  }
  
  res.json(shoe);
});

// GET all brands
app.get('/api/brands', (req, res) => {
  const brands = [...new Set(shoes.map(shoe => shoe.brand))];
  res.json(brands);
});

// GET all categories
app.get('/api/categories', (req, res) => {
  const categories = [...new Set(shoes.map(shoe => shoe.category))];
  res.json(categories);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Shoe Store API running on http://localhost:${PORT}`);
});