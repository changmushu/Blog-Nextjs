import { useState } from "react";
import Highlight from "./Utils/Highlight";
import cool from "../public/assets/blog/a/cool.jpg"
import music from "../public/assets/blog/a/music.png"
import rain from "../public/assets/blog/a/rain.jpg"
import Image from "next/image";

export default function PhotoYear() {

  const [elements, setElements] = useState([
    { id: 1, year: '2021', opacity: 1 },
    { id: 2, year: '2022', opacity: 1 },
    { id: 3, year: '2023', opacity: 1 },
  ])

  const [year, setYear] = useState()

  const handleMouseEnter = (e) => {
    const updatedElements = elements.map((element) => {
      if (element.id != e) {
        return { ...element, opacity: 0.2 };
      }
      return element;
    });
    if (e === 1) {
      setYear(music)
    } else if (e === 2) {
      setYear(music)
    } else if (e === 3) {
      setYear(music)
    }
    setElements(updatedElements);
  };

  const handleMouseLeave = (e) => {
    const updatedElements = elements.map((element) => ({
      ...element,
      opacity: 1,
    }));
    setYear()
    setElements(updatedElements);
  };

  return (
    <div>
      <div className="mt-[100px] bg-cover flex items-center justify-center">
        {year && <Image src={year} height={400} width={400} />}
      </div>
      <div className={`flex flex-row items-center justify-center h-[650px] gap-[200px] bg-cover absolute inset-x-2/4 bottom-[10%]`}>
        {elements.map((element) => (
          <div
            className={`flex items-center justify-center font-serif text-3xl`}
          >
            <span
              className="cursor-pointer"
              key={element.id}
              onMouseEnter={() => handleMouseEnter(element.id)}
              onMouseLeave={() => handleMouseLeave(element.id)}
              style={{
                opacity: element.opacity,
                transition: 'opacity 0.3s ease',
              }}>
              <Highlight>
                {element.year}
              </Highlight>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
