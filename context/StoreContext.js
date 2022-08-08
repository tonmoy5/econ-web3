import { createContext, useState, useEffect } from 'react'
import { useEnsName, useMoralis } from "react-moralis"


export const StoreContext = createContext()


export const StoreProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState();

  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis;

  useEffect(() => {
    ; (async () => {
      if (isAuthenticated) {
        const currentUsername = await user?.get('nickname')
        setUsername(currentUsername)
      }
    })()
  }, [isAuthenticated, user, username])

  const handelSetUsername = () => {
    if (user) {
      if (nickname) {
        user.set('nickname', nickname)
        user.save()
        setNickname('')
      } else {
        console.log('Cannot set empty nickname')
      }
    } else {
      console.log('No User')
    }
  }

  return (
    <StoreContext.Provider
      value={{
        isAuthenticated,
        nickname,
        setNickname,
        username,
        setUsername,
        handelSetUsername,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}