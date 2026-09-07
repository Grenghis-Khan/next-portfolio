export default function imageLoader({ src, width, quality }) {
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  return `${normalizedSrc}?w=${width}&q=${quality || 75}`;
}
