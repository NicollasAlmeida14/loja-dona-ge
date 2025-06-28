import styled from 'styled-components';

export const Container = styled.div`
  background: #F5EEDD;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 120px;

  @media (max-width: 945px) {
    align-items: center;
  }
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  color: #FFA726;
  margin-bottom: 1.5rem;
  text-align: center;
`

export const InfoSection = styled.section`
  padding: 2.8rem 1.5rem;
  margin-bottom: 1.7rem;
  display: flex;
  align-items: center;

  @media (max-width: 945px) {
    flex-direction: column;

    img {
    width: 220px;
    }
  }

  div {
    width: 50%;
    padding: 1rem;

    @media (max-width: 945px) {
      width: 100%;
    }
 }

  p {
    text-align: justify;
 }
`

export const ContactsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 2.8rem 3rem;
  margin: 1rem 0 1.7rem;
`

export const ContactsContainer = styled.div`
  background-color: #A4907C;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 2rem;

  h2{
    position: absolute;
    top: 0;
    margin-top: 0.5rem;
    color: #fff;
  }
`

export const ContactsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    color: #FFA726;
    transition: all ease 0.3s;
  }

  &:active {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    &:hover {
      color: #fff;
      transition: none;
    }

    &:active {
      opacity: 1;
    }
  }
`

export const FounderSection = styled.section`
  display: flex;
  align-items: center;
  padding: 2.8rem 1.5rem;
  margin: 2rem 0;

  @media (max-width: 945px) {
    flex-direction: column;
  }
  
  div {
    width: 50%;
    padding: 1rem;
    
  @media (max-width: 945px) {
    width: 100%;
  }
  }

  img {
    width: 300px;
    border-radius: 10px;
    margin-right: 1.5rem;

    @media (max-width: 945px) {
      margin-right: 0;
    }
  }

  p {
    text-align: justify;
  }
`