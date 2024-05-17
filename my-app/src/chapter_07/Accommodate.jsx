import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; //상수

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false); //초기값 false
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect (() => {
        console.log("=================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    }); //mount, update 모두 호출

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); //state 변경
        console.log(`Current count value: ${count}`);
    }, [count]); //count 가 변경 될 때만 호출

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount} disabled={count <= 0}>
                퇴장
            </button>

            {isFull && <p style={{ color: "red"}}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;