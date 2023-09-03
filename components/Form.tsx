import React, { useState } from 'react'
import { Checkbox, CustomButton, Input } from '.';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Form = ({ fields, onSubmit }: any) => {
    const [formValues, setFormValues] = useState({} as any);
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (event: any) => {
        console.log(event);
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormValues((prevValues: any) => ({ ...prevValues, [name]: newValue }));
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const isValid = validateForm();
        console.log(formValues);
        if (isValid) {
            onSubmit(formValues);
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {} as any;

        fields.forEach((field: any) => {
            if (field.required && !formValues[field.name]) {
                newErrors[field.name] = 'This field is required';
                isValid = false;
            }
        });

        setFormErrors(newErrors);
        return isValid;
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field: any) => {
                const { type, ...rest } = field;
                console.log(field);
                switch (type) {
                    case 'text':
                        return <Input key={rest.name} {...rest} onChange={handleChange} />;
                    case 'password':
                        const [visible, setVisible] = useState(false)
                        return <Input key={rest.name} {...rest} onChange={handleChange} type={visible ? 'text' : 'password'} >
                            <button className='absolute top-4 right-3 hover:bg-slate-300 dark:hover:bg-slate-500 p-1 rounded-sm dark:focus:bg-slate-600'
                                onClick={() => setVisible(!visible)}>
                                {
                                    visible ? <EyeSlashIcon
                                        width={16}
                                        height={16} /> : <EyeIcon width={16} height={16} />
                                }

                            </button>
                        </Input>;
                    case 'checkbox':
                        return <Checkbox key={rest.name} {...rest} onChange={handleChange} />;
                    case 'select':
                        return <div>Not implemented yet</div>
                    // return <SelectInput key={rest.name} {...rest} />;
                    // Add more cases for other input types
                    default:
                        return null;
                }
            })}
            <CustomButton title="Login" btnType='submit' containerStyles='bg-blue-500 text-white rounded-md mt-8 w-full focus:ring focus:ring-indigo-300 hover:bg-blue-600 active:bg-blue-700'>
            </CustomButton>
        </form>
    )
}

export default Form