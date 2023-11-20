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

const loadingWheel =
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#007bff" strokeWidth="5">
            <animate attributeName="stroke-dasharray" attributeType="XML" from="0 314.159" to="314.159 0" begin="0s" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="stroke-dashoffset" attributeType="XML" from="0" to="-628.318" begin="0s" dur="1.5s" repeatCount="indefinite" />
        </circle>
    </svg>


export default function Admin() {

    const [isExcelFile, setIsExcelFile] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [fileInfo, setFileInfo] = useState('');
    const [uploadInfo, setUploadInfo] = useState('');

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
        setIsSending(true);
        setUploadInfo('Frissítés...');
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
                setTimeout(() => {
                    //console.log('Not OK', result.ok);
                    setIsSending(false);
                    setUploadInfo('Sikertelen frissítés! Próbáld újra!');
                }, 1000);
            }

            if (result.ok) {
                setTimeout(() => {
                    //console.log('OK', result.ok)
                    setIsExcelFile(false);
                    resetForm();
                    setFileInfo('');
                    setIsSending(false);
                    setUploadInfo('Árak sikeresen frissítve!');
                }, 1000);
                setTimeout(() => {
                    setUploadInfo('');
                }, 5000);
            }


        } catch (err) {
            console.log('Error fetching data:', err);
        } finally {
            //console.log('Fetching finished.');
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
                                    {isExcelFile ? <ExcelIcon className='icon' /> : <AttachIcon className='icon' />}
                                </label>
                                <input onInput={handleChange} id='price-update' className='upload-input' type='file' {...register('myFile')} />
                            </div>

                            <div>
                                {!isSending && <button style={isExcelFile ? { display: 'unset' } : { display: 'none' }}>
                                    <UploadIcon className='icon' />
                                </button>}
                                {isSending && loadingWheel}
                            </div>

                            <div>
                                <h4>{uploadInfo}</h4>
                            </div>
                        </form>
                    </div>
                }
            />
        </div>
    )
}
