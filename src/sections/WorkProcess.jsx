import React from 'react'
import { workingProcess } from '../constants'
import { WorkCard } from '../components'

const WorkProcess = () => {
  return (
    <div>
      <header className="flex w-full lg:flex-row flex-col items-center gap-5 ">
        <h1 className="lg:text-[48px] text-[38px] font-bold bg-green px-4 text-kanit ">
          Our Work Process
        </h1>
        <p className="text-xl lg:max-w-[50%] lg:text-start text-center font-normal">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>
      <div className='mt-10'>
        {
          workingProcess.map((items,index)=>(
            <div key={items.number}>
              <WorkCard {...items} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WorkProcess