import styled from "styled-components";

export const CheckpointAlert = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
  border-radius: .25rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: flex-end;
    height: 27px;
  }

  svg {
    align-self: center;
    width: 27px;
    height: 21px;
    margin-right: 10px;
  }


`

export const AlertRow = styled.div`
  display: flex;
  align-items: center;
  svg {
    align-self: center;
    width: 20px;
    height: 16px;
    margin-right: 10px;
  }
`