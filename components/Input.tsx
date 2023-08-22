import React, { Children, useState } from 'react'

const Input = ({ children, label, id, name, type, placeholder, value, className, onChange, error }: any) => {
    return (
        <React.Fragment>
            <label htmlFor={name} className='block mb-1 text-slate-700 dark:text-white font-semibold'>{label}</label>
            <div className='relative'>
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    className={`m-w-full dark:shadow-none appearance-none border-solid border border-gray-300 outline-none rounded w-full py-4 px-4 text-gray-700 dark:text-white leading-tight focus:ring focus:ring-indigo-200 focus:border-indigo-200 mb-5 transition ${className}`}
                    style={error && { border: 'solid 1px red' }}
                />
                {children}
            </div>

            {error && <p>{error}</p>}
        </React.Fragment>
    )
}

export default Input