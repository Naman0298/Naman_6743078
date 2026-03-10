# ShopHub - Ecommerce Website

A beautiful and responsive ecommerce website built with HTML, CSS, and TypeScript/JavaScript.

## Features

- **Responsive Navbar** - Navigation menu with links to different sections
- **Hero Section** - Eye-catching landing section with CTA button
- **Product Display** - Grid layout showing 3 featured products
- **Product Details Modal** - Click on any product to see detailed information
- **Beautiful Styling** - Modern gradient design with smooth animations
- **Mobile Responsive** - Works on all screen sizes

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Complete styling and responsive design
- `script.js` - JavaScript functionality (compiled from TypeScript)
- `script.ts` - TypeScript source code with type definitions

## Products Available

1. **Wireless Headphones** - $79.99
   - Premium noise cancellation
   - 30-hour battery life
   - Bluetooth 5.0 connectivity

2. **Smartwatch Pro** - $199.99
   - Fitness tracking and GPS
   - Water-resistant (50m)
   - 7-day battery life

3. **Portable Speaker** - $49.99
   - 360-degree sound
   - 12-hour battery
   - Waterproof design

## How to Use

1. Open `index.html` in your web browser
2. Navigate using the navbar
3. Scroll through the product listings
4. Click on any product card to see detailed information in a modal
5. Use the "View Details" button to open product details
6. Close the modal by clicking the X, clicking outside, or pressing Escape

## Features Explained

### Navigation
- Sticky navbar that stays at the top when scrolling
- Links to Home, Products, About, Contact, and Cart sections
- Responsive menu that adapts to smaller screens

### Hero Section
- Eye-catching gradient background
- "Shop Now" button that smoothly scrolls to products section

### Product Cards
- Clean card layout with emoji representation
- Shows product name, price, rating, and review count
- Product preview text
- Hovering effect for better interactivity

### Product Modal
- Detailed view of selected product
- Large product image placeholder
- Full description
- Star rating display
- "Add to Cart" and "Buy Now" buttons
- Close options: click X, click outside, or press Escape

## Customization

### Add More Products
Edit the `products` array in `script.ts` or `script.js`:
```javascript
const products = [
    {
        id: 4,
        name: "Your Product Name",
        price: 99.99,
        emoji: "❤️",
        rating: 5,
        reviews: 100,
        description: "Your product description here..."
    }
];
```

### Update Colors
Edit the color variables in `styles.css`:
- Primary color: `#667eea`
- Secondary color: `#764ba2`
- Accent color: `#e74c3c`
- Dark background: `#2c3e50`

## Browser Support

Works on all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Notes

- The product images are represented by emojis for simplicity
- You can replace the emojis with actual product images by modifying the HTML
- The "Add to Cart" and "Buy Now" buttons can be connected to backend functionality
- All animations are CSS-based for smooth performance
