import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostList(props) {
    const {posts, onClickItem} = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                //MainPage에서 받은 값을 하나씩 보여주는 페이지로 넘김
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => { //json data 하나
                            onClickItem(post);
                        }}/>
                );
            })}
        </Wrapper>
    );
}

export default PostList;