export default function cloudinaryLoader({ src, width, quality }) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  //return `https://digitallyfers.com/${params.join(",")}${src}`;
  return `https://digitallyfers.com/${src}?w=${width}&q=${quality || 75}`;
}
