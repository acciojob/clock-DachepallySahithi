//your JS code here. If required.
const timerElement = document.getElementById('timer');
function updateTimer() {
	const now = new Date();
	const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
	const formattedTime = now.toLocaleDateString('en-US', options);
	timerElement.textContent = formattedTime;
}
updateTimer();
setInterval(updateTimer, 1000);