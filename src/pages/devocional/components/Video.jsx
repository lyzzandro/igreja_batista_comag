function Video({ url }) {
  const list = url.split("/");
  const code = list.at(-1).replace("watch?v=", "");

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${code}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowfullscreen
    ></iframe>
  );
}

export default Video;
