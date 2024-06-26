import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";  // 블로그 path 설정용
import styled from "styled-components";

//Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>나리의 미니 블로그</MainTitleText>
      <Routes>
        {/* index : 기본 경로 설정 */}
        <Route index element={<MainPage/>}/>
        <Route path="post-write" element={<PostWritePage/>}/>
        {/* postId post의 ID 값을 Path에 넣는다 */}
        <Route path="post/:postId" element={<PostViewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

// -- 원본 코드 --
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
