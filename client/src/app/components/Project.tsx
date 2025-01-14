import Image from "next/image";

export default function Project() {
  return (
    <article className="mt-[60px] ml-12 fixed top-[200px] text-black border-0 p-4">
      <h1 className="w-[96px] p-2 font-medium text-sm border-2 bg-[rgb(252,252,252,0.5)]">
        Bliss+
      </h1>
      <div className={`h-[300px] w-[300px] relative shadow-2xl border-2`}>
        <Image src="/assets/images/bliss1.png" alt="project preview" fill />
      </div>
      <div className="flex justify-end gap-2">
        <span className="w-1/3 text-center font-medium text-sm p-2 border-2 border-white bg-[#ffa500] shadow-xl">
          Git
        </span>
        <span className="w-1/3 text-center font-medium text-sm px-2 border-2 border-white bg-[rgb(252,252,252,0.5)] shadow-xl">
          In Depth
        </span>
      </div>
    </article>
  );
}
