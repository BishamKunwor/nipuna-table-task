export default function DashboardConfig () {
  return (
    <main className='flex gap-6 max-h-10'>
      <div className='flex gap-6'>
        <img
          src='/icons/plus.svg'
          className='md:cursor-pointer'
          title='Add Task'
        />
        <img
          src='/icons/bell-02.svg'
          className='md:cursor-pointer'
          title='Notifications'
        />
        <img
          src='/icons/mail-01.svg'
          className='md:cursor-pointer'
          title='Mails'
        />
        <img
          src='/icons/settings-02.svg'
          className='md:cursor-pointer'
          title='Settings'
        />
        <img
          src='/icons/line.svg'
          className='md:cursor-pointer'
          title='Settings'
        />
        <img
          src='/icons/moon-01.svg'
          className='md:cursor-pointer'
          title='Settings'
        />
        <div className='flex gap-[10px]'>
          <img
            src='/user-images/nav-bar-user.png'
            className='md:cursor-pointer h-10 w-10 rounded-full object-cover'
            title='Profile Picture'
          />
          <img
            src='/icons/elements.svg'
            className='md:cursor-pointer'
            title='Settings'
          />
        </div>
      </div>
    </main>
  )
}
