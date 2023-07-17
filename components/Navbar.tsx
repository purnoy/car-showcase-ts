import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <div className="max-w-[1440] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
            <Image
            src="/logo.svg"
            alt="car hub logo"
            width={118}
            height={18}
            className="object-container"/>
        </Link>
        <CustomButton
        title="Sign In"
        btnType= "button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] py-2"
        />
      </div>
    </header>
  )
}

export default Navbar
