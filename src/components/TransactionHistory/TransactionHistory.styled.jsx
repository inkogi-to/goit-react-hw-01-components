import styled from 'styled-components'

export const Table = styled.table`
  border: 1px solid #ECF1F4;
  margin: 0 auto 50px auto;
  width: 90vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-collapse: collapse;
`
export const TableHead = styled.thead`
  height: 50px;
  color: #fff;
  background-color: #22BCD4;
`

export const TableBody = styled.tbody`
  background-color: #fff;

  tr:nth-child(even) {
    background-color: #ECF1F4;
  }

  tr {
    cursor: pointer;

    :hover {
      background-color: #b9b9b9;
    }
  }

  td {
    padding: 10px;
    text-align: center;
  }
`
