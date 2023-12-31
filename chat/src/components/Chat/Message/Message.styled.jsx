import { styled } from "styled-components";

export const Container = styled.div`
  .messageBox {
    width: 40%;
    padding: 1vmax;
    margin: 1vmax;
    border-radius: 0.5vmax;
    display: inline-block;
    clear: both;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .right {
    float: right;
    background-color: crimson;
    color: white;
  }
  .left {
    float: left;
    background-color: black;
    color: white;
  }
`;
