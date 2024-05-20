import "./index.css";
import Star from "./assets/Star.mp4";

function Background() {
  return (
    <video
      className="-z-50 fixed w-full h-full object-cover"
      autoPlay
      muted
      loop
    >
      <source src={Star} type="video/mp4" />
    </video>
  );
}

export default Background;
