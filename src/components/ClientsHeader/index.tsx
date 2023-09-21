import { Select } from 'antd'

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
        <p className='font-medium leading-[22.4px] text-[var(--h2-highlight)]'>
          Clients
        </p>
      </div>
      <div className='flex gap-5 items-center'>
        <Select
          className='w-40'
          defaultValue={'Branch(Kathmandu)'}
          suffixIcon={
            <img src='/icons/menu/chevron-down.svg' title='Dropdown' />
          }
          options={[]}
        />
        <button className='hover:bg-[var(--hover)] transition-all p-1'>
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
