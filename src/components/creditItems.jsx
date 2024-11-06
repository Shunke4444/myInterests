import React from 'react'
import { Link } from 'react-router-dom'
export default function CreditItems(props) {
    // figure out how to make the props be used multiple times
  return (
    <main  className='w-screen h-[15rem] bg-gray-800 text-white flex items-center justify-between p-5'>
        <h1 className='text-[5rem] font-8bitFont font-medium'>
            {props.title}
        </h1>

        <div className='flex flex-col gap-5'>
            <h1>
                {props.linkTitle}
                <Link >
                    {props.link}
                </Link>
            </h1>
        </div>  
    </main>
  )
}
