import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #13cac3;
  &:hover {
    background-color: #fd687b;
    color: white;
  }
  .header{
    width: 100vw;
    height: 150px; 
    display: flex;
    justify-content: space-around;
      &__img{
      width: 150px;
      height: 150px; 
      }
  }
 .nav__link {
    font-size: 20px;
  }
`;
