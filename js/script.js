// ==========================================
// FEATURE 1: State Management (Dark Mode)
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggleBtn.innerText = '☀️ Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
    const isDarkMode = body.getAttribute('data-theme') === 'dark';
    if (isDarkMode) {
        body.removeAttribute('data-theme');
        themeToggleBtn.innerText = '🌙 Dark Mode';
        localStorage.setItem('portfolio-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerText = '☀️ Light Mode';
        localStorage.setItem('portfolio-theme', 'dark');
    }
});

// ==========================================
// FEATURE 2: API Integration (GitHub Repos)
// ==========================================
// Replace this username if you want to pull from a different account
const githubUsername = 'Ziyadalharbi-kf';
const projectsContainer = document.getElementById('github-projects');

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=4`);
        
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const repos = await response.json();
        
        // Clear loading message
        projectsContainer.innerHTML = '';

        if (repos.length === 0) {
            projectsContainer.innerHTML = '<p>No public repositories found.</p>';
            return;
        }

        // Loop through data and create cards dynamically
        repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available for this repository.'}</p>
                <a href="${repo.html_url}" target="_blank" class="repo-link">View on GitHub →</a>
            `;
            projectsContainer.appendChild(card);
        });

    } catch (error) {
        // Error handling for failed API calls
        projectsContainer.innerHTML = `<p class="error">Oops! Could not load projects right now. Please try again later.</p>`;
        console.error("API Error:", error);
    }
}

// Call the function when script loads
fetchGitHubProjects();

// ==========================================
// FEATURE 3: Complex Logic (Advanced Validation)
// ==========================================
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const messageValue = document.getElementById('message').value.trim();

    formFeedback.classList.remove('hidden', 'success', 'error');

    // Step 1: Check for empty fields
    if (nameValue === '' || emailValue === '' || messageValue === '') {
        formFeedback.textContent = 'Error: Please fill out all fields before submitting.';
        formFeedback.classList.add('error');
        return; // Stop the function here
    } 

    // Step 2: Advanced Logic - Email Regex Validation
    // This checks that the email has characters, an @ symbol, and a domain extension
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        formFeedback.textContent = 'Error: Please enter a valid email address (e.g., you@example.com).';
        formFeedback.classList.add('error');
        return; // Stop the function here
    }

    // Step 3: Success state
    formFeedback.textContent = `Thank you, ${nameValue}! Your message has been validated and sent successfully.`;
    formFeedback.classList.add('success');
    contactForm.reset();
});