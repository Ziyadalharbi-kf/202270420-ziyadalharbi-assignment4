# AI Usage Report - Assignment 3

## Tools Used & Use Cases
- **Gemini (Google):** Used as a debugging assistant to troubleshoot asynchronous JavaScript (`async/await`) and to help refine Regular Expressions for form validation.

## Specific Implementations
1. **Troubleshooting API Fetch:** I was encountering errors when trying to pull data from the GitHub API. I used AI to help me understand how to properly structure the `try/catch` block and format the response as JSON so it would display correctly in the DOM.
2. **Regex Debugging:** Writing the exact string of characters to validate an email address is tricky. I used AI to explain how the `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` pattern works to ensure the user includes an '@' and a domain extension.
3. **Performance Tips:** I asked the AI for quick ways to improve page load speed without changing my entire structure, and it suggested using the `defer` attribute on my script tag.

## Benefits & Challenges
- **Benefits:** The AI was excellent for explaining complex concepts like `Promises` and `Regex` in plain English, which saved me from having to read through dense documentation just to fix a minor bug.
- **Challenges:** The AI sometimes provided overly complex solutions (like suggesting I use external libraries). I had to refine my prompts to force it to use basic, vanilla JavaScript to meet the assignment requirements.

## Responsible Use & Modifications
I built the structure and wrote the core functionality myself. I only utilized AI to verify my syntax, explain why a specific piece of code was failing, and suggest minor optimization tweaks. I ensured I fully understood the `fetch` workflow before implementing the API integration into my final project.