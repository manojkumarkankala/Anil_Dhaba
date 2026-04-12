// Menu data (JSON)
const menuItems = [{
        id: 1,
        name: "Spicy Chicken Fry",
        description: "Extra spicy chicken fried with telangana spices and curry leaves",
        price: "₹250",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2018/12/Spicy-Chicken-Fry-Recipe.jpg"
    },
    {
        id: 2,
        name: "Mutton Curry",
        description: "Tender mutton cooked slow with red chili and aromatic spices",
        price: "₹350",
        image: "https://myfoodstory.com/wp-content/uploads/2016/12/Easy-Mutton-Curry-1.jpg"
    },
    {
        id: 3,
        name: "Chicken Biryani",
        description: "Hyderabadi style spicy chicken dum biryani with raita",
        price: "₹300",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBD12EqNzzH7QWIJFVCW1QOlVuDVMJAUK4rJfZfUCvuPj6ei-3aoO8LHrlOk_9iYHfmjmMBc3dKbuEYO2U9sygviibHxOtpinT3aAsEosQfyBPv1r&s=10&ec=121629545"
    },
    {
        id: 4,
        name: "Fish Fry",
        description: "Fresh fish marinated in spicy masala and deep fried",
        price: "₹280",
        image: "data:image/webp;base64,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"
    },
    {
        id: 5,
        name: "Chicken 65",
        description: "Crispy deep-fried chicken cubes tossed in spicy curry leaves",
        price: "₹220",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQuRfDZRRphiOm-R7A5KxSHFWHMaR12xUvkNmnVTwy6XqdDI-8d4MQEHH_QTXBGcIM69Dlsn-7Idif1ezgu31gWm0vpCnufKHn_DZ-vyvx1J9zD8bvQ&s=10&ec=121629545"
    },
    {
        id: 6,
        name: "Mutton Biryani",
        description: "Premium mutton biryani cooked on slow dum with saffron",
        price: "₹420",
        image: "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/MuttonBiryani-768x768.webp"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');

// Render Menu Items
function renderMenu() {
    menuGrid.innerHTML = '';

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div style="position: relative;">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="discount-badge">10% OFF</div>
            </div>
            <div class="menu-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
                <button class="menu-btn" onclick="orderWhatsApp('${item.name}', '${item.price}')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// WhatsApp Order Function
function orderWhatsApp(itemName, price) {
    const message = `Hi Anil Dhaba! I'd like to order:\n${itemName} - ${price}\n\nTotal: `;
    const phone = '919876543210';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effects
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '1rem 0';
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.menu-item, .review-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});