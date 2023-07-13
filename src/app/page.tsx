import Image from 'next/image'
import { CustomButton } from './components'

export default function Home() {
  return (
    <div>

      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Home
      </h2>

      <CustomButton title={"teste"}  />

    </div>
  )
}
