import Image from 'next/image'
import { SignInForm } from '../components'

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Register
      </h2>

      <SignInForm/>

    </>
  
  )
}
