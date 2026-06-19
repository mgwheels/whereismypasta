import { useRef, useEffect } from 'react';
import './VideoGrid.css';

/*
 * TODO: Replace with YouTube Data API fetch
 *
 * To make this dynamic instead of hardcoded:
 *
 * 1. Fetch recent videos from:
 *    https://youtube.googleapis.com/youtube/v3/search
 *      ?part=snippet
 *      &channelId=CHANNEL_ID
 *      &order=date
 *      &maxResults=6
 *      &key=YOUR_API_KEY
 *
 * 2. Store in useState and map over the results
 *    to render the video cards.
 */

const HIGHLIGHT_VIDEOS = [
  {
    id: '2aJifMdHYQY',
    title: 'You & Me Maldives | Overwater Villas with Slides in Stunning 4K',
    location: 'Maldives',
  },
  {
    id: 'GEfi1wsGIkc',
    title: 'Bayham Abbey Ruins | Stunning 4K Aerial Views of Medieval History',
    location: 'Kent, UK',
  },
  {
    id: '_lufnNXU6GI',
    title: 'Mauritius Paradise | Sandbank & Little Island at Belle Mare in 4K',
    location: 'Mauritius',
  },
];

export default function VideoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.video-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="grid-section">
      <h2 className="section-title">Highlights</h2>
      <div className="video-grid">
        {HIGHLIGHT_VIDEOS.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <div className="thumbnail-wrapper">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                loading="lazy"
              />
              <div className="play-overlay" />
              <span className="location-badge">{video.location}</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">{video.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
