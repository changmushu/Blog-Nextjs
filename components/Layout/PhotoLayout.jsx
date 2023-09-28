import { useEffect, useState } from 'react'
import Footer from './Footer'
import Meta from './Meta'
import Nav from './Nav'
import PhotoNav from './PhotoNav'

export default function Layout({ children, isFooter, className }) {
  const [darkMode, setDarkMode] = useState()

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [darkMode])

  return (
    <>
      <Meta />
      <div className="min-h-screen dark:text-gray-100 dark:bg-black font-inter">
        <PhotoNav darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className={`${className}`}>{children}</main>
        {
          isFooter
            ?
            <Footer />
            :
            <></>
        }

      </div>
    </>
  )
}
