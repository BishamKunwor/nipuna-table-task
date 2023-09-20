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
    iconUrl: '',
    title: 'Services',
    url: '#Services'
  },
  {
    iconUrl: '',
    title: 'Quotation',
    url: '#Quotation'
  },
  {
    iconUrl: '',
    title: 'Tasks',
    url: '#Tasks'
  }
]
export default function SideBarMenu ({ children }: { children?: ReactNode }) {
  return (
    <section className='flex mt-2'>
      <aside className='bg-white mr-2 w-[15rem]'>
        <header className='pl-6'>
          <h2>CRM</h2>
        </header>
        <main className='p-6 pt-2'>
          <ul className=''>
            {sideBarMenu.map(menuItem => {
              return (
                <li>
                  <a
                    href={menuItem.url || '#'}
                    className='px-3 py-2 hover:bg-red-300 rounded-sm transition-all text-sm flex justify-between'
                  >
                    <aside className='flex gap-3'>
                      <img src={menuItem.iconUrl} title={menuItem.title} />
                      <p>{menuItem.title}</p>
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
