import DashboardConfig from './DashboardConfig'

export default function NavBar () {
  return (
    <nav className='px-8 max-h-20 min-h-[72px] flex items-center bg-white justify-between'>
      <aside className='flex gap-4'>
        <button>
          <img src='/icons/dots-grid.svg' title='Menu' />
        </button>
        <h1 className='text-xl leading-7 font-semibold'>Test Project</h1>
      </aside>
      <DashboardConfig />
    </nav>
  )
}
