import * as React from 'react';
import getYoutubeId from 'get-youtube-id';

export const EmbedYoutube = ({ value: { url } }) => {
  const id = getYoutubeId(url);

  if (!id) return null;

  return (
    <iframe
      className={`aspect-video w-full rounded`}
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};
