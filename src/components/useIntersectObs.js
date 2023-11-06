import { useState, useRef, useEffect } from "react";

function useIntersectObs() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { root: null, rootMargin: "10px", threshold: 0.1 }
    );
    observer.observe(myRef.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      myRef.current.querySelectorAll("div").forEach((el) => {
        el.classList.add(`revealTop`);
      });
      myRef.current.querySelectorAll(`ul, aside`).forEach((el) => {
        el.classList.add(`revealRight`);
      });
    } else {
      myRef.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove(`revealTop`);
      });
      myRef.current.querySelectorAll("ul, aside").forEach((el) => {
        el.classList.remove(`revealRight`);
      });
    }
  }, [isIntersecting]);

  return { isIntersecting, myRef };
}

export default useIntersectObs;
