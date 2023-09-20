const navBarMenu = [
  // {
  //   src: '/icons/plus.svg',
  //   title: 'Add Task',
  //   className: 'rounded-full border p-0'
  // },
  // {
  //   src: '/icons/bell-02.svg',
  //   title: 'Notifications',
  //   className: ''
  // },
  {
    src: '/icons/mail-01.svg',
    title: 'Mails',
    className: ''
  },
  {
    src: '/icons/settings-02.svg',
    title: 'Settings',
    className: ''
  },
  {
    src: '/icons/line.svg',
    title: 'Line',
    className: 'hover:bg-transparent cursor-default'
  },
  {
    src: '/icons/moon-01.svg',
    title: 'Toggle Theme',
    className: ''
  }
]
export default function DashboardConfig () {
  return (
    <main className='flex gap-6 max-h-10'>
      <div className='flex gap-4 items-center'>
        <div className='md:cursor-pointer hover:bg-[var(--hover)] transition-all p-1'>
          <img
            src='/icons/plus.svg'
            className={`rounded-full border`}
            title='Add Task'
          />
        </div>
        <div className='md:cursor-pointer p-1 hover:bg-[var(--hover)] transition-all relative'>
          <img src='/icons/bell-02.svg' title='Notifications' />
          <div className='px-1 text-[8px] h-[14px] text-white aspect-square flex items-center justify-center absolute top-0 right-1 z-10 bg-[var(--green)] rounded-full'>
            3
          </div>
        </div>
        {navBarMenu.map((data, index) => (
          <img
            key={index}
            src={data.src}
            className={`md:cursor-pointer p-1 hover:bg-[var(--hover)] transition-all ${data.className}`}
            title={data.title}
          />
        ))}
        <div className='flex gap-[10px] items-center'>
          <img
            src='/user-images/nav-bar-user.png'
            className='md:cursor-pointer h-10 w-10 rounded-full object-cover'
            title='Profile Picture'
          />
          <img
            src='/icons/elements.svg'
            className='md:cursor-pointer p-1 py-2 hover:bg-[var(--hover)] transition-all'
            title='Settings'
          />
        </div>
      </div>
    </main>
  )
}
