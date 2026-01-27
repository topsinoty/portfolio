"use client";

import { useEffect, useState } from "react";
import { BlockText } from "./block-text";

export const TimeWidget = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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

  const formattedTime = new Intl.DateTimeFormat("en-GB", timeOptions).format(
    time,
  );
  const formattedDate = new Intl.DateTimeFormat("en-GB", dateOptions).format(
    time,
  );

  return (
    <div className="p-4 bg-muted/10 border border-white/5 rounded-sm">
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
