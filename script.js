
// Function to show/hide the button
window.onscroll = function () {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
};

// Function to scroll to the top
document.getElementById('backToTop').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
