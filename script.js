const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

// Add event listener to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show the targeted section
        const target = link.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});
