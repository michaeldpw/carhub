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
        { type: 'checkbox', label: 'Remember me', name: 'remember me', checked: false, onChange: handleChange },
        // Add more field objects as needed
    ];
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)
    return (
        <div className='m-auto flex flex-col justify-center items-center h-screen'>
            <h1 className='text-3xl font-bold mb-10'>Login</h1>
            <div className='p-10 shadow-md rounded-xl w-[500px]'>
                <Form fields={formFields} onSubmit={handleChange}>

                </Form>
                {/* <Input id="username" name="username" type="text" label="Username" />
                <Input id="password" name="password" type={isPasswordHidden ? 'password' : 'text'} label="Password">
                    <button className='absolute top-4 right-3 hover:bg-slate-300 dark:hover:bg-slate-500 p-1 rounded-sm dark:focus:bg-slate-600' onClick={() => setIsPasswordHidden(!isPasswordHidden)}>
                        <EyeIcon width={16} height={16} />
                    </button>
                </Input>
                <Checkbox label="Remember me" name="remember me" />
                <CustomButton title="Login" btnType='submit' containerStyles='bg-indigo-600 text-white rounded-md mt-8 w-full focus:ring focus:ring-indigo-300 hover:bg-indigo-700 active:bg-indigo-900'>
                </CustomButton> */}
            </div>
        </div>
    )
}

export default login