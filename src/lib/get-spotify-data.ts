import { NextResponse } from "next/server";

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

export async function getSpotifyData() {
  const response = await fetch(
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=topsinoty&api_key=5567c519fb22b5203bdff414099a48ae&format=json&limit=1",
    { next: { revalidate: 15 } },
  );
  const json = (await response.json()) as LastFmApiResponse;
  const recent = json.recenttracks?.track?.[0];

  if (!recent) {
    return NextResponse.json(
      { error: "No recent track found" },
      { status: 404 },
    );
  }

  return NextResponse.json(recent);
}
