import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="w-full h-20 bg-yellow-200 flex item-center">
        <p className='text-2xl font-bold cursor-pointer'>PERAK</p>
        <button className='bg-red-300 px-3 py-1 rounded-md hover:shadow-lg active:shadow-none'></button>
      </nav>
    </main>
  )
}