// React and React Router Imports
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// Form Handling Imports
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Page Component Imports
import { HeadSection, Section } from '../Sections';

// Data Imports
import config from '../../config.json';

export default function Admin() {

    const URL = config.settings.isLocalServer ? config.urls.local + '/admin' : config.urls.heroku + '/admin';

    const schema = yup.object().shape({
        pin: yup.string(),
        myFile: yup.mixed(),
    });


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('pin', data.pin);
            formData.append('myFile', data.myFile[0]);  // Assuming you're allowing only one file upload

            const result = await fetch(URL,
                {
                    method: 'POST',
                    mode: 'cors',
                    body: formData,
                }
            );


            if (!result.ok) {
                throw new Error('Network response was not ok');
            }

        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            console.error('Fetching finished.');
            resetForm();
        }
    };

    function resetForm() {
        reset({
            pin: '',
            myFile: ''
        });
    }

    return (
        <div className='page admin'>
            <HeadSection
                content={
                    <div className='box'>
                        <h1>Admin</h1>
                    </div>
                }
            />
            <Section
                top
                bottom
                content={
                    <div className='box'>

                        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" style={{ maxWidth: '400px', margin: 'auto', paddingTop: '20px' }}>

                            {errors.pin && <span><p className='error'>{errors.pin?.message}</p></span>}
                            <input placeholder="PIN" {...register('pin')} style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }} />


                            {errors.myFile && <span><p className='error'>{errors.myFile?.message}</p></span>}
                            <input type='file' {...register('myFile')} style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }} />

                            <button style={{ background: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Küld</button>

                        </form>
                    </div>
                }
            />
        </div>
    )
}
