import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Toggle from '../Utils/Toggle'
import Highlight from '../Utils/Highlight'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav({ darkMode, setDarkMode }) {
  const router = useRouter()
  const currentPath = router.pathname
  const [path, setPath] = useState('');

  // useEffect(() => {
  //   let length = currentPath.lastIndexOf("/");
  //   setPath(currentPath.slice(length + 1).toLocaleUpperCase());
  // }, [currentPath])

  return (
    <Disclosure
      as="nav"
      className="bg-white shadow dark:bg-black dark:text-white fixed top-0 z-30"
    >
      {({ open }) => (
        <>
          <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-black dark:text-white">
            <div className="flex justify-between h-20 dark:bg-black dark:text-white">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center pr-4">
                  <Highlight>
                    <Link href={'/'}>
                      <a>CHANGMUSHU</a>
                    </Link>
                  </Highlight>
                </div>
              </div>
              {/* <div className='flex items-center'>{path}</div> */}
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden pb-5">
            <div className="flex justify-center">
              <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
