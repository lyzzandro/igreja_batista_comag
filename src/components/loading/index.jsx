import loadingAnimation from "/loading.gif";

function Loading() {
  return (
    <div className="items-center">
      <img src={loadingAnimation} alt="loading..." />
    </div>
  );
}

export default Loading