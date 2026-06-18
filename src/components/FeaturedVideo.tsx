import './FeaturedVideo.css';

/*
 * TODO: Replace with YouTube Data API fetch
 *
 * To make this dynamic instead of hardcoded:
 *
 * 1. Add a useEffect that fetches from:
 *    https://youtube.googleapis.com/youtube/v3/search
 *      ?part=snippet
 *      &channelId=CHANNEL_ID
 *      &order=date
 *      &maxResults=1
 *      &key=YOUR_API_KEY
 *
 * 2. Store the result in useState<typeof LATEST_VIDEO>
 *    in the FeaturedVideo component.
 *
 * 3. Replace the hardcoded videoId and title below
 *    with the values from state.
 */

const LATEST_VIDEO = {
  id: 'Yka1oKuwibY',
  title: 'Abandoned Shipwrecks at The Strand | Kent Coastline from Above in 4K',
};

export default function FeaturedVideo() {
  return (
    <section className="featured">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${LATEST_VIDEO.id}`}
          title={LATEST_VIDEO.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h2 className="video-title">{LATEST_VIDEO.title}</h2>
    </section>
  );
}
