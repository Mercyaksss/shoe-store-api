# Shoe Store API

A simple REST API for a shoe store built with Express.js. Provides endpoints for retrieving shoes with filtering capabilities.

## 🚀 Live API
Running locally on `http://localhost:3001`

## 📋 Endpoints

### Get All Shoes
```
GET /api/shoes
```
Returns all shoes in the database.

### Get Single Shoe
```
GET /api/shoes/:id
```
Returns a specific shoe by ID.

### Filter Shoes
```
GET /api/shoes?brand=nike
GET /api/shoes?category=sneakers
GET /api/shoes?gender=unisex
GET /api/shoes?minPrice=50&maxPrice=150
```
Filter shoes by brand, category, gender, or price range.

### Get All Brands
```
GET /api/brands
```
Returns a list of all available brands.

### Get All Categories
```
GET /api/categories
```
Returns a list of all shoe categories.

## 🛠️ Built With
- Node.js
- Express.js
- CORS

## 💻 Installation
```bash
npm install
npm start
```

## 📊 Data Structure

Each shoe object contains:
- `id` - Unique identifier
- `name` - Shoe name
- `brand` - Brand name
- `price` - Price in USD
- `category` - Category (sneakers, running, boots, casual)
- `gender` - Target gender (men, women, unisex)
- `sizes` - Available sizes
- `colors` - Available colors
- `image` - Product image URL
- `description` - Product description"# shoe-store-api" 
"# shoe-store-api" 
