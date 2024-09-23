// toggle between active button

const donationButton = document.getElementById('donationButton');
const historyButton = document.getElementById('historyButton');

donationButton.addEventListener('click', () => {
    // Highlight Donation button
    donationButton.classList.add('bg-[#B4F461]', 'text-[#111111]');
    donationButton.classList.remove('bg-gray-300', 'text-black');

    // Reset History button
    historyButton.classList.remove('bg-[#B4F461]', 'text-white');
    historyButton.classList.add('bg-gray-300', 'text-black');
});

historyButton.addEventListener('click', () => {
    // Highlight History button
    historyButton.classList.add('bg-[#B4F461]', 'text-white');
    historyButton.classList.remove('bg-gray-300', 'text-black');

    // Reset Donation button
    donationButton.classList.remove('bg-[#B4F461]', 'text-white');
    donationButton.classList.add('bg-gray-300', 'text-black');
});



// blur when user scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('backdrop-blur-lg', 'bg-opacity-90', '!bg-[#F9F7F3]');
    } else {
        header.classList.remove('backdrop-blur-lg', 'bg-opacity-90');
    }
});


// navigate to blog page
document.getElementById('blogPage').addEventListener('click', function () {
    window.location.href = '../pages/blog.html';  // Replace with your target HTML page
});



// toggle display between donation and transaction history
function showSection(sectionId) {
    // Hide both sections
    document.getElementById('donationSection').style.display = 'none';
    document.getElementById('historySection').style.display = 'none';

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Initialize by showing the donation section by default
window.onload = function () {
    showSection('donationSection');
};