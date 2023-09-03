import React from 'react'

const FormField = ({ children, field, errors }: any) => {
    return (
        <div className='relative'>
            {children}
            {errors[field.name] && <p className='absolute left-0 bottom-0 text-red-500 text-sm'>{errors[field.name]}</p>}
        </div>
    )
}

export default FormField