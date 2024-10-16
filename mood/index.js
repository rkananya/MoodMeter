
const emotionButtons = document.querySelectorAll('.emotion');
const bodybg = document.body;
let previousButton = null;
const quoteDisplay = document.getElementById('quote');
const remedy = document.getElementById("remedy");
const toggleBtn = document.getElementById('toggleBtn');
const sidePanel = document.getElementById('sidePanel');
const closeBtn = document.getElementById('closeBtn');
const dataDiv = document.getElementById("data");


// Toggle side panel
document.addEventListener('DOMContentLoaded', () => {
    const emotionButtons = document.querySelectorAll('.emotion');
    const toggleBtn = document.getElementById('toggleBtn');
    const closeBtn = document.getElementById('closeBtn');

    // Add event listeners after DOM is loaded
    emotionButtons.forEach(button => button.addEventListener('click', changeBg));
    toggleBtn.addEventListener('click', toggleBtn);
    closeBtn.addEventListener('click', closeBtn);

    // Initialize entries display
    displayEntries();
});

toggleBtn.addEventListener('click', () => {
    if (sidePanel.style.left === '0px') {
        sidePanel.style.left = '-350px';
    } else {
        sidePanel.style.left = '0px';
    }
});

// Close side panel
closeBtn.addEventListener('click', () => {
    sidePanel.style.left = '-350px';
});

// Change background and display emotion-specific content
function changeBg(event) {
    let button = event.target;
    if (button.tagName === 'SPAN') {
        button = button.parentElement;
    }
    button.style.background = 'rgb(113, 19, 125)';
    button.style.color = '#fff';

    if (previousButton) {
        previousButton.style.background = 'none';
        previousButton.style.color = 'initial';
        remedy.innerHTML = null;
    }

    previousButton = button;
    const emotion = button.getAttribute('data-emotion');

    if (!emotion) {
        console.error('Emotion not found');
        return;
    }
let moodValue=0;
    // Update background and remedy content based on emotion
    switch (emotion) {
        case 'happy':
            bodybg.style.background = 'linear-gradient(109.6deg, rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1%)';
            let html = "<img src='https://th.bing.com/th/id/R.afcb2bc2407ee2bf00a8b84f96e6d5f7?rik=Ybv%2br4A51hJLgw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffairy-silhouette-cutouts%2ffairy-silhouette-cutouts-10.png&ehk=IX%2fFPmeFOM1FdeD4VWyqvDM89sDHWcEdfSTlxLkQGPQ%3d&risl=&pid=ImgRaw&r=0' alt='joy' style='border-radius: 50%; height:150px; width:100px;'>";
            remedy.insertAdjacentHTML("afterbegin", html);
            remedy.insertAdjacentHTML("beforeend", "How about celebrating that or do something that you love!");
            moodValue=6;
            break;
        case 'sad':
            bodybg.style.background = 'linear-gradient(339deg, #8EC5FC 0%, #E0C3FC 100%)';
            let sad = "<img src='https://freepngdesign.com/content/uploads/images/sadness-inside-out-5616132946.png' alt='sadness' style='border-radius: 50%; height:120px; width:135px;'>";
            remedy.insertAdjacentHTML("afterbegin", sad);
            remedy.insertAdjacentHTML("beforeend", "OH! How about just tuning into music! or Just let your feelings to someone or how about we exercise?");
            moodValue=5;
            break;
        case 'anger':
            bodybg.style.background = 'linear-gradient(68.3deg, rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2%)';
            let anger = "<img src='https://th.bing.com/th/id/R.9aed19eb20ced67feeea96f024b218c9?rik=vrm8bkEjrKDopw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fanger-inside-out-transparent%2fanger-inside-out-transparent-3.png&ehk=P4OgCH6ERYIV5kXPHV21KcCOj1OMQ%2bHltkNMXQDmLio%3d&risl=&pid=ImgRaw&r=0' alt='anger' style='border-radius: 50%; height:100px; width:100px;'>";
            remedy.insertAdjacentHTML("afterbegin", anger);
            remedy.insertAdjacentHTML("beforeend", "Oh Dear! Maybe go out for a walk and enjoy nature? or Just ignore and listen to how your heart passionately beats for you!");
            moodValue=4;
            break;
        case 'disgust':
            bodybg.style.background = 'linear-gradient(135deg, #FFF720 10%, #3CD500 100%)';
            let disgust = "<img src='https://vignette.wikia.nocookie.net/parody/images/9/94/Inside_out_disgust_smile.png/revision/latest?cb=20180531132247' alt='disgust' style='border-radius: 50%; height:110px; width:70px;'>";
            remedy.insertAdjacentHTML("afterbegin", disgust);
            remedy.insertAdjacentHTML("beforeend", "Oh is it? Maybe try seeing that funny! If not, ignore!");
            moodValue=2;
            break;
        case 'anxious':
            bodybg.style.background = 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)';
            let anxious = "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2047868-eb3f-45a9-84ac-a12510bfedd9/dgfwupf-9ea2755f-7ec4-46c1-93d4-0015a7b65627.png/v1/fill/w_600,h_800/anxiety__by_dracoawesomeness_dgfwupf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvYzIwNDc4NjgtZWIzZi00NWE5LTg0YWMtYTEyNTEwYmZlZGQ5XC9kZ2Z3dXBmLTllYTI3NTVmLTdlYzQtNDZjMS05M2Q0LTAwMTVhN2I2NTYyNy5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nHeN4axGhggHkvEI-6RNQZopVXGrc5ylkigRNmBebyU' alt='anxiety' style='border-radius: 50%; height:100px; width:100px;'>";
            remedy.insertAdjacentHTML("afterbegin", anxious);
            remedy.insertAdjacentHTML("beforeend", "Take a breather and has something happened, no right? Just LIVE!");
            moodValue=3;
            break;
        case 'neutral':
            bodybg.style.background = 'radial-gradient(circle 321px at 8.3% 75.7%, rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81%)';
            let neutral = "<img src='https://th.bing.com/th/id/OIP.GdH71dRJ7XaiYTk3lgQv1AHaHa?rs=1&pid=ImgDetMain' alt='neutral' style='border-radius: 50%; height:100px; width:100px;'>";
            remedy.insertAdjacentHTML("afterbegin", neutral);
            remedy.insertAdjacentHTML("beforeend", "How about we shall start working for the goal?");
            moodValue=1;
            break;
    }

    // Save the entry and update display
    saveEntry(emotion);
    displayEntries();
}

// Format the date
const date = new Date();
const formattedDate = date.toLocaleString('en-GB', {
    weekday: 'short',     // 'Sun' for Sunday
    year: 'numeric',      // Full year like '2024'
    month: 'short',       // 'Sep' for September
    day: '2-digit',       // '01' for the 1st day of the month
    hour: '2-digit',      // '10' for 10 AM
    minute: '2-digit',    // '51' for 51 minutes
    second: undefined,    // Omits seconds
    timeZoneName: undefined, // Omits time zone information
});
console.log(formattedDate);

// Save entry to local storage
function saveEntry(emotion) {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Get today's date without the time (we only care about day, month, year)
    const today = new Date().toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });

    // Check if there is already an entry for today
    const alreadyExists = entries.some(entry => {
        return entry.date === today;
    });

    if (alreadyExists) {
        alert('You have already logged your mood for today.');
        return;  // Stop further execution if an entry for today exists
    }

    // If no entry exists, proceed to save the new entry
    entries.push({ date: today, emotion });
    localStorage.setItem('entries', JSON.stringify(entries));
    alert('Your mood has been recorded!');
    displayEntries();  // Update the displayed entries
}


// Display entries on the side panel
function displayEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const dataDiv = document.getElementById("data");
    dataDiv.innerHTML = entries.map(entry => `<li class="entry">${entry.date}: ${entry.emotion}</li>`).join('');
}

// Clear all entries from local storage and update the display
function clearAllEntries() {
    localStorage.removeItem('entries'); // Corrected the key name
    displayEntries(); // Update the displayed list
}

// Event listeners for buttons
emotionButtons.forEach(button => button.addEventListener('click', changeBg));
displayEntries(); // Initial display of entries
      