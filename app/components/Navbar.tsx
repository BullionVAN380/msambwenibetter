"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Focus', href: '/#focus' },
  { name: 'Impact', href: '/#impact' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/heedu.jpeg"
                    alt="Logo"
                    width={40}
                    height={40}

                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
              
              {/* Desktop menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`transition-colors duration-300 ${
                        isScrolled
                          ? 'text-gray-600 hover:text-green-700'
                          : 'text-white/90 hover:text-white'
                      } px-3 py-2 text-sm font-medium`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className={`inline-flex items-center justify-center p-2 rounded-md ${
                  isScrolled ? 'text-gray-600 hover:text-green-700' : 'text-white/90 hover:text-white'
                } focus:outline-none`}>
                  {open ? (
                    <FaTimes className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 ${isScrolled ? 'bg-white' : 'bg-green-700'}`}>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isScrolled
                        ? 'text-gray-600 hover:text-green-700 hover:bg-gray-50'
                        : 'text-white/90 hover:text-white hover:bg-green-600'
                    }`}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
