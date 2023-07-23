import { styled } from "styled-components";

export const Container = styled.div`
  background-color: rgb(31, 29, 29);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .chatContainer {
    background-color: white;
    height: 60%;
    width: 50%;
  }
  .header {
    background-color: crimson;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: white;
    }
  }
  .chatBox {
    border: 1px solid black;
    height: 70%;
    box-sizing: border-box;
    /* overflow: auto; */
  }
  .inputBox {
    border: 1px solid black;
    height: 15%;
    box-sizing: border-box;
    display: flex;
  }
  #chatInput {
    width: 80%;
    border: none;
    outline: none;
    padding: 2vmax;
    box-sizing: border-box;
    background-color: white;
    font-size: 1.2vmax;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  .sendBtn {
    background-color: crimson;
    color: white;
    border: none;
    width: 20%;
    transition: all 0.5s;
    cursor: pointer;
  }
  .sendBtn:hover {
    background-color: #7e1026;
  }
`;
