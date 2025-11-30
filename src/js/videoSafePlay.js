function safePlay(video) {
	if (!video) return

	// Optional: check if the video has enough data to play
	const isReady = video.readyState >= 2

	if (isReady) {
		video.play().catch((error) => {
			if (error.name !== 'AbortError') {
				console.warn('safePlay: video play() failed:', error)
			}
		})
	} else {
		// Wait for it to become ready, then play
		const onCanPlay = () => {
			video.removeEventListener('canplay', onCanPlay)
			video.play().catch((error) => {
				if (error.name !== 'AbortError') {
					console.warn('safePlay (after canplay):', error)
				}
			})
		}
		video.addEventListener('canplay', onCanPlay)
	}
}

export { safePlay }
