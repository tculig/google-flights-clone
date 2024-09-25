// @ts-nocheck
import styled from 'styled-components';

const OptionText = styled.span`
    
`

const CounterRowContainer = styled.div`
    padding: 8px;
    display: flex;
`

const PersonCountText = styled.div`
    min-width: 92px;
`

const IncrementBoxContainer = styled.div`
    width:48px;
    height:48px;
    padding: 8px;
`

const IncrementBox = styled.div`
    border-radius: 4px;
    color: ${(props) => props.$disabled?"red":"blue"};
`

const SelectedContainer = styled.div`
    display: flex;
`

const SelectedIconContainer = styled.div`
    width: 20px;
    height: 20px;
    padding: 0 8px;
    fill: #6E7277;
`

const SelectedText = styled.span`
    color: #3C3F42;
    font-size: 0.875rem;
    padding-right: 6px;
    padding-left: 8px;
`
const DropdownIconContainer = styled.div`
    width: 20px;
    height: 20px;
    padding-right: 1.6rem;
    fill: #5F6368;
`
const RootContainer = styled.div`
    margin-right: 4px;
    min-width: 56px;
    min-height: 48px;
    display:flex;
    align-items:center;
`

export { IncrementBoxContainer, IncrementBox, OptionText, SelectedContainer, SelectedIconContainer, SelectedText, DropdownIconContainer, PersonCountText, RootContainer, CounterRowContainer };