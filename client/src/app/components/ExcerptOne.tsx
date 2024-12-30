import animations from "../animations.module.css";

export default function ExcerptOne() {
  return (
    <div className="w-full max-w-[300px] flex flex-col items-center gap-4 mb-12">
      <p
        className={`text-blueLight text-3xl font-light opacity-0 text-center ${animations.fadeInDownFirst}`}
      >
        Hi.
      </p>
      <p
        className={`text-white text-3xl font-light opacity-0 ${animations.fadeInDownSecond}`}
      >
        <span className="text-blueLight">I&apos;m</span>
        <span className=""> Anthony Toffetti</span>
        <span className="text-blueLight">.</span>
      </p>
      <p
        className={`text-blueLight text-3xl opacity-0 ${animations.fadeInDownThird}`}
      >
        <span>A</span> <span className="text-white">web developer</span>
        <span className="text-blueLight">.</span>
      </p>
    </div>
  );
}
