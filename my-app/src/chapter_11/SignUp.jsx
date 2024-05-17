import React, {useState} from "react";

function SignUp(props) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('여자');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault(); //form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <br/>
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value='남자'>남자</option>
                    <option value='여자'>여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;