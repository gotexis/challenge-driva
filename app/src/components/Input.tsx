import styled from 'styled-components';


export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  width: 100%;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid #aaa;
  }
`;

export const Select = styled.select`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  width: 100%;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid #aaa;
  }
`;


export const Err = styled.p`
  color: red;
  font-size: 12px;
`;
