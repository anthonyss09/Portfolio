import animations from "../animations.module.css";

export default function ExcerptTwo() {
  return (
    <div
      id="excerpt-two"
      className={`w-[330px] mx-auto font-light text-3xl text-blueMed text-center duration-0`}
    >
      <p className={`w-0 overflow-hidden ${animations.typedOutOne}`}>
        I write <span className={`text-white `}>clean,</span>
      </p>
      <p className={`w-0 text-white overflow-hidden ${animations.typedOutTwo}`}>
        developer friendly
      </p>
      <p className={`w-0 overflow-hidden ${animations.typedOutThree}`}>
        code <span className="text-white">tested & optimized</span>
      </p>

      <p className={`w-0 mb-4 overflow-hidden ${animations.typedOutFour}`}>
        for the internet.
      </p>
      <button
        className={`w-0 overflow-hidden text-black text-lg ${animations.typedOutFive}`}
      >
        Send me mail.{" "}
      </button>
    </div>
  );
}
