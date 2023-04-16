const form = document.querySelector('form');
const videoPlayer = document.querySelector('#videoPlayer');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const videoUrl = document.querySelector('#videoUrl').value;
	const video = document.createElement('video');
	video.src = videoUrl;
	video.controls = true;
	video.autoplay = true;
	videoPlayer.innerHTML = '';
	videoPlayer.appendChild(video);
});