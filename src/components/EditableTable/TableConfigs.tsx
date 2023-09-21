import { Button } from "antd"

export default function TableConfigs ({
  handleAddRow
}: {
  handleAddRow: () => void
}) {
  return (
    <div className='py-3 pl-6 flex justify-between items-end'>
      <Button type='primary' onClick={handleAddRow}>
        <article className='flex justify-center items-center gap-[6px]'>
          <span>New Client</span>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='chevron-down'>
              <path
                id='Icon'
                d='M5 7.5L10 12.5L15 7.5'
                stroke='#ffffff'
                stroke-width='1.25'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
          </svg>
        </article>
      </Button>
      <ul className='flex'>
        <li className='hover:border-b border-b border-transparent hover:border-green-400 transition-all'>
          <a className='text-xs leading-[16.8pxpx] px-4 py-1' href='#'>
            Prospects(18)
          </a>
        </li>
        <li className='border-b border-green-400 transition-all'>
          <a className='text-xs leading-[16.8pxpx] px-4 py-1' href='#'>
            Clients(10)
          </a>
        </li>
        <li className='hover:border-b border-b border-transparent hover:border-green-400 transition-all'>
          <a className='text-xs leading-[16.8pxpx] px-4 py-1' href='#'>
            Archived(0)
          </a>
        </li>
      </ul>
    </div>
  )
}
