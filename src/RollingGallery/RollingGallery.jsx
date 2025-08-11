import { useEffect, useState } from "react";
import cap from "../assets/cap.png";
import girl1 from "../assets/girl1.png";
import girl2 from "../assets/girl2.png";
import girl3 from "../assets/girl3.png";
import girl4 from "../assets/girl4.png";
import girl5 from "../assets/girl5.png";
import girl6 from "../assets/girl6.png";
import girl7 from "../assets/girl7.png";
import girl8 from "../assets/girl8.png";
import girl9 from "../assets/girl9.png";
import girl10 from "../assets/girl10.png";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

const IMGS = [

  girl1,
  girl2,
  girl3,
  girl4,
  girl5,
  girl6,
  girl7,
  girl8,
  girl9,
  girl10,
];
const Names = ["eva", "leona", "julia", "amelia", "sophia", "leona", "mia","jhon","eliza","michael"]
const words = ["Fast, accurate, and always delivers exceptional digitizing work!","Amazing quality and unbeatable prices—highly recommend!","Looks dope 🔥🔥 Your post shows the power of clean, detailed stitching....","Your dedication to digitizing is inspiring!! 🔥♥️","Amazing 😍 Can't wait for the new site!"," I love how you're turning your work behind the scenes hobby into a business. 💯✨ ", "the work you have been done we like it"]
const RollingGallery = ({
  autoplay = true,
  pauseOnHover = false,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640,
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`,
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[300px] bg-blue-950 w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)",
        }}
      />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((val, i) => (
            <div
              key={i}
              className="group absolute flex  flex-col   h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={val}
                alt="gallery"
                className="pointer-events-none h-[100px] w-[100px] rounded-[10px] border-[3px] border-white object-cover
                           transition-transform duration-300 ease-out group-hover:scale-105
                           sm:h-[30px] sm:w-[30px]"
              /> <p style={{fontWeight:'bold',textAlign:"start" }} >
                {Names[i % Names.length]}
              </p>
              <p className="text-white"  style={{fontSize:10}} >
               ⭐⭐⭐⭐⭐<br/> {words[i % words.length]}
              </p>

            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
