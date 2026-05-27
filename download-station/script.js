let adClicked = false;

// Get the redirect_to parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const redirectTo = urlParams.get('redirect_to');

document.querySelectorAll('.ad-box').forEach(ad => {
    ad.addEventListener('click', function() {
        if (!adClicked) {
            adClicked = true;
            this.classList.add('clicked');
            document.getElementById('ad-message').innerHTML = '&#x2705; Access granted! Click the button to download';
            document.getElementById('btn-download-now').disabled = false;
        }
    });
});

document.getElementById('btn-download-now').addEventListener('click', function() {
    // If the redirect_to parameter exists, redirect the user
    if (redirectTo) {
        window.location.href = redirectTo;
    } else {
        // Simulating a direct file download
        const downloadUrl = 'https://www.example.com/download'; // Replace with the real download link
        const anchor = document.createElement('a');
        anchor.href = downloadUrl;
        anchor.download = 'file_name'; // Name of the download file
        anchor.click();
    }
});
