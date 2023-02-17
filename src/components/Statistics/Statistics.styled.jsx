import styled from 'styled-components'

export const Section = styled.section`
  width: 400px;
  margin: 20px auto 0 auto;
`

export const Title = styled.h1`
  background-color: #fff;
  color: #5D646C;
  text-align: center;
  padding: 20px;
`

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    text-align: center;
    width: 100px;
    padding: 15px 0;

    span {
      display: block;
      color: #fff;
      font-weight: 500;

      :first-child {
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
  }
`
