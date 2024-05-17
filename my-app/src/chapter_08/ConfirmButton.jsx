import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed : false,
        }; //상태 값 정의

        // this.handleConfirm = this.handleConfirm.bind(this); //Global 호출 X
    }

    // handleConfirm() {
    //     this.setState((prevState) => ({ //prev는 set함수에서 제공하는 이전값
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }
    handleConfirm = () => { //Arrow function으로 사용
        this.setState((prevState) => ({ 
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;