// Function to ensure Featured Ventures content is visible
function ensureFeaturedVenturesVisible() {
    console.log('Ensuring Featured Ventures content is visible...');
    
    const featuredSection = document.getElementById('ventures');
    if (featuredSection) {
        console.log('✅ Found ventures section');
        console.log('Section display style:', window.getComputedStyle(featuredSection).display);
        console.log('Section visibility:', window.getComputedStyle(featuredSection).visibility);
        console.log('Section opacity:', window.getComputedStyle(featuredSection).opacity);
        
        const featuredItems = featuredSection.querySelectorAll('.featured-item');
        console.log(`Found ${featuredItems.length} featured items`);
        
        featuredItems.forEach((item, index) => {
            console.log(`Processing featured item ${index + 1}:`, item);
            
            // Check current styles
            const currentOpacity = window.getComputedStyle(item).opacity;
            const currentTransform = window.getComputedStyle(item).transform;
            const currentDisplay = window.getComputedStyle(item).display;
            
            console.log(`Item ${index + 1} - Current opacity: ${currentOpacity}, transform: ${currentTransform}, display: ${currentDisplay}`);
            
            // Make sure the item is visible
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.classList.add('animate');
            
            // Verify the changes
            const newOpacity = window.getComputedStyle(item).opacity;
            const newTransform = window.getComputedStyle(item).transform;
            console.log(`Item ${index + 1} - New opacity: ${newOpacity}, transform: ${newTransform}`);
            
            console.log(`Made featured item ${index + 1} visible`);
        });
    } else {
        console.error('❌ Could not find ventures section');
    }
    
    // Also ensure all scroll-animate elements are visible as a fallback
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    console.log(`Making ${scrollAnimateElements.length} scroll-animate elements visible as fallback`);
    
    scrollAnimateElements.forEach((el, index) => {
        if (index < 10) { // Limit to first 10 to avoid spam
            const currentOpacity = window.getComputedStyle(el).opacity;
            const currentTransform = window.getComputedStyle(el).transform;
            
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.classList.add('animate');
            
            const newOpacity = window.getComputedStyle(el).opacity;
            const newTransform = window.getComputedStyle(el).transform;
            
            console.log(`Scroll animate element ${index + 1}: opacity ${currentOpacity} → ${newOpacity}, transform ${currentTransform} → ${newTransform}`);
        }
    });
}

// Test if JavaScript is working
console.log('JavaScript file loaded successfully');

// Simple test function
function testBasicFunctionality() {
    console.log('Testing basic functionality...');
    
    // Test DOM element selection
    const newsGrid = document.getElementById('latest-content');
    if (newsGrid) {
        console.log('✅ Found latest-content element:', newsGrid);
        console.log('Element classes:', newsGrid.className);
        console.log('Element display style:', window.getComputedStyle(newsGrid).display);
        console.log('Element is visible:', newsGrid.offsetParent !== null);
        
        // Test if we can modify the content
        const testDiv = document.createElement('div');
        testDiv.innerHTML = '<p style="color: red; font-weight: bold;">JavaScript is working! This is a test message.</p>';
        newsGrid.insertBefore(testDiv, newsGrid.firstChild);
        console.log('✅ Successfully added test content');
        
        // Remove test content after 3 seconds
        setTimeout(() => {
            if (testDiv.parentNode) {
                testDiv.parentNode.removeChild(testDiv);
                console.log('✅ Test content removed');
            }
        }, 3000);
        
    } else {
        console.error('❌ Could not find latest-content element');
    }
    
    // Test Featured Ventures section
    console.log('Testing Featured Ventures section...');
    const featuredSection = document.getElementById('ventures');
    if (featuredSection) {
        console.log('✅ Found ventures section:', featuredSection);
        console.log('Section display style:', window.getComputedStyle(featuredSection).display);
        console.log('Section is visible:', featuredSection.offsetParent !== null);
        
        const featuredItems = featuredSection.querySelectorAll('.featured-item');
        console.log(`Found ${featuredItems.length} featured items`);
        
        featuredItems.forEach((item, index) => {
            console.log(`Featured item ${index + 1}:`, item);
            console.log(`Item display style:`, window.getComputedStyle(item).display);
            console.log(`Item is visible:`, item.offsetParent !== null);
            console.log(`Item text content:`, item.textContent.substring(0, 100) + '...');
        });
    } else {
        console.error('❌ Could not find ventures section');
    }
    
    // Test scroll-animate elements
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    console.log(`Found ${scrollAnimateElements.length} scroll-animate elements`);
    
    scrollAnimateElements.forEach((el, index) => {
        if (index < 5) { // Only log first 5 to avoid spam
            console.log(`Scroll animate element ${index + 1}:`, el);
            console.log(`Element classes:`, el.className);
            console.log(`Element display style:`, window.getComputedStyle(el).display);
        }
    });
}

// Test DOM element selection
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, testing element selection...');
    testBasicFunctionality();
    
    // Ensure Featured Ventures content is visible
    ensureFeaturedVenturesVisible();
    
    // Also add a timeout fallback to ensure content is visible
    setTimeout(() => {
        console.log('Timeout fallback: Ensuring content is visible...');
        ensureFeaturedVenturesVisible();
    }, 2000);
    
    const testElement = document.getElementById('latest-content');
    if (testElement) {
        console.log('✅ Found latest-content element:', testElement);
        console.log('Element classes:', testElement.className);
        console.log('Element display style:', window.getComputedStyle(testElement).display);
    } else {
        console.error('❌ Could not find latest-content element');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Adding animate class to:', entry.target);
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.addEventListener('DOMContentLoaded', () => {
    console.log('Setting up scroll animations...');
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    console.log(`Found ${scrollAnimateElements.length} scroll-animate elements to observe`);
    
    scrollAnimateElements.forEach((el, index) => {
        observer.observe(el);
        console.log(`Observing element ${index + 1}:`, el);
    });
    
    // Also observe elements that might be added dynamically
    setTimeout(() => {
        const newScrollElements = document.querySelectorAll('.scroll-animate:not(.observed)');
        newScrollElements.forEach(el => {
            el.classList.add('observed');
            observer.observe(el);
            console.log('Observing new element:', el);
        });
    }, 1000);
});

// RSS Feed Integration with CORS proxy
async function loadRSSFeeds() {
    console.log('loadRSSFeeds function called');
    const newsGrid = document.getElementById('latest-content');
    if (!newsGrid) {
        console.error('Could not find element with id "latest-content"');
        return;
    }
    console.log('Found news grid element:', newsGrid);

    // Show loading state
    newsGrid.innerHTML = `
        <div class="news-item scroll-animate" style="grid-column: 1 / -1; text-align: center;">
            <div class="news-date">Loading...</div>
            <h4>Fetching Latest Content</h4>
            <p>Loading recent articles from GreenGround.it and Limited Liability Solutions...</p>
        </div>
    `;
    console.log('Loading state displayed');

    // Set a timeout to ensure content is always displayed
    const timeoutId = setTimeout(() => {
        console.log('Timeout reached, displaying fallback content');
        displayFallbackContent(newsGrid);
    }, 5000); // 5 second timeout

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

        console.log('Attempting to fetch RSS feeds...');
        // Fetch all feeds in parallel
        let allArticles = (
            await Promise.all(
                feeds.map(async (feed) => {
                    try {
                        console.log(`Fetching feed from ${feed.name}...`);
                        const response = await fetch(feed.url);
                        const data = await response.json();

                        if (data.status === 'ok' && data.items) {
                            console.log(`Successfully loaded ${data.items.length} items from ${feed.name}`);
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
                        } else {
                            console.warn(`Feed ${feed.name} returned invalid data:`, data);
                        }
                    } catch (error) {
                        console.warn(`Failed to load feed from ${feed.name}:`, error);
                    }

                    return [];
                })
            )
        ).flat();

        console.log(`Total articles loaded: ${allArticles.length}`);

        // Clear the timeout since we got a response
        clearTimeout(timeoutId);

        // Sort by date (newest first)
        allArticles.sort((a, b) => b.pubDate - a.pubDate);

        // Take the 6 most recent articles
        allArticles = allArticles.slice(0, 6);

        // Generate HTML for articles
        let articlesHTML = '';
        
        if (allArticles.length > 0) {
            console.log('Generating HTML for RSS articles');
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
            console.log('No RSS articles loaded, using fallback content');
            articlesHTML = generateFallbackContent();
        }

        newsGrid.innerHTML = articlesHTML;
        console.log('Content updated in news grid');

        // Re-observe new elements for animations
        document.querySelectorAll('#latest-content .news-item').forEach(el => {
            observer.observe(el);
        });

    } catch (error) {
        console.error('Error loading RSS feeds:', error);
        clearTimeout(timeoutId);
        // Display fallback content on error
        displayFallbackContent(newsGrid);
    }
}

// Function to generate fallback content
function generateFallbackContent() {
    return `
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

// Function to display fallback content
function displayFallbackContent(newsGrid) {
    console.log('Displaying fallback content');
    newsGrid.innerHTML = generateFallbackContent();
    
    // Re-observe new elements for animations
    document.querySelectorAll('#latest-content .news-item').forEach(el => {
        observer.observe(el);
    });
}

// Load content when page loads
window.addEventListener('load', () => {
    console.log('Page loaded, calling loadRSSFeeds...');
    loadRSSFeeds();
});

// Also try DOMContentLoaded as a backup
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded, calling loadRSSFeeds...');
    loadRSSFeeds();
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});