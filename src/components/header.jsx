import { calculatePupilPosition } from "../utils/pupilsMouse";
import headerMonoImage from "../assets/images/header-mono-image.png";
import { useEffect, useRef } from "react";

function Header() {
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);

    const leftPupilRef = useRef(null);
    const rightPupilRef = useRef(null);

    useEffect(() => {
     const trackEyeMovement = (e) => {
        const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        const pupilRadius = leftPupilRef.current.offsetWidth / 2;
        const {pupilX,pupilY} = calculatePupilPosition(cursorX,cursorY,leftEyeRect,pupilRadius);
        leftPupilRef.current.style.transform = `translate(${pupilX}px,${pupilY}px)`;
        rightPupilRef.current.style.transform = `translate(${pupilX}px,${pupilY}px)`;
     }
     window.addEventListener("mousemove",trackEyeMovement);
    return () => window.removeEventListener("mousemove",trackEyeMovement);
    },[])

  return (
    <header className="main-bg h-[100vh] flex flex-col items-center justify-center gap-y-4 lg:flex-row">
      <section className="pl-[5rem] relative">
        <div className="absolute h-[50px] w-[50px] bg-white rounded-full z-10 top-[165px] left-[165px] border-[2px] border-black" ref={leftEyeRef}>
           <div className="absolute h-[20px] w-[20px] bg-[#454545] rounded-full translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" ref={leftPupilRef}></div> 
        </div>
        <div className="absolute h-[50px] w-[50px] bg-white rounded-full z-10 top-[165px] left-[238px] border-[2px] border-black" ref={rightEyeRef}>
           <div className="absolute h-[20px] w-[20px] bg-[#454545] rounded-full translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" ref={rightPupilRef}></div> 
        </div>
        <img
          src={headerMonoImage}
          alt=""
          aria-hidden="true"
          height={398}
          width={354}
          className="min-h-[398px] min-w-[354px]"
        />
      </section>
      <section className="flex flex-col gap-y-4 text-center lg:p-8">
        <h1 className="text-5xl font-extrabold text-[#71B9FF] text-stroke-header capitalize">hello! i'm mono</h1>
        <p className="text-2xl font-extrabold text-white text-stroke-paragraph lg:px-8">
          Join me as I explore strange lands, meet incredible creatures, and
          face unexpected challenges. Come along, have some fun, and dive into
          my story as we journey together!
        </p>
      </section>
    </header>
  );
}

export default Header;