import React from 'react'

const Menu = ({toggle}) => {
  return (
    <label class="flex flex-col gap-2 w-8">
  <div
    class={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked: origin-right peer-checked: ${toggle ? '-translate-x-[12px] -translate-y-[1px] rotate-[225deg]' : ''} `}
  ></div>
  <div
    class={`rounded-2xl h-[3px] w-full bg-black duration-500 ${toggle ? '-rotate-45 ' :''}`}
  ></div>
  <div
    class={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked: origin-left ${toggle ? 'rotate-[225deg] translate-x-[12px] translate-y-[1px] ' : ''} `}
  ></div>
</label>

  )
}

export default Menu