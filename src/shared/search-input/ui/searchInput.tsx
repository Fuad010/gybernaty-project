import styled from "@emotion/styled"

const SearchInputContainer = styled.input`
    width: 100%;
    height: 42px;
    border-radius: 10px;
    background-color: #30333F;
    border-color:   rgba(56, 62, 74, 0);
    padding: 14px;  
    color: #fff;
    transition: 0.1s;
    transition-timing-function: linear;

    &:focus{
        border-color: rgb(56, 62, 74);
        outline:none
    }

    &::placeholder {
    color: rgba(255, 255, 255, 0.70);
  }
`


export const SearchInput = () => {
    return (
        <SearchInputContainer placeholder="Search"/>
    )
}