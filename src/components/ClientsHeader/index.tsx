import { Select } from "antd";

export default function ClientHeader () {
  return (
    <header className='h-[60px] items-center bg-white mb-2 px-6 flex justify-between'>
      <div className='flex items-center gap-3 '>
        <button>
          <img
            src='/icons/menu/user-octagon.svg'
            title='Client Icon'
            className='h-6 w-6'
          />
        </button>
        <p className='font-medium leading-[22.4px]'>Clients</p>
      </div>
      <div className='flex gap-6 items-center'>
        <Select
          defaultValue='Branch(Kathmandu)'
          suffixIcon={
            <img src='/icons/menu/chevron-down.svg' title='Dropdown' />
          }
          options={[]}
        />
        <button>
          <img
            src='/icons/dots-horizontal.svg'
            title='Open Config Panel'
            className='h-6 w-6'
          />
        </button>
      </div>
    </header>
  )
}
