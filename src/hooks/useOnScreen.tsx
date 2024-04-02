import { MutableRefObject, useEffect, useState } from "react";

export function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (ref.current && ref.current instanceof Element) { // Check if ref.current exists and is an Element
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current && ref.current instanceof Element) { // Check again before calling unobserve()
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]); // Ensure effect runs whenever ref or rootMargin changes

  return isIntersecting;
}
