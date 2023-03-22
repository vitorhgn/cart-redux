import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    background-color: #fff;
    border-radius: 4px;

    footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;


        button{
            border: 0;
            background: #7159c1;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.85);
            }
        }
    }

`;
export const ProductTable = styled.table`

    width: 100%;
    thead th{
        color: #999;
        text-align: center;
        padding: 12px;
    }
    tbody td{
        padding: 12px;
        border-bottom: 1px solid #eee ;
        text-align: center;
    }
    img{
        height: 100px;
        border-radius: 50%;  
    }
    strong{
        color: #333;
        display: block;
    }
    span{
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }
    div{
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        
        input{
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
            text-align: center;
        }
    }
    button{
        background: none;
        border: 0;
        padding: 6px;

    }
`;
export const Total = styled.div`
        span{
            display: block;
            color: #999;
        }
`;
