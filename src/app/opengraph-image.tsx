import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "./seo";

export const alt = SITE_CONFIG.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#070707",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "12px",
          background: "#00d491",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            color: "#00d491",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "0px",
          }}
        >
          {SITE_CONFIG.alias}.com
        </p>
        <h1
          style={{
            fontSize: "80px",
            color: "white",
            margin: "10px 0",
            letterSpacing: "-0.05em",
          }}
        >
          {SITE_CONFIG.name}
        </h1>
        <p
          style={{
            fontSize: "38px",
            color: "#d4d4d8",
            maxWidth: "800px",
            lineHeight: "1.4",
          }}
        >
          {SITE_CONFIG.description}
        </p>
      </div>
      <div style={{ display: "flex", marginTop: "40px", gap: "20px" }}>
        <div
          style={{
            background: "#171717",
            color: "#00d491",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #52525c",
            fontSize: "24px",
          }}
        >
          Next.js
        </div>
        <div
          style={{
            background: "#171717",
            color: "#00d491",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #52525c",
            fontSize: "24px",
          }}
        >
          TypeScript
        </div>
        <div
          style={{
            background: "#171717",
            color: "#00d491",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #52525c",
            fontSize: "24px",
          }}
        >
          Python
        </div>
        <div
          style={{
            background: "#171717",
            color: "#00d491",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #52525c",
            fontSize: "24px",
          }}
        >
          Java
        </div>
      </div>
    </div>,
    { ...size },
  );
}
