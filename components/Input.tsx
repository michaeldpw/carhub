import React, { Children, useState } from 'react'

const Input = ({ children, label, id, name, type, placeholder, className, onChange, error }: any) => {

    return (
        <React.Fragment>
            <label htmlFor={name} className='block mb-1 text-slate-700 dark:text-white font-semibold'>{label}</label>
            <div className='relative pb-8'>
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`m-w-full dark:shadow-none appearance-none border-solid border border-gray-300 outline-none rounded w-full py-4 px-4 text-gray-700 dark:text-white leading-tight focus:ring focus:ring-blue-200 focus:border-blue-300 transition ${className} ${error && 'border-red-400 focus:ring-red-200 focus:border-red-300'}`}

                />
                {children}
                {error && <p className='absolute left-0 bottom-2 text-red-400 text-sm'>{error}</p>}
            </div>


        </React.Fragment>
    )
}

export default Input