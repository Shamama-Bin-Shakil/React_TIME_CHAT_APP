import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(31, 29, 29);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .content {
    width: 300px;
    height: 300px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > h1 {
      font-size: 35px;
      color: white;
    }
    input {
      padding: 10px 15px;
      margin: 20px 0;
      background: none;
      border: 1px solid grey;
      outline: none;
      color: white;
    }
    a {
      color: white;
      padding: 10px 15px;
      background: none;
      border: 1px solid grey;
    }
  }
`;
