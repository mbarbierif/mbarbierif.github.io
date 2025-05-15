// Main JavaScript file for the blog

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const blogGrid = document.getElementById('blog-grid');
    const postOverlay = document.getElementById('post-overlay');
    const postContent = document.getElementById('post-content');
    const closeOverlay = document.getElementById('close-overlay');
    const searchInput = document.getElementById('search-input');
    const tagFilters = document.getElementById('tag-filters');
    
    // State variables
    let blogPosts = [];
    let activeTags = new Set();
    
    // Initialize the blog
    initBlog();
    
    // Event listeners
    closeOverlay.addEventListener('click', () => {
        postOverlay.classList.remove('active');
        // Update URL back to home when closing the post
        history.pushState({}, '', '/');
    });
    
    searchInput.addEventListener('input', filterPosts);
    
    // Functions
    async function initBlog() {
        try {
            // Fetch the blog posts index
            const response = await fetch('blog/index.json');
            const data = await response.json();
            blogPosts = data.posts;
            
            // Check if URL has a post slug to display directly
            const urlParams = new URLSearchParams(window.location.search);
            const postSlug = urlParams.get('post');
            
            // Render posts and collect all unique tags
            const allTags = new Set();
            
            // Clear loading message
            blogGrid.innerHTML = '';
            
            // Create cards for each post
            blogPosts.forEach(post => {
                createPostCard(post);
                
                // Collect tags
                post.tags.forEach(tag => allTags.add(tag));
            });
            
            // Create tag filters
            createTagFilters(allTags);
            
            // If URL has a post slug, display that post
            if (postSlug) {
                const post = blogPosts.find(p => p.slug === postSlug);
                if (post) {
                    displayPost(post);
                }
            }
            
        } catch (error) {
            console.error('Error loading blog posts:', error);
            blogGrid.innerHTML = '<p class="error">Failed to load blog posts. Please try again later.</p>';
        }
    }
    
    function createPostCard(post) {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.dataset.slug = post.slug;
        
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="card-image">
            <div class="card-content">
                <h2 class="card-title">${post.title}</h2>
                <div class="card-date">${formatDate(post.date)}</div>
                <p class="card-description">${post.description}</p>
                <div class="card-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            displayPost(post);
        });
        
        blogGrid.appendChild(card);
    }
    
    async function displayPost(post) {
        try {
            // Fetch the post content
            const response = await fetch(`blog/${post.slug}/content.md`);
            const mdContent = await response.text();
            
            // Convert markdown to HTML using marked.js
            const htmlContent = marked.parse(mdContent);
            
            // Update overlay content
            postContent.innerHTML = `
                <div class="post-header">
                    <h1 class="post-title">${post.title}</h1>
                    <div class="post-meta">
                        <span class="post-date">${formatDate(post.date)}</span>
                    </div>
                    <img src="${post.image}" alt="${post.title}" class="post-image">
                </div>
                <div class="post-content">
                    ${htmlContent}
                </div>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
            
            // Show overlay
            postOverlay.classList.add('active');
            
            // Update URL with post slug
            history.pushState({post: post.slug}, post.title, `?post=${post.slug}`);
            
            // Update page title
            document.title = `${post.title} - My Personal Blog`;
            
        } catch (error) {
            console.error('Error loading post content:', error);
            alert('Failed to load the post content. Please try again later.');
        }
    }
    
    function createTagFilters(tags) {
        tagFilters.innerHTML = '';
        
        tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            
            tagElement.addEventListener('click', () => {
                tagElement.classList.toggle('active');
                
                if (tagElement.classList.contains('active')) {
                    activeTags.add(tag);
                } else {
                    activeTags.delete(tag);
                }
                
                filterPosts();
            });
            
            tagFilters.appendChild(tagElement);
        });
    }
    
    function filterPosts() {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.blog-card');
        
        cards.forEach(card => {
            const post = blogPosts.find(p => p.slug === card.dataset.slug);
            
            // Check if post matches search term
            const matchesSearch = 
                post.title.toLowerCase().includes(searchTerm) || 
                post.description.toLowerCase().includes(searchTerm);
            
            // Check if post has active tags (if any are selected)
            const matchesTags = 
                activeTags.size === 0 || 
                post.tags.some(tag => activeTags.has(tag));
            
            // Show or hide card based on filters
            if (matchesSearch && matchesTags) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        const urlParams = new URLSearchParams(window.location.search);
        const postSlug = urlParams.get('post');
        
        if (postSlug) {
            const post = blogPosts.find(p => p.slug === postSlug);
            if (post) {
                displayPost(post);
            }
        } else {
            postOverlay.classList.remove('active');
            document.title = 'My Personal Blog';
        }
    });
});