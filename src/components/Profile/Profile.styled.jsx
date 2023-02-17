import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
position:absolute;
  top: 50px;
  right: 20px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


export const Title = styled.div`
  text-align: center;
  padding: 30px 50px;

`
export const Avatar = styled.img`
  width: 120px;
  border-radius: 50%;
`
export const Name = styled.h1`
  margin: 20px 0 5px 0;
  font-size: 18px;
`
export const Tag = styled.p`
  font-weight: 500;
  color: #909090;
  margin-bottom: 5px;
`

export const Location = styled.p`
  font-weight: 500;
  color: #909090;

`
export const StarsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

`
export const StarsItems = styled.li`
  width: 100px;
  padding: 20px 0;
  text-align: center;
  background-color: #ececec;
  border-top: 1px solid #d7d7d7;

  &:not(:last-child) {
    border-right: 1px solid #d7d7d7;
  }

  span {
    display: block;
    color: #909090;
    font-size: 14px;
  }

  span:last-child {
    font-weight: bold;
    color: #000000;
    font-size: 16px;
    margin-top: 5px;
  }
`

