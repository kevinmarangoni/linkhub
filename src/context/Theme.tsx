import React,{createContext, useState} from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '@theme/theme'
import GlobalStyle from '@styles/GlobalStyles'
import {IChildrenProps} from '@/types/props'

export const ThemeContext: React.Context<Object> = createContext<Object>({} as Object)



const Theme: React.FC<IChildrenProps> = ({children}) => {

  const [isDark, setDark] = useState<boolean>(true)

  return (
    <ThemeContext.Provider value={{isDark, setDark}}>
      <ThemeProvider theme={isDark? dark : light }>
        <GlobalStyle theme={isDark? dark : light }/>
          {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme