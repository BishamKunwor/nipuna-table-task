import { Input } from 'antd'
import { ReactNode } from 'react'

const sideBarMenu = [
  {
    iconUrl: '/icons/menu/dashboard.svg',
    title: 'Dashboard',
    url: '#Dashboard'
  },
  {
    iconUrl: '/icons/menu/home-line.svg',
    title: 'Office Check-in',
    url: '#Office-Check-in'
  },
  {
    iconUrl: '/icons/menu/check-done.svg',
    title: 'Enquiries',
    url: '#Enquiries'
  },
  {
    iconUrl: '/icons/menu/user-octagon.svg',
    title: 'Clients',
    url: '#Clients'
  },
  {
    iconUrl: '/icons/menu/verify.svg',
    title: 'Services',
    url: '#Services'
  },
  {
    iconUrl: '/icons/menu/file-attachment.svg',
    title: 'Quotation',
    url: '#Quotation'
  },
  {
    iconUrl: '/icons/menu/task-square.svg',
    title: 'Tasks',
    url: '#Tasks'
  }
]
export default function SideBarMenu ({ children }: { children?: ReactNode }) {
  return (
    <section className='flex mt-2 h-[calc(100vh-80px)]'>
      <aside className='bg-white mr-2 relative'>
        <header className='pl-6 py-3 flex gap-2'>
          <h3 className='text-[var(--h3)]'>CRM</h3>
          <button className='hover:bg-[var(--hover)] transition-all'>
            <img src='/icons/menu/chevron-down.svg' title='Collapse Menu' />
          </button>
        </header>
        <button className='bg-[var(--toggle-icon-grey)] absolute top-0 right-0'>
          <img src='/icons/menu/chevron-left.svg' title='Collapse SideNav' />
        </button>
        <main className='p-6 pt-2'>
          <Input
            className='px-3 py-2'
            placeholder='Search'
            prefix={
              <svg
                className='mr-2'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z'
                  stroke='#667085'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            suffix={<img src='/icons/dots-horizontal.svg' title='Menu' />}
          />
          <ul className='min-w-[192px] mt-6'>
            {sideBarMenu.map(menuItem => {
              return (
                <li>
                  <a
                    href={menuItem.url || '#'}
                    className='px-3 py-2 hover:bg-[var(--hover)] rounded-sm transition-all text-sm flex justify-between'
                  >
                    <aside className='flex gap-3 items-center'>
                      <img src={menuItem.iconUrl} title={menuItem.title} />
                      <h3 className='text-xs text-[var(--h3)]'>
                        {menuItem.title}
                      </h3>
                    </aside>
                    <img src='/icons/dots-horizontal.svg' title='Menu' />
                  </a>
                </li>
              )
            })}
          </ul>
        </main>
      </aside>
      <section className='w-full overflow-clip'>{children}</section>
    </section>
  )
}
