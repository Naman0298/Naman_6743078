// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        emoji: "🎧",
        rating: 5,
        reviews: 234,
        description: "Premium wireless headphones with noise cancellation, 30-hour battery life, and crystal clear sound quality. Perfect for music lovers and professionals. Features Bluetooth 5.0 connectivity, comfortable over-ear design, and built-in microphone for calls."
    },
    {
        id: 2,
        name: "Smartwatch Pro",
        price: 199.99,
        emoji: "⌚",
        rating: 4,
        reviews: 156,
        description: "Advanced smartwatch with fitness tracking, heart rate monitor, and GPS. Water-resistant up to 50m, 7-day battery life, and beautiful AMOLED display. Compatible with iOS and Android devices. Track your daily activities, sleep patterns, and receive notifications."
    },
    {
        id: 3,
        name: "Portable Speaker",
        price: 49.99,
        emoji: "🔊",
        rating: 5,
        reviews: 412,
        description: "Compact yet powerful Bluetooth speaker with 360-degree sound. 12-hour battery, waterproof design, and deep bass. Perfect for outdoor activities, travel, and home use. Easy to connect to any device with Bluetooth 5.0 technology."
    }
];

// Function to render products on page load
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">★ ${product.rating} (${product.reviews} reviews)</div>
                <div class="product-price">$${product.price}</div>
                <p class="product-description">${product.description}</p>
                <button class="view-details-btn" onclick="openModal(${product.id})">View Details</button>
            </div>
        `;
        productCard.addEventListener('click', () => openModal(product.id));
        productsGrid.appendChild(productCard);
    });
}

// Function to open modal with product details
function openModal(productId) {
    const product = products.find((p) => p.id === productId);
    
    if (product) {
        const modal = document.getElementById('productModal');
        document.getElementById('modalImage').textContent = product.emoji;
        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalPrice').textContent = `$${product.price}`;
        document.getElementById('modalDescription').textContent = product.description;
        
        const ratingStars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
        document.getElementById('modalRating').textContent = ratingStars;
        document.getElementById('modalReviews').textContent = `(${product.reviews} reviews)`;
        
        modal.classList.add('show');
    }
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
