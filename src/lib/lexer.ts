const isBoldOrItalicOrUnderline = (char0: string, char1: string) => {
  if ((char0 === "*" || char0 === "_") && char1 === char0) return "bold";
  if ((char0 === "*" || char0 === "_") && new RegExp(/[^_*]/).test(char1))
    return "italic";
  if (char0 === "/" && char1 === char0) return "underline";
  return -1;
};

export type Cluster =
  | { type: "str"; value: string }
  | { type: "italic"; value: string }
  | { type: "bold"; value: string }
  | { type: "underline"; value: string };

export function lexer(text: string): Cluster[] {
  const clusters: Cluster[] = [];

  let i = 0;
  let buffer = "";
  let type: Cluster["type"] = "str";

  while (i < text.length) {
    const char = text[i];
    const currType = isBoldOrItalicOrUnderline(text[i], text[i + 1]);

    if (currType !== -1) {
      if (buffer) {
        clusters.push({ type, value: buffer });
        buffer = "";
      }

      if (type === currType) {
        type = "str";
      } else {
        type = currType;
      }

      i += currType === "bold" || "underline" ? 2 : 1;
      continue;
    }

    buffer += char;

    if (buffer && i + 1 === text.length) {
      clusters.push({ type, value: buffer });
    }

    i++;
  }

  return clusters;
}
