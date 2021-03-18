import styled from 'styled-components';

const CodeEditorStyles = styled.div`
  min-height: 150px;
  border-radius: 5px;
  background: linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  code {
    line-height: 1.5rem;
    color: white;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    padding: 3rem 1rem 1rem 1rem;
    margin: 2rem 1rem;
    position: relative;
    height: 125px;
    width: 400px;
    @media (max-width: 768px) {
      width: 100vw;
    }
    .typed-cursor {
      display: inline-block;
    }
    .dot1 {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #ffbe2f;
      position: absolute;
      top: 15px;
      left: 15px;
    }
    .dot2 {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #fb5e57;
      position: absolute;
      top: 15px;
      left: 35px;
    }
    .dot3 {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #28c941;
      position: absolute;
      top: 15px;
      left: 55px;
    }
  }
`;

export default CodeEditorStyles;
