'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FormEventHandler } from 'react';

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    router.push(`/list?name=${name}`)
  }

  return (
    <form onSubmit={handleSearch} className='flex gap-4 p-2 items-center bg-gray-100 rounded-md flex-1'>
        <input type="text" name='name' placeholder='search' className='flex-1 bg-transparent outline-none'/>
        <button>
            <Image src="/search.png" alt='' width={16} height={16} />
        </button>
    </form>
  )
}

export default SearchBar