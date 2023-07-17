'use client';
import React from 'react';
import Image from 'next/image';
import {SearchMenufecturerProps} from '@/types';
import {Combobox, Transition} from '@headlessui/react';

const SearchManufacturer = ({manufecturer, setMenufecturer}: SearchMenufecturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="realtive w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
            src="/car-logo.svg"
            width={20}
            height={20}
            alt="Car logo"
            className="ml-4"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
