// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Load categories on home page
    const categoriesGrid = document.getElementById('categories-grid');
    if (categoriesGrid && typeof categories !== 'undefined') {
        categories.forEach(cat => {
            const card = createCategoryCard(cat);
            categoriesGrid.appendChild(card);
        });
    }

    // Load featured posts
    const featuredContainer = document.getElementById('featured-posts');
    if (featuredContainer && typeof postsData !== 'undefined') {
        const featured = postsData.filter(p => p.featured);
        featured.forEach(post => {
            const card = createBlogCard(post, true);
            featuredContainer.appendChild(card);
        });
    }

    // Load latest posts
    const latestContainer = document.getElementById('latest-posts');
    if (latestContainer && typeof postsData !== 'undefined') {
        postsData.slice(0, 6).forEach(post => {
            const card = createBlogCard(post, false);
            latestContainer.appendChild(card);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .blog-card, .category-card').forEach(el => {
        observer.observe(el);
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.footer-newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert('Obrigada por se inscrever! Em breve você receberá nossas novidades em: ' + email);
            this.reset();
        });
    }
});

// Create Category Card
function createCategoryCard(cat) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
        <a href="pages/blog.html?category=${encodeURIComponent(cat.name)}">
            <img src="${cat.image}" alt="${cat.name}">
            <div class="category-overlay"></div>
            <div class="category-content">
                <div class="category-icon">${cat.icon}</div>
                <h3 class="category-name font-playfair">${cat.name}</h3>
                <p class="category-count font-lora">${cat.count} ${cat.count === 1 ? 'artigo' : 'artigos'}</p>
            </div>
        </a>
    `;
    return card;
}

// Create Blog Card
function createBlogCard(post, featured = false) {
    const card = document.createElement('div');
    card.className = featured ? 'blog-card blog-card-featured' : 'blog-card';
    card.innerHTML = `
        <a href="pages/artigo.html?slug=${post.slug}" style="text-decoration: none; color: inherit; display: flex; flex-direction: ${featured ? 'row' : 'column'}; height: 100%;">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-card-badge font-cormorant">${post.category}</div>
                <div class="blog-card-overlay"></div>
            </div>
            <div class="blog-card-content">
                <h3 class="blog-card-title font-playfair">${post.title}</h3>
                <p class="blog-card-excerpt font-lora">${post.excerpt}</p>
                <div class="blog-card-meta font-lora">
                    <span class="blog-card-meta-item">📅 ${post.date}</span>
                    <span class="blog-card-meta-item">⏱️ ${post.readTime}</span>
                </div>
                <div class="blog-card-author">
                    <img src="${post.author.avatar}" alt="${post.author.name}">
                    <span class="blog-card-author-name font-lora">${post.author.name}</span>
                </div>
            </div>
        </a>
    `;
    return card;
}
