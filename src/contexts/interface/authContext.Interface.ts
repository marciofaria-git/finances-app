import { ReactNode } from 'react'

export interface UserProps {
  id: string
  name: string
  avatar: string
}

export interface AuthContextProps {
  user: UserProps | undefined
  signInWithGoogle: () => Promise<void>
}

export interface AuthContextProviderProps {
  children: ReactNode
}
