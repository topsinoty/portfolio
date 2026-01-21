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
    <div className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-white/5 rounded-sm">
      <div className="relative w-12 h-12 shrink-0 group">
        <Image
          width={50}
          height={50}
          src={data.image[2]["#text"]}
          alt={`${data.album["#text"]} - ${data.name}`}
          className="w-full h-full rounded-sm object-cover"
        />
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-sm">
            <div className="flex gap-0.5 items-end h-4">
              <div className="w-1 bg-emerald-500 animate-[bounce_1s_ease-in-out_infinite]" />
              <div
                className="w-1 bg-emerald-500 animate-[bounce_1.2s_ease-in-out_infinite]"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="w-1 bg-emerald-500 animate-[bounce_0.8s_ease-in-out_infinite]"
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
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-tighter">
                Now Listening
              </span>
            </>
          )}
        </div>
        <div className="truncate text-sm font-medium text-zinc-200">
          {data.name}
        </div>
        <div className="truncate text-xs text-zinc-500">
          {data.artist["#text"]} | {data.album["#text"]}
        </div>
      </div>
    </div>
  );
};
