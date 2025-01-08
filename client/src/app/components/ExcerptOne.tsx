import animations from "../animations.module.css";

export default function ExcerptOne() {
  return (
    <div className="h-min w-[400px] max-w-[400px] flex flex-col gap-0 mb-4 px-4 rounded-2xl">
      <p
        className={`text-blueLight text-3xl font-light opacity-0 ${animations.fadeInDownFirst}`}
      >
        Hi.
      </p>
      <p
        className={`text-white text-3xl font-light opacity-0 ${animations.fadeInDownSecond}`}
      >
        <span className="text-white">I&apos;m</span>
        <span className="font-thin text-[36px] text-white">
          {" "}
          Anthony Toffetti
        </span>
        <span className="text-blueLight">.</span>
      </p>
      <p
        className={`text-blueLight text-xl opacity-0 ${animations.fadeInDownThird}`}
      >
        <span>A</span>{" "}
        <span className="text-white font-medium text-[32px]">
          web developer
        </span>
        <span className="text-blueLight">.</span>
      </p>
    </div>
  );
}
