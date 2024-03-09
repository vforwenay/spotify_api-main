import { getTopTracks } from '../../lib/spotify';

export default async (_, res) => {
  const response = await getTopTracks();
  const { albums } = await response.json();
  var filtered = albums.filter(function (ele) {
    return ele != null;
  });
  let album_list;
  if (filtered.length) {
    album_list = filtered.slice(0, 10).map((album) => ({
      id: album?.id,
      artist: album?.artists?.map((_artist) => _artist?.name).join(', '),
      tracks: album?.tracks
    }));
  }
  return res.status(200).json({ album_list });
};
