import styled, { css } from 'styled-components'

const GoogleSignInStyles = css`
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
    }  
`

const BaseButtonStyles = css`
  background-color: black;
  color: white;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const getButtonStyles = (props) => {
    return props.isGoogleSignIn
        ? GoogleSignInStyles
        : props.inverted ? InvertedButtonStyles : BaseButtonStyles
}

export const CustomButtonContainer = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`