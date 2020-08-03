import styled from 'styled-components' 

export const Button = styled.button`
  border: 0;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  height: 50px;
  transition: background-color 0.5s;
  width: 140px;

  ${props => (props.primary ? 'background-color: #5766c6' : 'background-color: #81da51')};

  &:hover {}
`

export const Celebration = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 5px;
  display: flex;
  padding: 24px;
  text-decoration: none;
  width: 100%;

  + div {
    margin-top: 10px;
  }

  div {
    flex: 1;

    h2 {
      font-size: 1.4em;
    }

    p {
      color: #5c5c64;
      margin-top: 5px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 40px;
  width: 100%;

  input {
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    flex: 1;
    height: 70px;
    padding: 0 24px;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const Modal = styled.div`
  background: rgba(0, 0, 0, .25);
  height: 100%;
  left: 0;
  position: absolute;
  transition: top .25s;
  width: 100%;

  ${props => (props.modalVisibility ? 'top: 0' : 'top: -100%;')};
`

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 5px;
  left: 50%;
  padding: 20px;
  position: fixed;  
  transform: translateX(-50%);
  transition: top .25s;
  width: 90%;

  ${props => (props.modalVisibility ? 'top: 40px' : 'top: -100%;')};

  @media(min-width: 768px) {
    width: 520px;  
  }

  h3 {
    margin-bottom: 16px;
  }

  p {
    line-height: 24px;
  }

  ul {
    margin-bottom: 16px;
    margin-top: 16px;

    li {
      line-height: 24px;
    }
  }
`

export const Section = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 40px 20px;
`

export const Subtitle = styled.h2`
  font-size: 1.4em;
  margin-bottom: 20px;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 1.8em;
  margin-bottom: 60px;
  text-align: center;

  @media(min-width: 768px) {
    font-size: 2.8em;
  }
`
