// TypeScript code for basic interactivity
document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLDivElement;

    // Initialize skills section as visible
    let skillsVisible = true;

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsVisible) {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        } else {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        skillsVisible = !skillsVisible;
    });
});
