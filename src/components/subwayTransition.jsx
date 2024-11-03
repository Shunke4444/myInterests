import { useRef, useEffect } from 'react';
import Subway from './assets/Subway.mp4'; // Adjust the path as necessary

const GreenScreenVideo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const frameProcessingInterval = 100; // Process every 100ms (10 FPS)
  let lastProcessedTime = 0;

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas size to match the video resolution once it's loaded
    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth; // Set canvas width
      canvas.height = video.videoHeight; // Set canvas height
    });

    const processFrame = (timestamp) => {
      // Limit processing to the defined interval
      if (timestamp - lastProcessedTime < frameProcessingInterval) {
        requestAnimationFrame(processFrame);
        return;
      }
      lastProcessedTime = timestamp;

      // Draw the current video frame on the canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      // Optimized greenscreen algorithm: Replace green pixels with transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Simple check to determine if the pixel is green
        if (r < 100 && g > 150 && b < 100) {
          data[i + 3] = 0; // Set alpha to 0 (transparent)
        }
      }

      ctx.putImageData(frame, 0, 0);
      requestAnimationFrame(processFrame);
    };

    video.addEventListener('play', () => {
      requestAnimationFrame(processFrame);
    });

    return () => {
      video.removeEventListener('play', processFrame);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        ref={videoRef}
        src={Subway}
        autoPlay
        loop
        className="hidden absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full max-w-none max-h-none transform -translate-x-1/2 -translate-y-1/2"
        style={{ objectFit: 'cover' }} // Ensures the video covers the entire screen without zooming
      />
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default GreenScreenVideo;
