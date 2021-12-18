import { useState, useEffect } from "react";

function useOnScreen(
  rootMargin = "300px",
  threshold = 0.6,
  deactivate = false
) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    let observer;
    if (ref && deactivate === false) {
      observer = new IntersectionObserver(
        ([entry]) => {
          //console.log(entry.intersectionRatio);
          setIsVisible(entry.isIntersecting);
        },
        {
          rootMargin,
          //threshold,
        }
      );
      observer.observe(ref);
    }

    return () => {
      if (ref && observer) observer.unobserve(ref);
    };
  }, [ref, rootMargin, deactivate]);

  return [setRef, isVisible];
}

export default useOnScreen;
