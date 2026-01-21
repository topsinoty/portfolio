"use client";

import { useEffect, useState } from "react";
import { BlockText } from "./block-text";

export const TimeWeatherWidget = () => {
  const [hour, setHour] = useState<number>(() => new Date().getUTCHours());
  const [minutes, setMinutes] = useState<number>(() =>
    new Date().getUTCMinutes(),
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setHour(now.getUTCHours());
      setMinutes(now.getUTCMinutes());
    };

    updateTime();

    const timeout = setTimeout(
      () => {
        updateTime();
        setInterval(updateTime, 60_000);
      },
      (60 - new Date().getSeconds()) * 1000,
    );

    return () => clearTimeout(timeout);
  }, []);

  const paddedVal = (val: number): string => {
    if (val <= 9) return `0${val}`;
    return String(val);
  };

  return (
    <div className="flex gap-4 p-4 rounded-sm bg-muted/20 border-white/5 border items-center">
      <div>
        <BlockText className="text-accent!">
          {paddedVal(hour + 2)}:{paddedVal(minutes)}
        </BlockText>
      </div>
    </div>
  );
};
