"use client";

import Image from "next/image";
import useSWR from "swr";
import type { LastFMTrack } from "~/lib/get-spotify-data";

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json() as Promise<LastFMTrack>);

export const SpotifyWidget = () => {
  const { data, isLoading, error } = useSWR<LastFMTrack>(
    "/api/spotify",
    fetcher,
    {
      refreshInterval: 15_000,
      dedupingInterval: 10_000,
    },
  );

  if (isLoading || error || !data) {
    return null;
  }

  const isPlaying = Boolean(data["@attr"]?.nowplaying);

  return (
    <div
      title={`Artist: ${data.artist["#text"]}\nAlbum: ${data.album["#text"]}\nTrack: ${data.name}`}
      className="flex items-center gap-4 p-4 bg-muted/10 border border-white/5 rounded-sm"
    >
      <div className="relative w-12 h-12 shrink-0 group">
        <Image
          width={50}
          height={50}
          src={data.image[2]["#text"]}
          alt={`${data.album["#text"]} - ${data.name}`}
          className="w-full h-full rounded-sm object-cover opacity-80"
        />
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 rounded-sm">
            <div className="flex gap-0.5 items-end h-3">
              <div className="w-0.5 bg-primary animate-[bounce_1s_ease-in-out_infinite]" />
              <div
                className="w-0.5 bg-primary animate-[bounce_1.2s_ease-in-out_infinite]"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="w-0.5 bg-primary animate-[bounce_0.8s_ease-in-out_infinite]"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {isPlaying && (
            <>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />
              <span className="text-xxs font-mono text-primary uppercase tracking-tighter">
                Now Listening
              </span>
            </>
          )}
        </div>
        <div className="truncate text-sm font-medium text-foreground">
          {data.name}
        </div>
        <div className="truncate text-xxs font-mono text-muted-foreground">
          {data.artist["#text"]} — {data.album["#text"]}
        </div>
      </div>
    </div>
  );
};
