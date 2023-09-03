import React, { useState } from 'react'
import { Checkbox, CustomButton, Form, Input } from '@/components'
import { EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
const login = () => {
    const handleChange = (event: any) => {
        // Handle input changes here
        console.log(event);
    };

    const formFields = [
        { type: 'text', label: 'Username', name: 'username', required: true, value: '', onChange: handleChange },
        { type: 'password', label: 'Password', name: 'password', required: true, value: '', onChange: handleChange },
        { type: 'checkbox', label: 'Remember me', name: 'rememberMe', checked: false, onChange: handleChange },
        // Add more field objects as needed
    ];

    return (
        <div className='m-auto flex flex-col justify-center items-center h-screen'>
            <div className='px-[16px] w-full flex flex-col justify-center items-center'>

                <div className='sm:p-10 shadow-md max-sm:shadow-none dark:shadow-none rounded-xl w-full sm:w-[500px]'>
                    <h1 className='text-3xl text-slate-900 dark:text-gray-300 font-bold mb-10 self-start'>Sign In</h1>
                    <Form fields={formFields} onSubmit={handleChange}></Form>
                </div>

            </div>
            <Link href="/" className='mt-10'><div>Return home</div></Link>
        </div>
    )
}

export default login