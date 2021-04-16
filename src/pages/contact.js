import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <>
      <h1 style={{ margin: `0 0 50px 0` }}>Contact</h1>
      <FormStyles name='Contact Form' method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='Contact Form' />
        <p>
          <label>
            Your Name: <br />
            <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            Your Email: <br />
            <input type='email' name='email' />
          </label>
        </p>
        <p>
          <label>
            Message: <br />
            <textarea name='message'></textarea>
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </FormStyles>
    </>
  );
};

const FormStyles = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 100px;
  input,
  textarea {
    border-radius: 5px;
    margin-bottom: 1rem;
    border: none;
    width: 100%;
  }
  input {
    min-height: 35px;
  }
  textarea {
    min-height: 70px;
  }
`;

export default Contact;
