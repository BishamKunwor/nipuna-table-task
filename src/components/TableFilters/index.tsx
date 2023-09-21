import { ConfigProvider, DatePicker, Input, Select } from 'antd'
import { ReactNode } from 'react'
import IconsRenderer from '../hooks/iconsRenderer'

export default function TableFilters ({ children }: { children: ReactNode }) {
  IconsRenderer()
  return (
    <main className='h-full w-full bg-white rounded'>
      <nav className='h-[72px] border-b-[0.5px] border-b-[var(--hover)] px-6 flex justify-between items-center pl-6'>
        <div className='flex items-center gap-5'>
          <Input
            className='max-w-[12.75rem]'
            placeholder='Search Particular'
            prefix={
              <svg
                className='mr-[6px] h-5 w-5'
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
          />
          <Select
            className='w-[10.75rem] filterByID'
            defaultValue='Filter by assigned'
            suffixIcon={
              <img src='/icons/menu/chevron-down.svg' title='Dropdown' />
            }
            options={[]}
          />
          <DatePicker
            className='max-w-[6.5rem] dateContainer'
            placeholder='Date'
            suffixIcon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M5 7.5L10 12.5L15 7.5'
                  stroke='#667085'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
          />
          <Select
            className='w-[6.75rem] statusContainer'
            defaultValue='Status'
            suffixIcon={
              <img src='/icons/menu/chevron-down.svg' title='Dropdown' />
            }
            options={[]}
          />
        </div>
        <div className='flex items-center gap-7'>
          <div className='flex items-center'>
            <button className='flex items-center gap-[6px] text-xs leading-[16.8px] hover:bg-[var(--hover)] p-2 rounded transition-all'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  d='M1.50006 3.45C1.50006 3.02996 1.50006 2.81994 1.58181 2.65951C1.65371 2.51839 1.76845 2.40365 1.90957 2.33175C2.07 2.25 2.28002 2.25 2.70006 2.25H15.3001C15.7201 2.25 15.9301 2.25 16.0906 2.33175C16.2317 2.40365 16.3464 2.51839 16.4183 2.65951C16.5001 2.81994 16.5001 3.02996 16.5001 3.45V3.95205C16.5001 4.15364 16.5001 4.25444 16.4754 4.34817C16.4536 4.43123 16.4177 4.50993 16.3692 4.58082C16.3145 4.66082 16.2383 4.72684 16.086 4.85887L11.2891 9.01613C11.1368 9.14816 11.0606 9.21418 11.0059 9.29418C10.9575 9.36507 10.9215 9.44377 10.8997 9.52683C10.8751 9.62056 10.8751 9.72136 10.8751 9.92295V13.8438C10.8751 13.9905 10.8751 14.0638 10.8514 14.1272C10.8305 14.1832 10.7965 14.2334 10.7523 14.2736C10.7022 14.3192 10.6341 14.3464 10.4979 14.4009L7.9479 15.4209C7.67224 15.5311 7.53441 15.5863 7.42377 15.5633C7.32701 15.5432 7.2421 15.4857 7.1875 15.4033C7.12506 15.3091 7.12506 15.1607 7.12506 14.8638V9.92295C7.12506 9.72136 7.12506 9.62056 7.10043 9.52683C7.0786 9.44377 7.04266 9.36507 6.99419 9.29418C6.9395 9.21418 6.86332 9.14816 6.71098 9.01613L1.91414 4.85887C1.7618 4.72684 1.68563 4.66082 1.63093 4.58082C1.58246 4.50993 1.54653 4.43123 1.5247 4.34817C1.50006 4.25444 1.50006 4.15364 1.50006 3.95205V3.45Z'
                  stroke='#667085'
                  stroke-width='1.35'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Filter
            </button>
            <div className='mx-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='2'
                height='22'
                viewBox='0 0 2 22'
                fill='none'
              >
                <path d='M1 1L1 21' stroke='#667085' stroke-linecap='round' />
              </svg>
            </div>
            <button className='flex items-center gap-[6px] text-xs leading-[16.8px] hover:bg-[var(--hover)] p-2 rounded transition-all'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M5.83334 12.5L10 16.6666L14.1667 12.5M5.83334 7.49998L10 3.33331L14.1667 7.49998'
                  stroke='#667085'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Sort
            </button>
            <div className='mx-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='2'
                height='22'
                viewBox='0 0 2 22'
                fill='none'
              >
                <path d='M1 1L1 21' stroke='#667085' stroke-linecap='round' />
              </svg>
            </div>
            <button className='flex items-center gap-[6px] text-xs leading-[16.8px] hover:bg-[var(--hover)] p-2 rounded transition-all'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  d='M1.50006 3.45C1.50006 3.02996 1.50006 2.81994 1.58181 2.65951C1.65371 2.51839 1.76845 2.40365 1.90957 2.33175C2.07 2.25 2.28002 2.25 2.70006 2.25H15.3001C15.7201 2.25 15.9301 2.25 16.0906 2.33175C16.2317 2.40365 16.3464 2.51839 16.4183 2.65951C16.5001 2.81994 16.5001 3.02996 16.5001 3.45V3.95205C16.5001 4.15364 16.5001 4.25444 16.4754 4.34817C16.4536 4.43123 16.4177 4.50993 16.3692 4.58082C16.3145 4.66082 16.2383 4.72684 16.086 4.85887L11.2891 9.01613C11.1368 9.14816 11.0606 9.21418 11.0059 9.29418C10.9575 9.36507 10.9215 9.44377 10.8997 9.52683C10.8751 9.62056 10.8751 9.72136 10.8751 9.92295V13.8438C10.8751 13.9905 10.8751 14.0638 10.8514 14.1272C10.8305 14.1832 10.7965 14.2334 10.7523 14.2736C10.7022 14.3192 10.6341 14.3464 10.4979 14.4009L7.9479 15.4209C7.67224 15.5311 7.53441 15.5863 7.42377 15.5633C7.32701 15.5432 7.2421 15.4857 7.1875 15.4033C7.12506 15.3091 7.12506 15.1607 7.12506 14.8638V9.92295C7.12506 9.72136 7.12506 9.62056 7.10043 9.52683C7.0786 9.44377 7.04266 9.36507 6.99419 9.29418C6.9395 9.21418 6.86332 9.14816 6.71098 9.01613L1.91414 4.85887C1.7618 4.72684 1.68563 4.66082 1.63093 4.58082C1.58246 4.50993 1.54653 4.43123 1.5247 4.34817C1.50006 4.25444 1.50006 4.15364 1.50006 3.95205V3.45Z'
                  stroke='#667085'
                  stroke-width='1.35'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Saved Filter
            </button>
          </div>
          <button className='text-sm font-medium leading-[19.6px] text-[var(--hyperlink)] hover:text-blue-400 transition-all'>
            Clear
          </button>
        </div>
      </nav>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              cellFontSize: 12,
              paddingContentVerticalLG: 8,
              padding: 16,
              controlHeight: 34
            },
            Input: {
              controlHeight: 34,
              borderRadius: 2,
              fontSize: 12,
              colorBorder: 'transparent',
              paddingInline: 0,
              paddingBlock: 8,
              colorBgContainer: 'transparent'
            }
          }
        }}
      >
        {children}
      </ConfigProvider>
    </main>
  )
}
