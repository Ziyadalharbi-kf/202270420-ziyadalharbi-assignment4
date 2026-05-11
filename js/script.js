// ==========================================
// FEATURE: Innovation (Typewriter Effect)
// ==========================================
const words = ["Student at KFUPM", "Aspiring Web Developer", "Tech Enthusiast"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('typewriter').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('typewriter').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
    // Wait 2 seconds before deleting
	setTimeout(loopDeleting, 2000);
};

// Start the typewriter
typingEffect();


// ==========================================
// FEATURE: State Management (Dark Mode)
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
// FEATURE: API Integration (GitHub Repos)
// ==========================================
const githubUsername = 'Ziyadalharbi-kf';
const projectsContainer = document.getElementById('github-projects');

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=4`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const repos = await response.json();
        
        projectsContainer.innerHTML = '';
        if (repos.length === 0) {
            projectsContainer.innerHTML = '<p>No public repositories found.</p>';
            return;
        }

        repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available.'}</p>
                <a href="${repo.html_url}" target="_blank" class="repo-link">View on GitHub →</a>
            `;
            projectsContainer.appendChild(card);
        });
    } catch (error) {
        projectsContainer.innerHTML = `<p class="error">Oops! Could not load projects right now.</p>`;
        console.error("API Error:", error);
    }
}
fetchGitHubProjects();

// ==========================================
// FEATURE: Complex Logic (Advanced Validation)
// ==========================================
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const messageValue = document.getElementById('message').value.trim();

    formFeedback.classList.remove('hidden', 'success', 'error');

    if (nameValue === '' || emailValue === '' || messageValue === '') {
        formFeedback.textContent = 'Error: Please fill out all fields before submitting.';
        formFeedback.classList.add('error');
        return; 
    } 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        formFeedback.textContent = 'Error: Please enter a valid email address (e.g., you@example.com).';
        formFeedback.classList.add('error');
        return; 
    }

    formFeedback.textContent = `Thank you, ${nameValue}! Your message has been sent successfully.`;
    formFeedback.classList.add('success');
    contactForm.reset();
});