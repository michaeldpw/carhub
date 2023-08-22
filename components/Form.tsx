import React from 'react'
import { Checkbox, CustomButton, Input } from '.';
import { EyeIcon } from '@heroicons/react/24/outline';

const Form = ({ fields, onSubmit }: any) => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Perform form submission logic here
        onSubmit();
    };
    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field: any) => {
                const { type, ...rest } = field;
                switch (type) {
                    case 'text':
                        return <Input key={rest.name} onChange={rest.onChange} {...rest} />;
                    case 'password':
                        return <Input key={rest.name} {...rest}>
                            <button className='absolute top-4 right-3 hover:bg-slate-300 dark:hover:bg-slate-500 p-1 rounded-sm dark:focus:bg-slate-600'>
                                <EyeIcon width={16} height={16} />
                            </button>
                        </Input>;
                    case 'checkbox':
                        return <Checkbox key={rest.name} {...rest} />;
                    case 'select':
                        return <div>Not implemented yet</div>
                    // return <SelectInput key={rest.name} {...rest} />;
                    // Add more cases for other input types
                    default:
                        return null;
                }
            })}
            <CustomButton title="Login" btnType='submit' containerStyles='bg-indigo-600 text-white rounded-md mt-8 w-full focus:ring focus:ring-indigo-300 hover:bg-indigo-700 active:bg-indigo-900'>
            </CustomButton>
        </form>
    )
}

export default Form