import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#fff",
  color: "#072D4B"
}

export const darkTheme = {
  body: "#001824",
  color: "#fff"
}

export const GlobalStyle = createGlobalStyle`
  body {  background-color: ${(props) => props.theme.body}}
`

export const GlobalStyle2 = createGlobalStyle`
  body { color: ${(props) => props.theme.color}}
`