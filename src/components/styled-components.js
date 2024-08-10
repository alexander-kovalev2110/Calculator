import styled from 'styled-components'

export const Calc = styled.div`
  position: relative;
  width: 250px;
  height: 370px;
  background-color: #334E58;
  border-radius: 8px;
`

export const CalcCard = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
`

export const BtnRow = styled.div`
  height: 56px;
  display: flex;
  gap: 6px;
`

export const Display = styled.div`
  width: 100%;
  height: 50px; 
  background-color: #fce8d6;
  font-size: 30px;
  text-align: right;
  padding: 10px;
  border-radius: 5px;
  overflow: hidden;
`

export const Btn = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: yellowgreen;
    color: white;
  }
    
  &:active {
    transform: scale(1.2);
  }
`

export const OperBtn = styled(Btn)`
  background-color:#968c8c;
  color: white;
`

export const FiveBtn = styled(Btn)`
  background-color:#ce9f48;
  color: white;
`

export const ZeroBtn = styled(Btn)`
  width: 241%;
`