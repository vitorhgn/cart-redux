import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 30px;
  list-style: none;
  

  li{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    
    img{
        align-self: center;
        width: 100%;
    }

    > strong{
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
    }
    >span{
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
        margin-top: auto;
    }
    button{
        background-color: #7159c1;
        color: #fff;
        border-radius: 4px;
        border: 0;
        overflow: hidden;
        margin-top: auto;

        transition: filter 0.2s;

        display: flex;
        align-items: center;

        &:hover{
            filter: brightness(0.85);
        }

        div{
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0,0,0, 0.1);
            gap: 5px;
        }

        span{
            flex: 1;
            text-align: center;
            font-weight: bold;
        }
    }


  }
`;
