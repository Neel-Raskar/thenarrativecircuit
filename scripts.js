// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and message elements
    const clickButton = document.getElementById('clickButton');
    const message = document.getElementById('message');
    
    // Add click event listener to the button
    clickButton.addEventListener('click', function() {
        const clickCount = parseInt(clickButton.dataset.clicks || 0) + 1;
        clickButton.dataset.clicks = clickCount;
        
        message.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
        
        // Add a simple animation effect
        clickButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickButton.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Add some console log for debugging
    console.log('Simple website loaded successfully!');
    
    // You can add more interactive features here
});

// Example of a simple utility function
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Display current date (optional feature)
window.addEventListener('load', function() {
    const currentDate = formatDate(new Date());
    console.log('Today is:', currentDate);
});