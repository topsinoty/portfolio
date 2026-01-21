export interface LastFMTrack {
  artist: { "#text": string };
  name: string;
  album: { "#text": string };
  image: Array<{ "#text": string; size: string }>;
  url: string;
  "@attr"?: {
    nowplaying: string;
  };
}

export interface LastFmApiResponse {
  recenttracks: {
    track: LastFMTrack[];
  };
}

type Result<T> = { ok: true; data: T } | { ok: false; error: string };

export async function getSpotifyData(): Promise<Result<LastFMTrack>> {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LAST_FM_USER}&api_key=${process.env.LAST_FM_KEY}&format=json&limit=1`,
    { next: { revalidate: 30 } },
  );
  const json = (await response.json()) as LastFmApiResponse;
  const recent = json.recenttracks?.track?.[0];

  if (!recent) return { ok: false, error: "No recent track found" };

  return { ok: true, data: recent };
}
