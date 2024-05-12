import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "문나리",
        comment: "안녕하세요, 나리에요.",
    },
    {
        name: "김노엘",
        comment: "노엘 갤러거 입니다.",
    },
    {
        name: "김리암",
        comment: "리암 갤러거 입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;