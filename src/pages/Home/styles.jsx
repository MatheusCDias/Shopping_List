import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 40rem;
  width: 30rem;
  padding: 2.4rem;
  gap: 0.8rem;
  background-color: #fff;
  border-radius: 1.2rem;
  filter: drop-shadow(2px 8px 16px rgba(0, 0, 0, 0.25));

  span {
    height: 1.6rem;
    overflow: hidden;
    color: #999990;
    white-space: nowrap;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    user-select: none;
  }

  h1 {
    width: 13.5rem;
    height: 8rem;
    color: #333;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    user-select: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.8rem;
  width: 25.2rem;
  height: 4.8rem;
  gap: 0.8rem;

  input {
    display: flex;
    width: 19.6rem;
    height: 4.8rem;
    flex-shrink: 0;
    padding: 0.8rem;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-weight: 300;
    border: none;
    border-radius: 0.8rem;
    outline: none;
    background-color: #eee;
  }

  input::placeholder {
    font-family: "Roboto", sans-serif;
    color: #aaa;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  aspect-ratio: 1/1;
  border: none;
  border-radius: 40rem;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(315deg, #2d9963 0%, #50cc71 100%);
  will-change: transform;
  transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(2px 8px 16px rgba(0, 0, 0, 0.25));
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #FFF;
    will-change: transform;
    transition: transform 0.5s ease-in-out;
  }
  
  &:hover span {
    transform: scale(1.05);
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  max-height: 16rem;
  width: 26rem;
  gap: 0.8rem;
  overflow-y: auto;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 25.2rem;
  height: 4.8rem;
  overflow: hidden;
  background-color: #eee;
  border-radius: 0.8rem;
  transition: background-color 0.5s ease-in-out;

  p {
    display: flex;
    align-items: center;
    width: 19.6rem;
    height: 100%;
    border-radius: 0.8rem;
    padding: 0.8rem;
    background-color: #eee;
    color: #444;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    overflow-x: auto;
    white-space: nowrap;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 4.8rem;
    aspect-ratio: 1/1;
    background-color: transparent;
    border: none;
    border-radius: 0.8rem;
    cursor: pointer;
    color: #444;
    font-size: 24px;
    user-select: none;
    transition: background-color 0.5s ease-in-out;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      color: #444;
      transition: color 0.5s ease-in-out;
    }

    &:hover {
      background-color: #444;
    }

    &:hover span {
      color: #fff;
    }
  }
`;
