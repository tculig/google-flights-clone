// @ts-nocheck
import styled from 'styled-components';

const SectionBox = styled.div`
    display:flex;
    flex-direction:column;
    padding: 16px;
`

const SectionBoxFlex = styled(SectionBox)`
    flex:1;
`

const SectionBoxFlexCenter = styled(SectionBoxFlex)`
    align-items:center
`
    



export { SectionBox, SectionBoxFlex, SectionBoxFlexCenter };