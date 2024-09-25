// @ts-nocheck
import styled from 'styled-components';

const OptionText = styled.span`
    
`

const CounterRowContainer = styled.div`
    display: flex;
`

const PersonCountText = styled.div`
    padding: 8px;
    min-width: 92px;
    display: flex;
    align-items: center;
    color: #71757A;
`

const IncrementBoxContainer = styled.div`
    width: 32px !important;
    height: 32px !important;
    padding: 8px;
    display: flex;
    flex-shrink: 0;
`

const IncrementBox = styled.div`
    border-radius: 4px;
    background-color: ${(props) => props.$disabled?"#E7E8E8":"#E9F0FF"};
    fill: ${(props) => props.$disabled?"#BBBDBE":"#759BE5"};
    height: 100%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-shrink: 0;
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
    margin-right: 8px;
    min-width: 56px;
    min-height: 48px;
    display:flex;
    align-items:center;
`

const ValueContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-shrink: 0;
    padding: 8px;
    color: #71757A;
`

export { ValueContainer, IncrementBoxContainer, IncrementBox, OptionText, SelectedContainer, SelectedIconContainer, SelectedText, DropdownIconContainer, PersonCountText, RootContainer, CounterRowContainer };