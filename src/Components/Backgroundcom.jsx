import React from 'react'
import Square from '../Background/Squares/Squares.jsx'
import TextType from '../external/TextType/TextType.jsx';
const Backgroundcom = () => {
  return (
    <>
       <div className="my-1.5 h-135 relative w-full  overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Square />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-blue-950 text-center px-4">
        <TextType
            text="Welcome to Innovative Loop Line"
            as="h1"
            className="text-5xl font-bold mb-4"
            typingSpeed={50}
            deletingSpeed={30}
            pauseDuration={2000}
            loop={true}
            showCursor={true}
            cursorCharacter="_"
            cursorClassName="text-blue-950"
          />
          <TextType
            text="your vision, our creation. Explore the world of stunning visuals and innovative designs with 'INNOVATIVE LOOP LINE'."
            as="p"
            className="text-lg text-blue-950 mt-4 max-w-xl"
            typingSpeed={50}
            deletingSpeed={30}
            pauseDuration={2000}
            loop={true}
            showCursor={false}
            textColors={["#6a7282", "#162556"]}/>
        </div>
      </div>
    </>
  )
}

export default Backgroundcom
