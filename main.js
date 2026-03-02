// ===== WOODEX CART & SITE JS =====

// ===== Product Database =====
const PRODUCTS = {
    'MHG-AF-001': {
        id: 'MHG-AF-001',
        name: 'African Mahogany',
        badge: 'Premium',
        badgeColor: 'bg-orange-500',
        description: 'Grade A - Rough Sawn',
        unit: 'cu. ft',
        price: 4500,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADwiyfIDem3i3dVRHd3G0H2RCO9YnK1ieVLYgd6ydWHBXN8KOTrhZIBP_g__yABmy20WWaASHb04mXpcBTjhYQ7oJF3nZzWGUiVma1crRtVH59uAb-rrhC9wR7ybn9UmxT6-iM2xQkugtZ-zNFoMrEP0lesxPwL2Fxi8zEnpaZgQ-fvS-QO2S4gNjj-JUGMMlJAGcYvxq-saxn0qHv0yTe6pJF3xV9WhW7-yDQq4LidE08yOZYw7YsGvKi3mf-PUCyw2Ix79UDXQLD'
    },
    'PLY-BR-002': {
        id: 'PLY-BR-002',
        name: 'Birch Plywood',
        badge: '',
        badgeColor: '',
        description: '18mm BB/CP Grade',
        unit: 'sheet',
        price: 4800,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGBW97kCxUFg227NzB7-44H8oyS3HcmTF9Z28GaNM-Xi6ODqsE7TDw3r3wMp1R82ixjnH7hcb0-P7pyNXStbnYHMEPVNhlg5a7FpK_-Sry6DmVHfUZK4k4Jk2_3G3x1J9fY06NVzCt9eF4ClieeRkAhgU90lz6CRnnQZaeqErwHZOc5FcodeXpFHJu3mw4mWUZQd_X4-kdA9BkwN0APQOAcZ7jfauumvABIPAZPsV24k5zO8P5hFeNvf6x4sgxAnctYs7UV3307nH-'
    },
    'OAK-GR-003': {
        id: 'OAK-GR-003',
        name: 'Green Oak Beam',
        badge: '',
        badgeColor: '',
        description: '200mm x 200mm - Structural',
        unit: 'meter',
        price: 6500,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgdiq05JRELi90qPhyVs7WEAfc7c1bSsLAZaak5KtID_SmfzGjNzLRgUvw43zFuEOQfDIlw0MR4aR0AGa-JlcYbhRJeRnbSx_fNV-n5W4qO6AOXGImfEZRzxRjQ-4sQYWxwQ3gbSZYS5X9M934iR_GhLSb0XQbkGNllTblq6D5xwyWgTFTtLCn6Z-4b3hQDNlNGnC-nRxcaItQxQdKCe_hXHiL4_ODWOqlMdvbiR54ejaBTFDluQZM26gQnWKMPa6bZ-P8UAGjg8YP'
    },
    'CDR-WR-004': {
        id: 'CDR-WR-004',
        name: 'Western Red Cedar',
        badge: '',
        badgeColor: '',
        description: 'T&G Cladding - Kiln Dried',
        unit: 'meter',
        price: 890,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDdmrDens-5CYgT01rjrB-iH9zXxgIP1M57WcieURu0oXPI54uRiPfwD7FMUG9v189PYdaUppcxPiMINE1-ri1b5uxxqdLXcnhb8KySaf5CqP_adllUNSNC0W-lVVzUYzw9L3ibnqfyAPaEznzEpVrES4z6ZLe5A-pHYKULzqiqyqMQHcJyEcRPolyD6gsy_cFhwkRFyIb4olRmeHmH8KwstyMqeBTlnfIupVBX0qv8A7M8Y0xZ0YzfkNsosP5Ipnx9iQvgeKV5bPj'
    },
    'MHG-HN-005': {
        id: 'MHG-HN-005',
        name: 'Honduran Mahogany',
        badge: 'Premium',
        badgeColor: 'bg-orange-500',
        description: 'Rich reddish-brown, excellent workability',
        unit: 'cu. ft',
        price: 3450,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHNvIZ2JzGASiSJ_g866jorkv2zVPvO7E-bBGb4HLecsSp8xBfw7Mvfk1sPnK-Wy1rdTn2Drs86mkuC3xUiycVs4Hc-s18tNurQbjVuSam52MtnThAGu24t4wsB9aeiPzaw7870M0lBtl4jdnCerZ5cF8EdEwGl1865BjRSJlaHQEpyqiGtHAopdWP1WGa78JfQPZacjrB0iWpPHE5GKo16KXugr9H6hwhhsXFrvnPOZmon0kE28kbcn3hiQt-UrXwYmKIH3wStr4_'
    },
    'TEK-BM-088': {
        id: 'TEK-BM-088',
        name: 'Burmese Teak',
        badge: 'Rare',
        badgeColor: 'bg-red-600',
        description: 'Golden Brown - Natural Finish',
        unit: 'cu. ft',
        price: 6800,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqwas7TA537qU3B4QPodg003VY0UIPLeZOGh9wIZi8A-EilVLkfb3mHqxtdn2e0tPzGEPpn1y9fO_bFUwVs_hRVOrUlEn7qJhxlIOlXAUkM8eHtOLPwsrPchp9gO8k1ZUXZufnoTZTEqfQGxyRh1zD2I04tXwYP0KPs-srE_YitOPexrw_U1lluCK8tk2vizMkklmYc111BMyNdsNjY1Xf37jI3r3TsyuWiEDVllEbeLjR74Hj2SeDLqkqAoGruteQnRteLlb6ZBX0'
    },
    'RSW-IN-006': {
        id: 'RSW-IN-006',
        name: 'Indian Rosewood',
        badge: 'Low Stock',
        badgeColor: 'bg-red-800',
        description: 'Deep purplish-brown, distinct grain',
        unit: 'cu. ft',
        price: 5200,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAraYvi_ZXB74eiklGrInRQxhphMPWiCP467L6dglxaUgSOOToBfQiMeGSD1JthY4k3YalLDzDvlnGI87muzuIbmgKMBXCPFdioWqN3syGLmRSqaKdhhzkqc7qsyEjlKhGnykkIfbtGilgboqZ8dAlqzV8G6XT7v7c0zHNt7LW4g7FKZZsE_C1yERgoj0wfUAvvaLUXQmZjxwuFGkzyMcTgl_ejB09WYwuy9pC_zdMUtCr4G5hHB0N2MwmBVERdSMiTQ962ycfOVfAq'
    },
    'OAK-AM-007': {
        id: 'OAK-AM-007',
        name: 'American White Oak',
        badge: '',
        badgeColor: '',
        description: 'Light brown, strong straight grain',
        unit: 'cu. ft',
        price: 2100,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_h6KtUvrvPmLda0EPcFVf-50CvjKzMYwBV5VIlXMgiG_CDy0DYIZ3M7z3pr8GqBKDNY_RsXQFN8-J-PJnDusMkj9Uwm1y9AdrhLnvWDIZ1qBokihbDPSQG6g5GMbreYCqZWPdhNRffAJmvWKYsR7PKGZeN64qJ_RRLAM9bx2e2d9lqFWc8jdUueV6w9JJDdz3xli15OGZMXSt0Dgt9oXj5Zeu2-Bg4gDdblHldo99-oAm_ih31RdAuBzyUz4oSzYdEkKVtH6RmFWU'
    },
    'EBN-GB-008': {
        id: 'EBN-GB-008',
        name: 'Gabon Ebony',
        badge: 'Luxury',
        badgeColor: 'bg-black',
        description: 'Jet black, incredibly dense & fine',
        unit: 'cu. ft',
        price: 12500,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYyyQLhn8SPPCVl9J6exIlfY3wyyvVQWrHY1BG3ODGA24QOtLKzMM1PiZGjMKFb1ZbpmVKmaY2eKal6fkHm0UE1n16Vl3nvwWnvk8URHbtc4Gmrlv5BuwlVPuyRtnaHfuOOzw92R3Poi5oA4DQgu4UX8Y6Z8sOvTthFI1u6Hfo5Q0ilcC9GJu3Qui2TxYP8G-qZuahRqAJ7XKx5eV7WceZH4uiTS19Y-sV3tJKO6kbB1wBYkp-JD0m7yYB8d19qZn5-aApmFOiN7AG'
    },
    'BLS-EC-042': {
        id: 'BLS-EC-042',
        name: 'Ecuadorian Balsa',
        badge: '',
        badgeColor: '',
        description: 'Kiln Dried - Planed',
        unit: 'cu. ft',
        price: 1200,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC-lI4kok3OXSZLOslF0rz92x__-lkKp4iPpZrtENCo7eWo141xVSQNv2gtZ6gzfL7-zDTZ8waUZisiL-GHAGxAJyY0rHpeg482-3AzA4DeCYZYvHfV-62d79Y_ukZzIhpWyc8QxhVyD0fbS2P8VpnecvOLANnqsOX_GLHC9I-QqriAcSd6OHecZEv_4n6iS6L9xAsMCpPEtM56P-A-b_PFcgeoyAQRIlmBTpPtyom6kjxL2ky2OcirK6vOvmrZyJYcp3Nh8DBUm6K'
    },
    'WLN-BL-009': {
        id: 'WLN-BL-009',
        name: 'Black Walnut',
        badge: '',
        badgeColor: '',
        description: 'Rich dark brown, smooth finish',
        unit: 'cu. ft',
        price: 4100,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNk6qNyduhpat4xnjivMIVfyJFqX5ua_8H_59aNbe3l7Mi_jdoV7coJMatKyVCQEAwLSsuyzeavGR5h-SgdkiBHnJqx45rC4hgsw8hOXi1Rf6q5GQPs5PrDrtZK_0WOFKx-FX74_TMyIfYdp0yYUIonm4eacGOypzpZv3Uyqs33pZA4JvUzrVC4UPpRie5NJAIZRngulQ8HVlOd9ju9hg3chIN8nKWPvu9tfZSROlWXHmmhm9VQEla6NNVPy0EkLNzOaAf3DJFxRQD'
    },
    'MPL-CN-010': {
        id: 'MPL-CN-010',
        name: 'Canadian Maple',
        badge: '',
        badgeColor: '',
        description: 'Creamy white, uniform texture',
        unit: 'cu. ft',
        price: 2800,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACPrbjrWoLvbLxGWS7rE-OpEo75nm7lSZF5Wu2JoJ10Qob4I0urj1QOrWTOLzMsnDJ-kiNTmJgmhnS-ychP3lYiDKp9DTxQSUZWaMBkS6zdtH5RHbVaFQ2XHYs5RD8FwFcc4tO0rCCKyYJpQDJB8XRUen16WKX35GjdeiFCvlkmf7tnHhssgANJfQbrmMaxgR2slu7vIL3AU-7IH9yXN6u4Kq2PjFAiCIHqDoN9AtWoAOb3OFJsSGcgNYNWOzmy7nqTQT8fnVSF_b8'
    },
    'C16-TR-011': {
        id: 'C16-TR-011',
        name: 'C16 Treated Structural',
        badge: 'Premium',
        badgeColor: 'bg-orange-500',
        description: '47mm x 100mm (2" x 4")',
        unit: 'length',
        price: 850,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyk9esOfeAnaFR0DA-ZA4Q6D9wPIJceFd7EETHWpXZjx_VqWsDysTwr2XoE7NGkCSlTY1O3aIWcPev7IpbwYCEDoM3W9XmfxMM98GjrQKXYLicLg-0uuYDzJY_S0qk_CGD9pUZK-d59c6NPjNBPEl_60B12KimzpzbDt6CRKOAch1CBap4Zj__yJKTIasknSLZ9dmYM_tyzMumC1HJNTZ1P4qCfi16c5N6MyLAdVGnXXTa6RkM5__J_fy1tjzbhRBspXoMTTTFYF1j'
    },
    'PLY-HW-012': {
        id: 'PLY-HW-012',
        name: 'Hardwood Plywood',
        badge: '',
        badgeColor: '',
        description: '18mm x 1220mm x 2440mm',
        unit: 'sheet',
        price: 3200,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8k9q36PNvfn0-f8WECCvH6iLdHfx_sNRGksCeV5rLaoUkMr8MWppec-ncay03IIv_MRz4LkYpWCJ2CGGKWgs-3M5tXIEWFR8_6GQ3H9Ew4bdvSvmQPEAcnoPcFhAFRUyfP40O3KemmnMngA6kL_qdh1gTFPQPNZnqGQzm0Vo0R5roIpbKe9q3xTO2q0lyH5A6roSByUNNpR8wE5ieRFK0WTo6lqfjBP1fv1CtJnWqJDMaGPHaOTyUvA1-VjguRT2X-G3cAIBYhYa'
    },
    'OSB-3B-013': {
        id: 'OSB-3B-013',
        name: 'OSB 3 Board T&G',
        badge: '',
        badgeColor: '',
        description: '18mm x 1220mm x 2440mm',
        unit: 'sheet',
        price: 1450,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw8BaOWFjzDC0SqRhypX82UwsMlUcz3bsZwmJjosj-xCR81a-F3PcrPLpAapoQ5VieZ2sBK1_Ty6vTwCRhDVDE78iiUhE3xfTRahmeWZkNBKyENw7wKiu11wR-6JreALL998Elhc_XLcWsFYq0I5t7G_O3bMZhKn108pOmSvuCHhb_L6DdppmmG2gdjrLQUmhQ00Sed1AVonRUSOl6rVikaY6fOXMJCaFhfi9JDWVfLbPc2IdKZnCKNOma0HIeIGe_yXFn9S-pjOz9'
    }
};

// ===== Cart Manager =====
const CartManager = {
    STORAGE_KEY: 'woodex-cart',
    WHATSAPP_NUMBER: '917012007553',

    getCart() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch { return []; }
    },

    saveCart(cart) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
        this.updateBadges();
    },

    addItem(productId, qty = 1) {
        const product = PRODUCTS[productId];
        if (!product) { console.warn('Product not found:', productId); return; }
        const cart = this.getCart();
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({ id: productId, qty: qty });
        }
        this.saveCart(cart);
        showToast(`${product.name} added to cart!`);
    },

    removeItem(productId) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== productId);
        this.saveCart(cart);
    },

    updateQty(productId, qty) {
        const cart = this.getCart();
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.qty = Math.max(1, qty);
            this.saveCart(cart);
        }
    },

    getTotal() {
        const cart = this.getCart();
        let totalQty = 0;
        let subtotal = 0;
        cart.forEach(item => {
            const product = PRODUCTS[item.id];
            if (product) {
                totalQty += item.qty;
                subtotal += product.price * item.qty;
            }
        });
        return { totalQty, subtotal };
    },

    getItemCount() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + item.qty, 0);
    },

    clearCart() {
        localStorage.removeItem(this.STORAGE_KEY);
        this.updateBadges();
    },

    updateBadges() {
        const count = this.getItemCount();
        document.querySelectorAll('.cart-count').forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    },

    // Build WhatsApp order message
    buildWhatsAppMessage(customerName) {
        const cart = this.getCart();
        if (cart.length === 0) return '';

        let msg = `🪵 *WOODEX - New Order*\n\n`;
        msg += `👤 *Customer:* ${customerName}\n`;
        msg += `📅 *Date:* ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}\n\n`;
        msg += `📦 *Order Details:*\n`;
        msg += `─────────────────\n`;

        cart.forEach((item, i) => {
            const product = PRODUCTS[item.id];
            if (product) {
                msg += `${i + 1}. *${product.name}*\n`;
                msg += `   ${product.description}\n`;
                msg += `   Ref: #${product.id}\n`;
                msg += `   Qty: ${item.qty} ${product.unit}\n\n`;
            }
        });

        msg += `─────────────────\n`;
        msg += `Please share the pricing details for this order. Thank you! 🙏`;

        return msg;
    },

    sendToWhatsApp(customerName) {
        const message = this.buildWhatsAppMessage(customerName);
        if (!message) return;
        const url = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
};


// ===== Dark Mode Toggle =====
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('woodex-theme', isDark ? 'dark' : 'light');
    const icon = document.querySelector('#theme-toggle .material-icons');
    if (icon) {
        icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    }
}

// Load saved theme
(function () {
    const savedTheme = localStorage.getItem('woodex-theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        const icon = document.querySelector('#theme-toggle .material-icons');
        if (icon) icon.textContent = 'light_mode';
    }
})();

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.querySelector('[onclick="toggleMobileMenu()"]');
    if (menu) {
        menu.classList.toggle('hidden');
        if (btn) {
            const icon = btn.querySelector('.material-icons');
            if (icon) icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
        }
    }
}

// ===== Active Navigation Link =====
(function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active', 'text-primary', 'dark:text-secondary');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active', 'text-primary', 'dark:text-secondary');
        } else {
            link.classList.add('text-gray-600', 'dark:text-gray-300');
        }
    });
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('text-primary', 'dark:text-secondary');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-primary', 'dark:text-secondary');
        } else {
            link.classList.add('text-gray-600', 'dark:text-gray-300');
        }
    });
})();

// ===== Scroll-triggered animations =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// ===== Navbar scroll effect =====
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    if (nav) {
        nav.classList.toggle('shadow-md', window.scrollY > 100);
    }
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Form Submission Handler =====
function handleFormSubmit(event, formName) {
    event.preventDefault();
    showToast('Thank you! Your message has been sent successfully.');
    event.target.reset();
}

// ===== Toast =====
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="material-icons">check_circle</span><span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ===== Add to Cart from product cards =====
function addToCartById(productId) {
    CartManager.addItem(productId, 1);
}

// Auto-attach add-to-cart handlers using data attributes
document.addEventListener('DOMContentLoaded', () => {
    // data-product-id buttons
    document.querySelectorAll('[data-product-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            addToCartById(btn.dataset.productId);
        });
    });

    // Fallback: any button with add_shopping_cart icon that doesn't have data-product-id
    document.querySelectorAll('button').forEach(btn => {
        if (btn.hasAttribute('data-product-id')) return;
        const icon = btn.querySelector('.material-icons');
        if (icon && icon.textContent.trim() === 'add_shopping_cart') {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // Try to find a product id from parent card
                const card = btn.closest('[data-card-id]');
                if (card) {
                    addToCartById(card.dataset.cardId);
                }
            });
        }
    });

    // Update cart badges on load
    CartManager.updateBadges();

    // Cart icon clicks → go to cart page
    document.querySelectorAll('#cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    });

    // Smooth page loading
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    });
});


// ===== CART PAGE RENDERER =====
function renderCartPage() {
    const cartItemsEl = document.getElementById('cart-items');
    const cartSummaryEl = document.getElementById('cart-summary');
    const emptyCartEl = document.getElementById('empty-cart');
    const cartContentEl = document.getElementById('cart-content');

    if (!cartItemsEl) return; // Not on cart page

    const cart = CartManager.getCart();

    if (cart.length === 0) {
        if (cartContentEl) cartContentEl.classList.add('hidden');
        if (emptyCartEl) emptyCartEl.classList.remove('hidden');
        return;
    }

    if (cartContentEl) cartContentEl.classList.remove('hidden');
    if (emptyCartEl) emptyCartEl.classList.add('hidden');

    // Render cart items
    let itemsHTML = '';
    let totalUnits = 0;

    cart.forEach(item => {
        const product = PRODUCTS[item.id];
        if (!product) return;
        const lineTotal = product.price * item.qty;
        totalUnits += item.qty;

        const badgeHTML = product.badge
            ? `<span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${product.badgeColor} text-white">${product.badge}</span>`
            : '';

        itemsHTML += `
        <div class="bg-surface-dark/50 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start transition-all hover:border-secondary/30" data-cart-item="${item.id}">
            <div class="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-1 w-full">
                <div class="flex justify-between items-start mb-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-display text-xl font-bold text-white">${product.name}</h3>
                        ${badgeHTML}
                    </div>
                    <button onclick="removeFromCart('${item.id}')" class="text-gray-500 hover:text-red-400 transition-colors p-1" title="Remove item">
                        <span class="material-icons">delete</span>
                    </button>
                </div>
                <p class="text-gray-400 text-sm">${product.description}</p>
                <p class="text-gray-500 text-xs mt-0.5">Ref: #${product.id}</p>
                <div class="flex flex-col sm:flex-row sm:items-end justify-between mt-4 gap-3">
                    <div>
                        <label class="text-gray-500 text-xs uppercase tracking-wider block mb-1.5">Quantity (${product.unit})</label>
                        <div class="flex items-center bg-gray-800 rounded-lg overflow-hidden border border-white/10">
                            <button onclick="changeQty('${item.id}', -1)" class="px-3 py-2 text-white hover:bg-white/10 transition-colors text-lg font-bold">−</button>
                            <span class="px-5 py-2 text-white font-bold text-center min-w-[50px] border-x border-white/10">${item.qty}</span>
                            <button onclick="changeQty('${item.id}', 1)" class="px-3 py-2 text-white hover:bg-white/10 transition-colors text-lg font-bold">+</button>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-secondary text-sm italic">Pricing discussed on WhatsApp</p>
                    </div>
                </div>
            </div>
        </div>`;
    });

    cartItemsEl.innerHTML = itemsHTML;

    // Update summary
    document.getElementById('cart-count-text').textContent = `You have ${cart.length} item${cart.length > 1 ? 's' : ''} in your cart.`;
    document.getElementById('summary-subtotal-label').textContent = `Total Items`;
    document.getElementById('summary-subtotal').textContent = `${totalUnits} unit${totalUnits > 1 ? 's' : ''}`;
    document.getElementById('summary-handling').textContent = 'TBD';
    document.getElementById('summary-tax').textContent = 'TBD';
    document.getElementById('summary-total').textContent = 'Discussed on WhatsApp';
}

function changeQty(productId, delta) {
    const cart = CartManager.getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        const newQty = item.qty + delta;
        if (newQty < 1) {
            removeFromCart(productId);
            return;
        }
        CartManager.updateQty(productId, newQty);
        renderCartPage();
    }
}

function removeFromCart(productId) {
    const product = PRODUCTS[productId];
    CartManager.removeItem(productId);
    renderCartPage();
    if (product) showToast(`${product.name} removed from cart`);
}

function handleCheckout() {
    const cart = CartManager.getCart();
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    const nameInput = document.getElementById('checkout-name');
    const customerName = nameInput ? nameInput.value.trim() : '';

    if (!customerName) {
        showToast('Please enter your name to place the order.');
        if (nameInput) {
            nameInput.focus();
            nameInput.classList.add('ring-2', 'ring-red-500');
            setTimeout(() => nameInput.classList.remove('ring-2', 'ring-red-500'), 2000);
        }
        return;
    }

    CartManager.sendToWhatsApp(customerName);
    showToast('Opening WhatsApp to place your order...');
}

// Run cart renderer if on cart page
document.addEventListener('DOMContentLoaded', renderCartPage);
