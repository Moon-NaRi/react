import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write"); //페이지 이동
                    }}
                />

                <PostList
                    posts={data} //import한 값 PostList로 전달
                    onClickItem={(item) => { // 파라미터로 함수 자체를 넘김
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default MainPage;