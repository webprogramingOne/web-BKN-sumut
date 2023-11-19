import React, { useEffect, useState } from "react";

function Animasi() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".animate-bounce");
      const bounding = element.getBoundingClientRect();
      const isInViewport =
        bounding.top >= 0 && bounding.bottom <= window.innerHeight;

      if (isInViewport) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="block">
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
        <a href="">tes</a>
      </div>
      <div
        className={`animate-fade-in duration-1000 ${
          isAnimated ? "animate-fade-in duration-1000-active " : ""
        }`}
      >
        Animasi Saya
      </div>
    </div>
  );
}

export default Animasi;
