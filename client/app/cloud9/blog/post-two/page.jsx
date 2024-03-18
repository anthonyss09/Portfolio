"use client";
import Image from "next/image";
import sliderDiagram from "../../../../public/assets/images/sliderDiagram.png";
import CodeSnippet from "../components/CodeSnippet";
import { sliderSnippet } from "../snippets/blog-two/sliderSnippet";
import Link from "next/link";
import { slideSnippet } from "../snippets/blog-two/slideSnippet";
import { pageOneSnippet } from "../snippets/blog-two/pageOneSnippet";
import { stylesSnippet } from "../snippets/blog-two/stylesSnippet";
import { pageTwoSnippet } from "../snippets/blog-two/pageTwoSnippet";
import { pageThreeSnippet } from "../snippets/blog-two/pageThreeSnippet";
import { pageFourSnippet } from "../snippets/blog-two/pageFourSnippet";
import { pageFiveSnippet } from "../snippets/blog-two/pageFiveSnippet";
import { useEffect } from "react";
import PostInteractions from "../components/PostInteractions";

// export const metadata = {
//   title: "Cloud 9 by atoffettidev. Responsive slider nextjs.",
//   description:
//     "Create a reusable customizable slider component that responds to touch swipes, mouse wheel, and arrow key events in NextJs. This post includes concepts from javascript, react, css & html.",
// };

export default function PostTwo() {
  return (
    <>
      <div className="post-center">
        {" "}
        <header>
          <h2 className="post-title">
            {" "}
            Create a reusable customizable slider component that responds to
            touch swipes, mouse wheel, and arrow key events in NextJs.
          </h2>

          <div className="post-credits-container">
            <p className="post-author">Anthony Toffetti </p>
            <p className="post-date">3/14/2024</p>
            <PostInteractions postId="65f76041b5e942ae8e532be9" />
          </div>

          <Image
            src={sliderDiagram}
            className="post-pic-header post-pic-outlined"
            alt="computers and data board"
          />
        </header>
        <main className="post-main">
          <section className="post-section">
            <h3>Responsive Slider</h3>
            <h5>Application Overview</h5>
            <p className="blog-main-p">
              In one of my latest projects I had the need for a full page slider
              effect. There are some third party packages for slider components,
              but most of them are difficult to customize and I generally like
              to see most of the code shipping in my websites, so I stay away
              from third party packaging when it is an efficient option.
            </p>
            <p className="blog-main-p">
              This post will walk you through how to create a simple slider
              component in Nextjs. Once we are done you will have the bones of a
              slider component that you can reuse in different projects and add
              customizations and configurations.
            </p>
          </section>

          <section className="post-section">
            <h3>Section One</h3>
            <h5>Section Overview</h5>
            <p className="blog-main-p">
              In this section we will create a Nextjs application, structure our
              slider component and add styles.
            </p>
            <p className="blog-main-p">
              If you would like to skip this section you can clone the repo
              here. It has structure and styles but no functionality.
              <br />{" "}
              <Link
                href="https://github.com/anthonyss09/responsive-slider-nextjs"
                className="link link-post"
              >
                https://github.com/anthonyss09/responsive-slider-nextjs
              </Link>
            </p>

            <p className="blog-main-p">
              You can also view the final component with functionality via the
              functional branch here.
              <br />
              <Link
                href="https://github.com/anthonyss09/responsive-slider-nextjs/tree/functional"
                className="link link-post"
              >
                https://github.com/anthonyss09/responsive-slider-nextjs/tree/functional
              </Link>{" "}
              <br />
              Let's Begin!
            </p>
            <p className="blog-main-p"></p>
            <p className="blog-main-p">
              Navigate to where you keep your projects and create Nextjs
              application.
            </p>
            <CodeSnippet
              language="javascript"
              code={`npx create-next-app@latest\nor\nyarn create next-app
`}
            />
            <p className="blog-main-p">
              Choose options for the prompts that follow. This post assumes no
              use of typescript so files will have suffix .js.
            </p>
            <p className="blog-main-p">
              Let&#39;s start by creating a components folder and adding a
              slider and slide component, then we can talk about our approach to
              styling so that we can achieve the functionality we are looking
              for.
            </p>
            <p className="blog-main-p">
              First for the slider component. You will see we are passing a prop
              name children. This will allow us to use this component as a
              parent element wrapped around our child slide components.
            </p>
            <h5 className="path">/your-app-name/app/components/Slider.js</h5>
            <CodeSnippet language="javascript" code={sliderSnippet} />
            <p className="blog-main-p">
              Now the slide component. For Slide we will pass a slideNumber as a
              prop. This will allow us to dynamically style each slide.
            </p>
            <h5 className="path">/your-app-name/app/components/Slide.js</h5>
            <CodeSnippet code={slideSnippet} language="javascript" />
            <p className="blog-main-p">
              Now navigate to /app/page.js and if you haven&#39;t done so
              already clean out the contents. Let&#39;s import our Slider and
              Slide and add the following html.
            </p>
            <h5 className="path">/your-app-name/app/page.js</h5>
            <CodeSnippet language="javascript" code={pageOneSnippet} />
            <p className="blog-main-p">
              Now that our components and html is in place let&#39;s talk a
              little about how we will achieve our slider functionality. We will
              eventually add event listeners to our page.js. In our case the
              listeners will be listening for swipe, mouse wheel, and arrow key
              press events. When one of these events happens we&#39;ll expect
              our slides to move up or down depending on the properties of the
              event, so how do we move our slides around? Well we won&#39;t
              actually, what we&#39;ll be moving is the div with id
              &#39;slider-inner&#39; and our child slides will come along for
              the ride.
            </p>
            <p className="blog-main-p">
              {" "}
              Our slider-inner div will be inside &#39;slider-container&#39; div
              and slider-container height will be set equal to our single slide
              height, we&#39;ll also set slider-container style overflow-y to
              hidden, now when we move slider-inner a distance equal to slide
              height a new slide will come into view and the the rest of
              slider-inner will be hidden. Some images might make this more
              clear.
            </p>
            <Image
              src={sliderDiagram}
              className="post-pic"
              alt="slider diagram"
            />
            <p className="blog-main-p">
              Hopefully you have a good idea of how we will be achieving our
              functionality so copy the following styles into global.css
            </p>
            <h5 className="path">/your-app-name/app/global.css</h5>
            <CodeSnippet language="css" code={stylesSnippet} />
            <p className="blog-main-p">
              Now let&#39;s move on to the functionality of our page.
            </p>
          </section>

          <section className="post-section">
            <h3>Section Two</h3>
            <h5>Section Overview</h5>
            <p className="blog-main-p">
              In this section we will add event listeners and functionality to
              our application.
            </p>
            <p className="blog-main-p">
              Navigate to /app/page.js. We will use the react hook useEffect to
              add our listeners to page upon render, this requires us to write
              page.js as a client component. To do that we add the “use client”
              directive at the top of our page. We&#39;ll also import useRef
              react hook to store some data without forcing rerenders as in the
              case of useState.
            </p>
            <p className="blog-main-p">
              Let&#39;s create some empty call back functions and add them to
              some event listeners. We&#39;ll be adding most of the listeners to
              slider-container div and adding styles to slider-inner div so
              let&#39;s declare binding constants to those elements here.
              You&#39;ll also notice in our useEffect return statement we&#39;ll
              be removing our event listeners. You should always remember to
              clean up event listeners. We do this in the return statement so
              our listeners are attached for the life cycle of the component.
            </p>
            <h5 className="path">/your-app-name/app/page.js</h5>
            <CodeSnippet language="javascript" code={pageTwoSnippet} />
            <p className="blog-main-p">
              Now that our listeners are set to be attached let&#39;s fill the
              callbacks with functionality. We will start with the wheel
              callback which responds to mouse wheel and touch pad scrolls. What
              we&#39;ll need to deduce is the direction of the scroll so we can
              tell slider-inner which direction to translate. Since we passed a
              named function as a callback to our listener we&#39;ll be provided
              with an event parameter. We&#39;ll use the event parameter to
              deduce direction of scroll. For the wheel function we can identify
              a scroll down event if the deltaY property of the event is greater
              than zero and a scroll up event if deltaY is less than zero.
            </p>
            <p className="blog-main-p">
              We have our conditions to identify direction of scroll so
              let&#39;s move some things around on scroll. First we will create
              a reference to the active slide so we&#39;ll know our position of
              the slider at all times. Corresponding with that logic lets
              declare a const numberOfSlides so we can compare activeSlideRef
              and find when we&#39;ve reached the end of the slider, at that
              point we&#39;ll prevent further scroll down functionality.
            </p>
            <p className="blog-main-p">
              Now we&#39;ll create a translationRef so we can keep a record of
              how much we have translated slide-inner so when we add or subtract
              our last const slideHeightInt we know slider-inner we&#39;ll be
              translated to the correct position.{" "}
            </p>
            <p className="blog-main-p">
              With all that in place we&#39;ll be able to move slider-inner
              around but there&#39;s a problem. We may expect one touch scroll
              to move slider-inner position one slide height but in fact the
              event is being triggered multiple times during the user scroll so
              slider-inner will continue to scroll multiple slide heights. To
              prevent this we&#39;ll add pauseScrollRef to tell slider-inner to
              stop scroll functionality after the initial event for what we
              expect to be the duration of user scroll. We&#39;ll set the
              initial value of pauseScrollRef to false. When an event is
              triggered if pauseScrollRef.current is false we&#39;ll move into
              our functionality but we&#39;ll immediately set
              pauseScrollRef.current to true so the following events triggered
              within the duration of user scroll will not reach our scroll
              functionality. Lastly we will set a timeout and reset
              pauseScrollRef.current to false, I like a 1200 millisecond
              time-out on this but you can experiment. Now you can see our full
              wheel callback.
            </p>
            <h5 className="path">/your-app-name/app/page.js</h5>
            <CodeSnippet language="javascript" code={pageThreeSnippet} />
            <p className="blog-main-p">
              Now for the touch swipe event. We&#39;ve attached two event
              listeners to handle this case. The first is the touch start event.
              We&#39;ll add a line of code in our call back for touch start that
              will record the initial touch spot of user and hold reference to
              that in touchStartYRef.current. Second event listener we&#39;ve
              attached to handle swipe responses is touch end. For our touch end
              callback we&#39;ll declare a const deltaY that&#39;s set to the
              touch spot of user when touch event ends minus our touchStartYRef.
              Now we can deduce direction of scroll based on deltaY being a
              negative or positive value.
            </p>
            <h5 className="path">/your-app-name/app/page.js</h5>
            <CodeSnippet language="javascript" code={pageFourSnippet} />

            <p className="blog-main-p">
              Lastly we&#39;ve attached listeners for key down events. Within
              our callback triggered by key down events all we need to do to
              deduce direction of scroll is compare the keyCode property of the
              event, 40 being down arrow key and 38 up arrow key. After adding
              the key down call back our final page.js will look like this.
            </p>
            <h5 className="path">/your-app-name/app/page.js</h5>
            <CodeSnippet language="javascript" code={pageFiveSnippet} />

            <p className="blog-main-p">
              That&#39;s it! We&#39;ve created a simply structured and designed
              slider component that responds to wheel, touch & key events!{" "}
            </p>
          </section>
          <section className="blog-footer">
            {" "}
            <PostInteractions postId="65f76041b5e942ae8e532be9" />
          </section>
        </main>
      </div>
    </>
  );
}
