document.addEventListener('DOMContentLoaded', function() {
    const postsGrid = document.getElementById('posts-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    
    let currentFilter = 'Todos';
    let currentSearch = '';

    // Load posts
    function loadPosts() {
        postsGrid.innerHTML = '';
        let filtered = postsData.filter(post => {
            const matchesCategory = currentFilter === 'Todos' || post.category === currentFilter;
            const matchesSearch = post.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                 post.excerpt.toLowerCase().includes(currentSearch.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        filtered.forEach(post => {
            const card = createBlogCard(post, false);
            postsGrid.appendChild(card);
        });

        if (filtered.length === 0) {
            postsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; font-size: 1.25rem; color: #9ca3af;">Nenhum artigo encontrado.</p>';
        }
    }

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.category;
            loadPosts();
        });
    });

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value;
            loadPosts();
        });
    }

    // Mobile menu
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => nav.classList.toggle('active'));
    }

    // Initial load
    loadPosts();
});

function createBlogCard(post, featured = false) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
        <a href="artigo.html?slug=${post.slug}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
            <div class="blog-card-image">
                <img src="${post.image.startsWith('http') ? post.image : '../' + post.image}" alt="${post.title}">
                <div class="blog-card-badge font-cormorant">${post.category}</div>
                <div class="blog-card-overlay"></div>
            </div>
            <div class="blog-card-content">
                <h3 class="blog-card-title font-playfair">${post.title}</h3>
                <p class="blog-card-excerpt font-lora">${post.excerpt}</p>
                <div class="blog-card-meta font-lora">
                    <span>📅 ${post.date}</span>
                    <span>⏱️ ${post.readTime}</span>
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
