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

// Icon Imports
import { MdAttachFile as AttachIcon } from "react-icons/md";
import { SiMicrosoftexcel as ExcelIcon } from "react-icons/si";
import { FaUpload as UploadIcon } from "react-icons/fa6";
import { CiWarning as WarningIcon } from "react-icons/ci";

export default function Admin() {

    const [isFileAdded, setIsFileAdded] = useState(false);
    const [isExcelFile, setIsExcelFile] = useState(true);
    const [fileInfo, setFileInfo] = useState('');

    const URL = config.settings.isLocalServer ? `${config.urls.local}/admin` : `${config.urls.heroku}/admin`;

    const schema = yup.object().shape({
        pin: yup.string().required('PIN szükséges!'),
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
                console.log('Network response was not ok');
            }

        } catch (err) {
            console.log('Error fetching data:', err);
        } finally {
            console.log('Fetching finished.');
            resetForm();
            setIsFileAdded(false);
            setFileInfo('');
        }
    };

    function resetForm() {
        reset({
            pin: '',
            myFile: ''
        });
    }

    function handleChange(event) {
        let fileName = event.target.files[0].name;
        let extension = fileName.split('.').at(-1);
        setFileInfo(extension === 'xlsx' ? fileName : 'Rossz fájl!');
        setIsExcelFile(extension === 'xlsx' ? true : false);
        setIsFileAdded(true);
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

                        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                            <div>
                                <h3>Árak frissítése</h3>
                            </div>

                            <div>
                                {errors.pin ? <span><p className='error'>{errors.pin?.message}</p></span> : <span><p className='error'></p></span>}
                                <input className='pin' type='password' placeholder="PIN" {...register('pin')} />
                            </div>

                            <div>
                                {errors.myFile && <span><p className='error'>{errors.myFile?.message}</p></span>}
                                {!errors.myFile && <span className='file-name'>{fileInfo}</span>}
                                <label htmlFor="price-update">
                                    {isFileAdded ? isExcelFile ? <ExcelIcon className='icon' /> : <WarningIcon className='icon' /> : <AttachIcon className='icon' />}
                                </label>
                                <input onInput={handleChange} id='price-update' className='upload-input' type='file' {...register('myFile')} />
                            </div>

                            <div>
                                <button style={!isFileAdded || !isExcelFile ? { visibility: 'hidden' } : { visibility: 'unset' }}>
                                    <UploadIcon className='icon' />
                                </button>
                            </div>


                        </form>
                    </div>
                }
            />
        </div>
    )
}
