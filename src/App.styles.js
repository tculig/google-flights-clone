import styled from 'styled-components';

const Title = styled.div`
    text-align: center;
    font-size: xxx-large;
    font-weight: 400;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1024px;
`

const SearchContainer = styled.div`
    border-radius: 8px;
    margin: 0 16px;
    padding: 8px 16px 48px;
    position: relative;
    box-shadow: 0px 1px 3px 0px rgba(60, 64, 67, 0.30), 0px 4px 8px 3px rgba(60, 64, 67, 0.15);
`

export { Title, Content, SearchContainer };
