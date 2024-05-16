
let timerInterval;
let timerRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let startTime; // Variable to store the initial timestamp when the timer starts
let nameTimes = {}; // Object to store elapsed times for each selected name

// Function to start the global timer
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        startTime = new Date().getTime(); // Store the initial timestamp when the timer starts
        timerInterval = setInterval(updateTimer, 10); // Update timer every 10 milliseconds
        // Enable stop buttons next to each selected name
        const stopButtons = document.querySelectorAll('.stop-btn');
        stopButtons.forEach(button => button.disabled = false);
    }
}

// Function to stop the timer for a specific name
function stopTimer(name) {
    const now = new Date().getTime();
    const elapsedTime = now - startTime; // Calculate elapsed time since start
    nameTimes[name] = elapsedTime;
    const formattedTime = formatTime(elapsedTime);
    // Display elapsed time next to the name
    document.getElementById(`time-${name}`).textContent = formattedTime;
}

// Function to reset all timer-related variables and elements
function resetAll() {
    clearInterval(timerInterval); // Stop the timer
    timerRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('timer').textContent = '00:00.00'; // Reset timer display
    const selectedNamesList = document.getElementById('selectedNames');
    const allNamesList = document.getElementById('allNames');
    // Move selected names back to the original list of names
    const selectedNames = selectedNamesList.querySelectorAll('.selected-name');
    selectedNames.forEach(selectedName => {
        const name = selectedName.firstChild.textContent.trim(); // Extract the name without the stopped time
        const newNameElement = document.createElement('li');
        newNameElement.textContent = name;
        newNameElement.addEventListener('click', () => addName(newNameElement));
        allNamesList.appendChild(newNameElement);
    });
    selectedNamesList.innerHTML = ''; // Clear selected names list
    startTimes = {}; // Clear start times
    nameTimes = {}; // Clear name times
}

// Function to format elapsed time into minutes, seconds, and milliseconds
function formatTime(time) {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}.${(milliseconds < 10 ? '0' : '')}${milliseconds}`;
}

// Function to update the global timer display with elapsed time
function updateTimer() {
    const now = new Date().getTime();
    const elapsedTime = now - startTime; // Calculate elapsed time since start
    minutes = Math.floor(elapsedTime / (1000 * 60));
    seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const formattedTime = formatTime(elapsedTime);
    document.getElementById('timer').textContent = formattedTime;
}

// Function to add a name to the selected names list
function addName(element) {
    const selectedNamesList = document.getElementById('selectedNames');
    const allNamesList = document.getElementById('allNames');

    if (selectedNamesList.childElementCount < 8) {
        const newSelectedName = document.createElement('li');
        const name = element.textContent;
        newSelectedName.textContent = name;
        newSelectedName.classList.add('selected-name');

        const stopButton = document.createElement('button');
        stopButton.textContent = 'Stop';
        stopButton.classList.add('stop-btn');
        stopButton.disabled = true; // Disable stop button initially
        stopButton.addEventListener('click', () => stopTimer(name));
        newSelectedName.appendChild(stopButton);

        const timeSpan = document.createElement('span');
        timeSpan.id = `time-${name}`;
        newSelectedName.appendChild(timeSpan);

        selectedNamesList.appendChild(newSelectedName);
        allNamesList.removeChild(element);

        // Store start time for the name
        startTimes[name] = startTime; // Use the global start time for all selected names
    } else {
        alert('Maximum capacity reached!');
    }
}

// Event listener for starting the global timer
document.getElementById('startBtn').addEventListener('click', startTimer);
// Event listener for stopping the global timer
document.getElementById('stopBtn').addEventListener('click', () => clearInterval(timerInterval));
// Event listener for resetting all timer-related variables and elements
document.getElementById('resetAllBtn').addEventListener('click', resetAll);
