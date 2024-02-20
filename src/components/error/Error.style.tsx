import { css } from "@emotion/react";

const style = css`
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translation(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;

  h1 {
    font-weight: bold;
  }
  button {
    margin-top: 30px;
    border: 1px solid #000;
  }
`;

export default style;
