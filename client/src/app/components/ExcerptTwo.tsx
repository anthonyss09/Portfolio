import animations from "../animations.module.css";

export default function ExcerptTwo() {
  return (
    <div
      id="excerpt-two"
      className={`w-[336px] mx-auto font-light text-3xl text-blueMed text-center duration-0`}
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
        className={`py-2 px-4 rounded-2xl shadow-[0_25px_40px_0px_rgba(0,0,0,.0)]`}
      >
        <p
          className={`w-0 overflow-hidden text-black text-lg font-normal ${animations.typedOutFive} `}
        >
          {" "}
          Send me mail.{" "}
        </p>
      </button>
    </div>
  );
}
