// Smooth scrolling for navigation links
document.querySelectorAll(‘a[href^="#"]’).forEach(anchor => {
anchor.addEventListener(‘click’, function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute(‘href’));
if (target) {
target.scrollIntoView({
behavior: ‘smooth’,
block: ‘start’
});
}
});
});

// Scroll-based animations
const observerOptions = {
threshold: 0.1,
rootMargin: ‘0px 0px -50px 0px’
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add(‘animate’);
}
});
}, observerOptions);

// Observe all scroll-animate elements
document.querySelectorAll(’.scroll-animate’).forEach(el => {
observer.observe(el);
});

// RSS Feed Integration with CORS proxy
async function loadRSSFeeds() {
const newsGrid = document.getElementById(‘latest-content’);
if (!newsGrid) return;

```
// Show loading state
newsGrid.innerHTML = `
    <div class="news-item scroll-animate" style="grid-column: 1 / -1; text-align: center;">
        <div class="news-date">Loading...</div>
        <h4>Fetching Latest Content</h4>
        <p>Loading recent articles from GreenGround.it and Limited Liability Solutions...</p>
    </div>
`;

try {
    // Use RSS2JSON service as a CORS proxy
    const feeds = [
        {
            name: 'GreenGround.it',
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https://greenground.it/feed',
            description: 'Daily Insights for a Smarter Tomorrow',
            color: 'var(--netflix-red)',
            link: 'https://greenground.it'
        },
        {
            name: 'Limited Liability Solutions',
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https://limitedliability.solutions/feed',
            description: 'M&A, Turnaround & Digital Advisory',
            color: 'var(--netflix-red)',
            link: 'https://limitedliability.solutions'
        }
    ];

    // Fetch all feeds in parallel
    let allArticles = (
        await Promise.all(
            feeds.map(async (feed) => {
                try {
                    const response = await fetch(feed.url);
                    const data = await response.json();

                    if (data.status === 'ok' && data.items) {
                        // Process first 3 items from each feed
                        return data.items.slice(0, 3).map(item => ({
                            title: item.title,
                            description: item.description ?
                                item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...' :
                                'Read more about this article...',
                            link: item.link,
                            pubDate: new Date(item.pubDate),
                            source: feed.name,
                            sourceColor: feed.color,
                            sourceLink: feed.link
                        }));
                    }
                } catch (error) {
                    console.warn(`Failed to load feed from ${feed.name}:`, error);
                }

                return [];
            })
        )
    ).flat();

    // Sort by date (newest first)
    allArticles.sort((a, b) => b.pubDate - a.pubDate);

    // Take the 6 most recent articles
    allArticles = allArticles.slice(0, 6);

    // Generate HTML for articles
    let articlesHTML = '';
    
    if (allArticles.length > 0) {
        allArticles.forEach(article => {
            const formattedDate = article.pubDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            articlesHTML += `
                <div class="news-item scroll-animate">
                    <div class="news-date" style="color: ${article.sourceColor}">${formattedDate} • ${article.source}</div>
                    <h4>${article.title}</h4>
                    <p>${article.description}</p>
                    <a href="${article.link}" target="_blank" style="color: ${article.sourceColor}; text-decoration: none; font-weight: 600;">Read More →</a>
                </div>
            `;
        });
    } else {
        // Fallback content if RSS feeds fail
        articlesHTML = `
            <div class="news-item scroll-animate">
                <div class="news-date" style="color: var(--netflix-red)">Recent</div>
                <h4>Daily Insights for a Smarter Tomorrow</h4>
                <p>Stay updated with the latest in technology, innovation, and business insights from GreenGround.it - covering everything from tech trends to digital transformation.</p>
                <a href="https://greenground.it" target="_blank" style="color: var(--netflix-red); text-decoration: none; font-weight: 600;">Visit GreenGround →</a>
            </div>
            
            <div class="news-item scroll-animate">
                <div class="news-date" style="color: var(--netflix-red)">Business</div>
                <h4>Limited Liability Solutions: M&A Excellence</h4>
                <p>Boutique management consulting focused on M&A, turnaround strategies, and digital advisory services. Helping businesses navigate complex challenges across Europe.</p>
                <a href="https://limitedliability.solutions" target="_blank" style="color: var(--netflix-red); text-decoration: none; font-weight: 600;">Explore Solutions →</a>
            </div>
            
            <div class="news-item scroll-animate">
                <div class="news-date">August 2025</div>
                <h4>The Future of Ethical AI in Investment Decisions</h4>
                <p>How artificial intelligence can be leveraged responsibly to identify investment opportunities that create both financial returns and positive social impact...</p>
            </div>
            
            <div class="news-item scroll-animate">
                <div class="news-date">July 2025</div>
                <h4>Growth Hacking with Purpose: Sustainable Scaling Strategies</h4>
                <p>Moving beyond traditional growth metrics to build businesses that scale sustainably while maintaining ethical standards and social responsibility...</p>
            </div>
            
            <div class="news-item scroll-animate">
                <div class="news-date">June 2025</div>
                <h4>Blockchain for Social Good: Real-World Applications</h4>
                <p>Exploring how blockchain technology can be applied to solve real social and environmental challenges, from supply chain transparency to fair trade...</p>
            </div>
            
            <div class="news-item scroll-animate">
                <div class="news-date">May 2025</div>
                <h4>The Milan Startup Ecosystem: Opportunities and Challenges</h4>
                <p>An insider's perspective on the evolving entrepreneurial landscape in Milan and Northern Italy, with insights for international investors and founders...</p>
            </div>
        `;
    }

    newsGrid.innerHTML = articlesHTML;

    // Re-observe new elements for animations
    document.querySelectorAll('#latest-content .news-item').forEach(el => {
        observer.observe(el);
    });

} catch (error) {
    console.error('Error loading RSS feeds:', error);
    // Keep the fallback content in case of total failure
}
```

}

// Load content when page loads
window.addEventListener(‘load’, () => {
loadRSSFeeds();
});

// Header background on scroll
window.addEventListener(‘scroll’, () => {
const header = document.querySelector(‘header’);
if (window.scrollY > 100) {
header.classList.add(‘scrolled’);
} else {
header.classList.remove(‘scrolled’);
}
});