export const slideSnippet = `export default function Slide({ slideNumber }) {
  return (
    <div className={\`slide slide-&#36;{slideNumber}\`}>
      <span>
        {" "}
        <p className="slide-number-p">Slide {slideNumber}</p>
        <p>Swipe with touch, arrow key or mouse pad.</p>
      </span>
    </div>
  );
}`;
