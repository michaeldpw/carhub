import React, { useState } from 'react'
import { Checkbox, CustomButton, Form, Input } from '@/components'
import { EyeIcon } from '@heroicons/react/24/outline'
const login = () => {
    const handleChange = (event: any) => {
        // Handle input changes here
        console.log(event);
    };

    const formFields = [
        { type: 'text', label: 'Username', name: 'username', value: '', onChange: handleChange },
        { type: 'password', label: 'Password', name: 'password', value: '', onChange: handleChange },
        { type: 'checkbox', label: 'Remember me', name: 'rememberMe', checked: false, onChange: handleChange },
        // Add more field objects as needed
    ];

    return (
        <div className='m-auto flex flex-col justify-center items-center h-screen'>
            <div className='px-[16px] w-full flex flex-col justify-center items-center'>

                <div className='sm:p-10 shadow-md max-sm:shadow-none rounded-xl w-full sm:w-[500px]'>
                    <h1 className='text-3xl text-slate-900 dark:text-gray-300 font-bold mb-10 self-start dark:pl-10'>Sign In</h1>
                    <Form fields={formFields} onSubmit={handleChange}></Form>
                </div>

            </div>
            <div>Ba</div>
        </div>
    )
}

export default login