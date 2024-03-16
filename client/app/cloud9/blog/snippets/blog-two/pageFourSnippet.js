export const pageFourSnippet = `
const touchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

const touchEnd = (e) => {
      const deltaY =
        Number(e.changedTouches[0].clientY) - Number(touchStartYRef.current);

      if (!pauseScrollRef.current) {
        pauseScrollRef.current = true;

        //if scrolling down
        if (deltaY < 0 && activeSlideRef.current < numberOfSlides) {
          activeSlideRef.current++;
          translationRef.current -= slideHeightInt;
          sliderInner.style.transform = \`translateY(&#36;{translationRef.current}px)\`;
        }
        //if scrolling up
        if (deltaY > 0 && activeSlideRef.current > 1) {
          activeSlideRef.current--;
          translationRef.current += slideHeightInt;
          sliderInner.style.transform = \`translateY(&#36;{translationRef.current}px)\`;
        }

        setTimeout(() => {
          pauseScrollRef.current = false;
        }, 1000);
      }
    };`;
