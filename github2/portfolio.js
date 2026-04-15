// All your site data - easily editable
const siteData = {
    name: "Borish",
    bio: "programmer & artist. making things for fun.",
    email: "borish357@gmail.com",
    
    // Projects
    projects: [
        {
            name: "tiny tool",
            icon: "🔧",
            description: "A simple utility for converting between formats",
            link: "https://interestcharge.com.au",
            year: "2026"
        },
        {
            name: "weather",
            icon: "🌤️",
            description: "Check weather from your terminal",
            link: "#",
            year: "2026"
        },
       
        {
            name: "discord bot",
            icon: "🤖",
            description: "Fun utility bot for small servers",
            link: "#",
            year: "2026"
        },
      
    ],
    
    quickFacts: [
        "𝐢 𝐜𝐨𝐝𝐞 𝐢𝐧 𝐣𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭, 𝐩𝐲𝐭𝐡𝐨𝐧, 𝐚𝐧𝐝 𝐬𝐨𝐦𝐞𝐭𝐢𝐦𝐞𝐬 𝐜𝐩𝐩 ",     
        "𝐢 𝐥𝐢𝐤𝐞 𝐦𝐚𝐤𝐢𝐧𝐠 𝐭𝐨𝐨𝐥𝐬, 𝐛𝐨𝐭𝐬, 𝐚𝐧𝐝 𝐭𝐢𝐧𝐲 𝐰𝐞𝐛 𝐭𝐡𝐢𝐧𝐠𝐬",   
        "𝐍𝐢𝐠𝐡𝐭 𝐨𝐰𝐥 𝐰𝐡𝐨 𝐩𝐞𝐫𝐟𝐞𝐫𝐬 𝐭𝐨 𝐰𝐨𝐫𝐤 𝐥𝐚𝐭𝐞 𝐢𝐧𝐭𝐨 𝐭𝐡𝐞 𝐧𝐢𝐠𝐡𝐭",        
        "𝐀𝐥𝐰𝐚𝐲𝐬 𝐡𝐚𝐯𝐞 𝐦𝐮𝐬𝐢𝐜 𝐩𝐥𝐚𝐲𝐢𝐧𝐠 𝐢𝐧 𝐭𝐡𝐞 𝐛𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝"
    ]
};

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    populateContent();
    updateSidebar();
});

// Navigation between pages
function initNavigation() {
    const navLinks = document.querySelectorAll('[data-page]');
    const pages = document.querySelectorAll('.page');
    
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        
        // Show selected page
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active');
        }
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });
        
        // Update URL hash
        if (pageId !== 'HOME') {
            history.pushState(null, null, `#${pageId}`);
        } else {
            history.pushState(null, null, '#');
        }
        
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
    
    // Add click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(link.dataset.page);
        });
    });
    
    // Handle initial hash
    const hash = window.location.hash.slice(1);
    if (hash && document.getElementById(hash)) {
        showPage(hash);
    }
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1);
        showPage(hash || 'home');
    });
}

// Populate all dynamic content
function populateContent() {
    // Quick facts on home page
    const factsList = document.getElementById('factsList');
    if (factsList) {
        factsList.innerHTML = siteData.quickFacts
            .map(fact => `<li>${fact}</li>`)
            .join('');
    }
    
    // Project preview (first 3)
    const projectPreview = document.getElementById('projectPreview');
    if (projectPreview) {
        projectPreview.innerHTML = siteData.projects.slice(0, 3)
            .map(project => `
                <div class="project-item">
                    <div class="project-title">
                        <span class="project-icon">${project.icon}</span>
                        <a href="${project.link}">${project.name}</a>
                    </div>
                    <div class="project-meta">${project.year}</div>
                    <div class="project-desc">${project.description}</div>
                </div>
            `).join('');
    }
    
    // Full project list
    const projectList = document.getElementById('projectList');
    if (projectList) {
        projectList.innerHTML = siteData.projects
            .map(project => `
                <div class="project-item">
                    <div class="project-title">
                        <span class="project-icon">${project.icon}</span>
                        <a href="${project.link}">${project.name}</a>
                    </div>
                    <div class="project-meta">${project.year}</div>
                    <div class="project-desc">${project.description}</div>
                </div>
            `).join('');
    }
}

// Update sidebar with data
function updateSidebar() {
    const nameEl = document.querySelector('.sidebar h1');
    const bioEl = document.querySelector('.bio');
    const emailLink = document.querySelector('a[href^="mailto:"]');
    
    if (nameEl) nameEl.textContent = siteData.name;
    if (bioEl) bioEl.textContent = siteData.bio;
    if (emailLink) emailLink.href = `mailto:${siteData.email}`;
}