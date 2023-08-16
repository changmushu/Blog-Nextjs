import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import Container from '../components/Layout/Container'

export default function photo() {

  const [elements, setElements] = useState([
    { id: 1, year: '2021', opacity: 1 },
    { id: 2, year: '2022', opacity: 1 },
    { id: 3, year: '2023', opacity: 1 },
  ])

  const handleMouseEnter = (e) => {
    const updatedElements = elements.map((element) => {
      if (element.id != e) {
        return { ...element, opacity: 0.5 };
      }
      return element;
    });

    setElements(updatedElements);
  };

  const handleMouseLeave = (e) => {
    const updatedElements = elements.map((element) => ({
      ...element,
      opacity: 1,
    }));

    setElements(updatedElements);

  };

  return (
    <Layout>
      <Head>
        <title>PhotoGraph</title>
      </Head>
      <Container>
        <div className='flex flex-row items-center justify-center h-[600px] gap-[200px]'>
          {elements.map((element) => (
            <div
              className='font-serif'
              key={element.id}
              onMouseEnter={() => handleMouseEnter(element.id)}
              onMouseLeave={() => handleMouseLeave(element.id)}
              style={{
                opacity: element.opacity,
                transition: 'opacity 0.3s ease',
              }}
            >
              {element.year}
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
