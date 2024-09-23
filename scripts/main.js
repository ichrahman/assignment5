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

// input validation
function inputValidation(donationAmount) {
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount greater than 0.');
        return false;
    }
    return true;
}

// display confirmation


// calculation

document.getElementById('btnNoakhali').addEventListener('click', () => {
    const donationAmount = parseFloat(document.getElementById('donationNoakhali').value);
    const currentBalance = document.getElementById('currentBalance');

    if (inputValidation(donationAmount)) {
        const amountNoakhali = document.getElementById('amountNoakhali');
        currentBalance.textContent = parseFloat(currentBalance.textContent) - donationAmount;


        amountNoakhali.textContent = parseFloat(amountNoakhali.textContent) + donationAmount;

        document.getElementById('donationNoakhali').value = '';
    }

})


document.getElementById('btnFeni').addEventListener('click', () => {
    const donationAmount = parseFloat(document.getElementById('donationFeni').value);
    const currentBalance = document.getElementById('currentBalance');

    if (inputValidation(donationAmount)) {
        const amountFeni = document.getElementById('amountFeni');
        currentBalance.textContent = parseFloat(currentBalance.textContent) - donationAmount;


        amountFeni.textContent = parseFloat(amountFeni.textContent) + donationAmount;

        document.getElementById('donationNoakhali').value = '';

        document.getElementById('donationFeni').value = '';
    }

})


document.getElementById('btnQuota').addEventListener('click', () => {
    const donationAmount = parseFloat(document.getElementById('donationQuota').value);
    const currentBalance = document.getElementById('currentBalance');

    if (inputValidation(donationAmount)) {
        const amountQuota = document.getElementById('amountQuota');
        currentBalance.textContent = parseFloat(currentBalance.textContent) - donationAmount;


        amountQuota.textContent = parseFloat(amountQuota.textContent) + donationAmount;

        document.getElementById('donationQuota').value = '';


    }
})