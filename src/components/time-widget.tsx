"use client";

import { useSyncExternalStore } from "react";
import { BlockText } from "./block-text";

let lastTime = new Date();

function subscribe(callback: () => void) {
  const timer = setInterval(() => {
    lastTime = new Date();
    callback();
  }, 1000);
  return () => clearInterval(timer);
}

export const TimeWidget = () => {
  const timestamp = useSyncExternalStore(
    subscribe,
    () => lastTime.getTime(),
    () => 0,
  );

  const isServer = timestamp === 0;
  const time = new Date(timestamp);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Europe/Tallinn",
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "Europe/Tallinn",
  };

  const formattedTime = isServer
    ? "--:--:--"
    : new Intl.DateTimeFormat("en-GB", timeOptions).format(time);

  const formattedDate = isServer
    ? "---, -- ---"
    : new Intl.DateTimeFormat("en-GB", dateOptions).format(time);

  return (
    <div className="p-4 bg-muted/10 border border-white/5 rounded-sm max-w-full backdrop-blur-2xl shadow">
      <div className="flex items-center gap-2 mb-3">
        <BlockText
          options={{ text: { className: "font-mono text-xxs text-primary" } }}
        >
          local_time
        </BlockText>
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-mono font-medium tracking-tighter text-foreground">
          {formattedTime}
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xxs font-mono text-muted-foreground uppercase">
            Tallinn, EE (EEST)
          </span>
          <span className="text-xxs font-mono text-muted-foreground/70">
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};
