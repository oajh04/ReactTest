import styled, {css} from 'styled-components';

export const TodoListBox = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: gray;
    &:focus{
        border: none;
    }
`;

export const TodoList = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 800px;
    border-radius: 20px;
    background-color: white;
`;

export const TodoHeader = styled.div`
    height: 100px;
    border-radius: 20px 20px 0 0;
    background-color: #6EEAFF;
    font-size: 25px;
    align-items: center;
    text-align: center;
    color: white;
`;

export const TodoBody = styled.div`
    height: 630px;
    overflow: scroll;
`
export const BodyContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: scroll;

    &::-webkit-scrollbar { 
        width: 10px; 
        /* 스크롤바의 width */
    }

    &::-webkit-scrollbar-track {
        background-color: #f0f0f0; 
        /* 스크롤바의 전체 */
    }

    &::-webkit-scrollbar-thumb { 
        background: linear-gradient(135deg,#81bcff,#56D4E2);
        border-radius: 10px;
        /* 스크롤바 색 */
    }
`

export const Modify = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 25px;
    margin-right: 20px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
`;

export const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 25px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
`;

export const Container = styled.div`
    width: 500px;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
    border-bottom: 1px solid grey;
    padding-top: 12px;
    padding-bottom: 22px;
`;

export const ContainerBox = styled.div`
    display: flex;
`;

export const Check = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.check &&
        css`
            border: 1px solid #3CAEFF;
            color: #3CAEFF;
    `}
`;

export const Content = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.check &&
        css`
            text-decoration: line-through;
            color: #ced4da;
        `}
`;

export const ModifyInput = styled.div`
    display: block;
`;

export const ModifyBox = styled.form`
    position: relative;
    align-items: center;
    text-align: center;
    input{
        width: 200px;
        border: none;
        border-bottom: 1px solid black;
        margin-right: 20px;
        &:focus{
            border: none;
        }
    }
    button{
        width: 70px;
        border: none;
        color: #ffffff;
        background-color: #3CAEFF;
    }
`;

export const TodoFooter = styled.div`
    height: 70px;
    background-color: #3CAEFF;
    border-radius: 0 0 20px 20px;
    display: flex;
`

export const TodoFooterSub = styled.form`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
`;

export const FooterInput = styled.input`
    width: 300px;
    font-size: 20px;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    background-color: #3CAEFF;
    margin-right: 50px;
    &:focus{
        border: none;
    }
    &::placeholder {
        color: white;
    }
`

export const FooterButton = styled.button`
    width: 100px;
    font-size: 20px;
    border: none;
    &:focus{
        border: none;
    }
`
