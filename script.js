document.getElementById("generate-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const project = document.getElementById("project").value;
    generateLetter(name, project);
});

function generateLetter(name, project) {
    if (!name || !project) {
        alert("Please enter your name and project.");
        return;
    }

    const letterContainer = document.getElementById("letter-container");
    const letterContent = document.getElementById("letter-content");
    const downloadBtn = document.getElementById("download-btn");

    const letterText = `Headquarters of NASA
Document No. ${Math.floor(Math.random() * 100000)}

Dear ${name},

We at NASA have been following your work on "${project}" with great interest. We believe it is crucial for the advancement of space exploration and research. Your dedication and passion have not gone unnoticed, and we are confident that you will make significant strides in this field.

The "${project}" project has the potential to open up new horizons and change our understanding of the universe. We encourage you to continue your efforts and look forward to seeing the impact of your work on our mission to explore the cosmos.

With best regards,


Dr. Jane Smith
Head of the Department of Space Research`;

    letterContent.innerHTML = `<pre>${letterText}</pre>`;

    letterContainer.classList.remove("hidden");
    downloadBtn.classList.remove("hidden");
    document.getElementById("share-btn").classList.remove("hidden");
}

document.getElementById("download-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const letterContainer = document.getElementById("letter-container");
    html2canvas(letterContainer).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');
        
        // Create a download link for the image
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'fake_nasa_letter.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

// Add the event listener for the share button
document.getElementById("share-btn").addEventListener("click", function (event) {
    event.preventDefault();
    shareLetter();
});

// Implement the share functionality
function shareLetter() {
    if (navigator.share) {
        navigator.share({
            title: 'Fake NASA Letter',
            text: 'Check out my fake NASA letter!',
            url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        alert("Sorry, your browser doesn't support the Web Share API.");
    }
}
