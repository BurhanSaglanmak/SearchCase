import React, { useState } from 'react';
import { useSearchContext } from "../../contexts/useSearchContext";
import axios from 'axios';

function AddNewRecordComp() {
    const { errorMessages, setErrorMessages, setErrorHideComp, setResponsePost, setSuccesHide } = useSearchContext();
    const [nameSurname, setNameSurname] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [dangerName, setDangerName] = useState(false);
    const [dangerCountry, setDangerCountry] = useState(false);
    const [dangerCity, setDangerCity] = useState(false);
    const [dangerEmail, setDangerEmail] = useState(false);
    const [dangerWebsite, setDangerWebsite] = useState(false);

    const handleNameSurnameChange = (e) => {
        setNameSurname(e.target.value);
        validateNameSurname(e.target.value);

    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        validateCountry(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
        validateCity(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handleWebsiteChange = (e) => {
        setWebsite(e.target.value);
        validateWebsite(e.target.value);
    };

    const handleAddRecord = () => {
        const validationResults = {
            nameSurname: validateNameSurname(nameSurname),
            country: validateCountry(country),
            city: validateCity(city),
            email: validateEmail(email),
            website: validateWebsite(website),
        };
        
        if (Object.values(validationResults).every((result) => result)) {
            // console.log('Yeni Kayıt:', {
            //     nameSurname,
            //     country,
            //     city,
            //     email,
            //     website,
            // });

            ///////////// axios /////////////
            const axiosPost = async () => {
                const apiUrl = `https://reqres.in/api/users`;
                const postData = {
                    nameSurname: nameSurname,
                    country: country,
                    city: city,
                    email: email,
                    website: website,
                };

                try {
                    const response = await axios.post(apiUrl, postData, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    setResponsePost(response.status)
                    setSuccesHide(false)
                    console.log('POST işlemi başarılı:', response.data);
                } catch (error) {
                    console.error('POST işlemi sırasında hata oluştu:', error.message);
                }
            };
            axiosPost();
            //////////////////////////
            // State'i sıfırla
            setNameSurname('');
            setCountry('');
            setCity('');
            setEmail('');
            setWebsite('');

            // Hataları sıfırla
            setErrorMessages({
                nameSurname: '',
                country: '',
                city: '',
                email: '',
                website: '',
            });
        }
    };

    const validateNameSurname = (value) => {
        // Sadece harfler ve Türkçe karakterler, min 4 - max 60 karakter
            const regex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]{4,60}$/;
            if (!regex.test(value)) {
                setErrorMessages((prevErrors) => ({
                    ...prevErrors,
                    nameSurname: 'Invalid Name Surname',
                }));
                setErrorHideComp(true)
                setDangerName(true);
                return false;
            }

            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                nameSurname: '',
            }));
            setDangerName(false);
            return true;
    };

    const validateCountry = (value) => {
        // Sadece harfler ve Türkçe karakterler, min 2 - max 40 karakter
            const regex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]{2,40}$/;
            if (!regex.test(value)) {
                setErrorMessages((prevErrors) => ({
                    ...prevErrors,
                    country: 'Invalid Country',
                }));
                setErrorHideComp(true)
                setDangerCountry(true);
                return false;
            }
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                country: '',
            }));
            setDangerCountry(false);
            return true;
    };

    const validateCity = (value) => {
        // Sadece harfler ve Türkçe karakterler, min 2 - max 40 karakter
            const regex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]{2,40}$/;
            if (!regex.test(value)) {
                setErrorMessages((prevErrors) => ({
                    ...prevErrors,
                    city: 'Invalid City',
                }));
                setErrorHideComp(true)
                setDangerCity(true);
                return false;
            }
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                city: '',
            }));
            setDangerCity(false);
            return true;
    };

    const validateEmail = (value) => {
        // Basit e-posta doğrulama
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(value)) {
                setErrorMessages((prevErrors) => ({
                    ...prevErrors,
                    email: 'Invalid email',
                }));
                setErrorHideComp(true)
                setDangerEmail(true);
                return false;
            }
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                email: '',
            }));
            setDangerEmail(false);
            return true;
    };

    const validateWebsite = (value) => {
        // Basit URL doğrulama
            const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}([/?].*)?$/;
            if (!regex.test(value)) {
                setErrorMessages((prevErrors) => ({
                    ...prevErrors,
                    website: 'Invalid URL',
                }));
                setErrorHideComp(true)
                setDangerWebsite(true);
                return false;
            }
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                website: '',
            }));
            setDangerWebsite(false);
            return true;
    };

    return (
        <div className='addNewRecord__container'>
            <div className='addNewRecord__container__data'>
                <div className='addNewRecord__container__data__content'>
                    <h3>Name Surname</h3>
                    <input
                        type="text"
                        value={nameSurname}
                        onChange={handleNameSurnameChange}
                        placeholder='Enter name and surname'
                        className={`${dangerName
                            ? "searchbar__input--danger"
                            : ""
                            }`}
                    />
                    {errorMessages.nameSurname && <p className="error">{errorMessages.nameSurname}</p>}
                </div>
                <div className='addNewRecord__container__data__content'>
                    <h3>Country</h3>
                    <input
                        type="text"
                        value={country}
                        onChange={handleCountryChange}
                        placeholder='Enter a country'
                        className={`${dangerCountry
                            ? "searchbar__input--danger"
                            : ""
                            }`}
                    />
                    {errorMessages.country && <p className="error">{errorMessages.country}</p>}
                </div>
                <div className='addNewRecord__container__data__content'>
                    <h3>City</h3>
                    <input
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        placeholder='Enter a city'
                        className={`${dangerCity
                            ? "searchbar__input--danger"
                            : ""
                            }`}
                    />
                    {errorMessages.city && <p className="error">{errorMessages.city}</p>}
                </div>
                <div className='addNewRecord__container__data__content'>
                    <h3>Email</h3>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Enter an email (abc@xyz.com)'
                        className={`${dangerEmail
                            ? "searchbar__input--danger"
                            : ""
                            }`}
                    />
                    {errorMessages.email && <p className="error">{errorMessages.email}</p>}
                </div>
                <div className='addNewRecord__container__data__content'>
                    <h3>Website</h3>
                    <input
                        type="text"
                        value={website}
                        onChange={handleWebsiteChange}
                        placeholder='Enter a website (https://xyz.com)'
                        className={`${dangerWebsite
                            ? "searchbar__input--danger"
                            : ""
                            }`}
                    />
                    {errorMessages.website && <p className="error">{errorMessages.website}</p>}
                </div>
                <div className='addNewRecord__container__data__button'>
                    <button onClick={handleAddRecord}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddNewRecordComp;
