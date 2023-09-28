import { useEffect, useState } from "react";
import Highlight from "./Utils/Highlight";
import music from "../public/assets/blog/a/music.png"
import Image from "next/image";
import Link from "next/link";
// import { getAllPosts } from '../lib/api'

export default function PhotoYear({post}) {
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

  useEffect(()=>{
    console.log(post);
  })


  return (
    <div>
      <div className="mt-[100px] bg-cover flex items-center justify-center">
        {year && <Image src={year} height={400} width={400} alt="picture for my past" />}
      </div>
      {/* <Link href={"/photograph/year2021"}>
        <a className="">index</a>
      </Link> */}
      <div className={`flex flex-row items-center justify-center h-[650px] gap-[200px] bg-cover absolute inset-x-2/4 bottom-[10%]`}>
        {elements.map((element) => (
          <Link as={`/photograph/${post[0].slug}`} href="/photograph/[slug]" key={element.id} passHref>
            <div
              className={`flex items-center justify-center font-serif text-3xl`}

            >
              <span
                className="cursor-pointer"
                onMouseEnter={() => handleMouseEnter(element.id)}
                onMouseLeave={() => handleMouseLeave(element.id)}
                style={{
                  opacity: element.opacity,
                  transition: 'opacity 0.7s ease',
                }}>
                <Highlight>
                  {element.year}
                </Highlight>
              </span>
            </div>
          </Link>

        ))}
      </div>
    </div>
  )
}


