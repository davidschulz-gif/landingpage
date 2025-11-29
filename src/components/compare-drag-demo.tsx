import { CompareWithAnimation } from './compare-with-animation'

export default function CompareDemo() {
  return (
    <section
      className='w-full max-w-[90%] md:max-w-[65%] mx-auto py-10 overflow-x-hidden'
      style={{ backgroundColor: '#fcfcfd' }}
    >
      <div className='w-full overflow-x-hidden md:overflow-x-auto'>
        <CompareWithAnimation />
      </div>
    </section>
  )
}
