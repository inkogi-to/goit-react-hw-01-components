import styled from "styled-components";

export const FriendList = styled.ul`
  margin: 10px;
`
export const FriendItem = styled.li`
  width: 200px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  :hover {
    background-color: #5b9799;
  }

  img {
    margin: 0 10px;
  }

`

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isActive === true ? "green" : "red";
  }};
`
