import styled from 'styled-components';

const TopContainer = styled.div`
    display: inline-flex;
    margin-bottom: 8px;
    margin:0;

`;

const SearchContainer = styled.div`
    border-radius: 8px;
    padding: 8px 16px 48px;
    position: relative;
    box-shadow: 0px 1px 3px 0px rgba(60, 64, 67, 0.30), 0px 4px 8px 3px rgba(60, 64, 67, 0.15);
    background-color: white;
      z-index: 222;
`


export { TopContainer, SearchContainer };
