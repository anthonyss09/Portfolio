import gradients from "../gradients.module.css";

export default function BouncingBalls() {
  return (
    <div className="flex gap-4 relative">
      <div
        className={`h-8 w-8 rounded-[32px] rotate-[30deg] ball-1 ${gradients.gradientGreenLight}`}
      ></div>
      <div className="h-6 w-6 rounded-[16px] bg-black absolute top-14 left-[6px] ball-shadow-1 blur-sm"></div>
      <div
        className={`h-8 w-8 mt-4 rounded-[32px] rotate-[30deg] ${gradients.gradientBlueBright} ball-3`}
      ></div>
      <div className="h-6 w-6 rounded-[16px] bg-black absolute top-[72px] left-[54px] ball-shadow-3 blur-sm"></div>
      <div
        className={`h-8 w-8  mt-0 rounded-[32px] rotate-[30deg] ${gradients.gradientPurpleLight} ball-2`}
      ></div>
      <div className="h-6 w-6 rounded-[16px] bg-black absolute top-14 left-[100px] ball-shadow-2 blur-sm"></div>
    </div>
  );
}
