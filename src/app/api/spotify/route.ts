import { NextResponse } from "next/server";
import { getSpotifyData } from "~/lib/get-spotify-data";

export const GET = async () => {
  const track = await getSpotifyData();
  if (!track.ok) {
    return NextResponse.json({ error: track.error }, { status: 500 });
  }
  const { data } = track;
  return NextResponse.json(data, { status: 200 });
};
