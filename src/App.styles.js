import styled from 'styled-components';

const Title = styled.div`
    text-align: center;
    font-size: xxx-large;
    font-weight: 400;
    margin-bottom: 36px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    width: 100%;
    align-items:center;
    flex: 1;
    transition: all 0.5s;
`

const SlidingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items:center;
    position: sticky;
    top: 0;
    align-self: flex-start
`

export { Title, Content, SlidingContainer };
