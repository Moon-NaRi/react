import React, {useState} from "react";
import post from 'axios';
import axios from "axios";

function CustomerAdd (props) {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [job, setJob] = useState('');
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const {files} = event.target;
        const uploadFile = files[0];
        setFile(uploadFile);
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);
        reader.onloadend = () => {
            setFileName(reader.result);
        }
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleJobChange = (event) => {
        setJob(event.target.value);
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // addCustomer(
        //     file, name, birthday, gender, job, fileName
        // ).then((response) => {
        //     console.log(response.data);
        // })
        try {
            const formData2 = new FormData();
            const config2 = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }

            formData2.append('image', file);
            formData2.append('name', name);
            formData2.append('birthday', birthday);
            formData2.append('gender', gender);
            formData2.append('job', job);
            formData2.append('fileName', fileName);
            const response = await axios.post('/api/customers', formData2, config2);
            console.log('response : ' + response);
        } catch (error) {
            console.error(error);
        }

        setFile(null);
        setName('');
        setBirthday('');
        setGender('');
        setJob('');
        setFileName('');

        window.location.reload();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>고객 추가</h1>
            프로필 이미지: <input type="file" onChange={handleFileChange}/>
            <br/>
            이름: <input type="text" onChange={handleNameChange}/>
            <br/>
            생년월일: <input type="text" onChange={handleBirthdayChange}/>
            <br/>
            성별: <input type="text" onChange={handleGenderChange}/>
            <br/>
            직업: <input type="text" onChange={handleJobChange}/>
            <button type="submit">추가하기</button>
        </form>
    );
}

function addCustomer(file, name, birthday, gender, job, fileName) {
    const url = '/api/customers';
    const formData = new FormData();
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    formData.append('image', file);
    formData.append('name', name);
    formData.append('birthday', birthday);
    formData.append('gender', gender);
    formData.append('job', job);
    formData.append('fileName', fileName);

    return post(url, formData, config);
}

export default CustomerAdd;