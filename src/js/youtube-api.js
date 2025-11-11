function fetchVideos(channelId, apiKey) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data.items;
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
        });
}

function displayVideos(videos) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');

        const title = video.snippet.title;
        const videoId = video.id.videoId;
        const thumbnail = video.snippet.thumbnails.default.url;

        videoElement.innerHTML = `
            <h3>${title}</h3>
            <img src="${thumbnail}" alt="${title}">
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch Video</a>
        `;

        videoContainer.appendChild(videoElement);
    });
}