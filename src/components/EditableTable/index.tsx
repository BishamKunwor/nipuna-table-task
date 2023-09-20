import { Table, ConfigProvider, Input, Button, Select, DatePicker } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useCallback, useEffect, useMemo, useState } from 'react'

interface UserDataType {
  name: string
  email: string
  imageUrl: string
  addedFrom: string
  tags: string
  internalId: string
  clientId: string
  phone: string
  clientPortal: string
  asignee: {
    name: string
    imageUrl: string
    college: string
  }
  followers: string
  status: string
  applications: number
  lastUpdated: string
  isAddBtn: boolean
}

function generateDataSource () {
  const dataSource = []
  for (let i = 0; i < 2; i++) {
    dataSource.push({
      key: i,
      name: 'Bisham Kunwor',
      email: 'novelian.nova@gmail.com',
      imageUrl: 'url',
      addedFrom: 'System',
      tags: '-',
      internalId: 'ID296',
      clientId: '-',
      phone: '+9779867****',
      clientPortal: 'Deactivated',
      asignee: {
        name: 'Justing',
        imageUrl: '',
        college: ''
      },
      followers: 'Allison',
      status: 'Completed',
      applications: 8,
      lastUpdated: '2025-11-19',
      isAddBtn: false
    })
  }
  dataSource.push({ key: dataSource.length, isAddBtn: true })
  return dataSource
}

const columnDetails = [
  { dataIndex: 'name', title: 'Name', width: 171 },
  { dataIndex: 'addedFrom', title: 'Added From', width: 121 },
  { dataIndex: 'tags', title: 'Tags', width: 81 },
  { dataIndex: 'internalId', title: 'Internal ID', width: 111 },
  { dataIndex: 'clientId', title: 'Client ID', width: 101 },
  { dataIndex: 'phone', title: 'Phone', width: 90 },
  { dataIndex: 'clientPortal', title: 'Client Portal', width: 124 },
  { dataIndex: 'assignee', title: 'Assignee', width: 183 },
  { dataIndex: 'followers', title: 'Followers', width: 108 },
  { dataIndex: 'status', title: 'Status', width: 91 },
  { dataIndex: 'applications', title: 'Applications', width: 125 },
  { dataIndex: 'lastUpdated', title: 'Last Updated', width: 131 },
  { dataIndex: 'addColumns', title: '', width: 81 }
]

export default function EditableTable () {
  const _columns = useMemo(() => {
    return columnDetails.map(columnDetails => {
      const response = {
        ...columnDetails,
        key: columnDetails.dataIndex,
        title: (
          <div className='h-[34px] flex items-center'>
            <p className='whitespace-nowrap'>{columnDetails.title}</p>
          </div>
        ),
        filterIcon: () => {
          return (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='14'
              viewBox='0 0 13 14'
              fill='none'
            >
              <path
                d='M6.49995 7.54163C6.7991 7.54163 7.04162 7.29911 7.04162 6.99996C7.04162 6.70081 6.7991 6.45829 6.49995 6.45829C6.20079 6.45829 5.95828 6.70081 5.95828 6.99996C5.95828 7.29911 6.20079 7.54163 6.49995 7.54163Z'
                stroke='#344054'
                stroke-width='1.08333'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M6.49995 3.74996C6.7991 3.74996 7.04162 3.50745 7.04162 3.20829C7.04162 2.90914 6.7991 2.66663 6.49995 2.66663C6.20079 2.66663 5.95828 2.90914 5.95828 3.20829C5.95828 3.50745 6.20079 3.74996 6.49995 3.74996Z'
                stroke='#344054'
                stroke-width='1.08333'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M6.49995 11.3333C6.7991 11.3333 7.04162 11.0908 7.04162 10.7916C7.04162 10.4925 6.7991 10.25 6.49995 10.25C6.20079 10.25 5.95828 10.4925 5.95828 10.7916C5.95828 11.0908 6.20079 11.3333 6.49995 11.3333Z'
                stroke='#344054'
                stroke-width='1.08333'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          )
        },
        filterDropdown: () => (
          <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
            <Button
              className='w-full'
              onClick={() => handleColumnHide(columnDetails.dataIndex)}
            >
              Hide
            </Button>
          </div>
        ),
        sortIcon () {
          return (
            <svg
              className='ml-2'
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='12'
              viewBox='0 0 8 12'
              fill='none'
            >
              <path
                d='M1.08328 7.75004L3.99995 10.6667L6.91662 7.75004M1.08328 4.25004L3.99995 1.33337L6.91662 4.25004'
                stroke='#D0D5DD'
                stroke-width='1.05'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          )
        },
        sorter (a: UserDataType, b: UserDataType) {
          return a.name?.length - b.name?.length
        },
        render (value: undefined | string | number, record: UserDataType) {
          if (record.isAddBtn) {
            return <div className='h-8'></div>
          }
          return <Input defaultValue={value} />
        }
      }
      if (columnDetails.dataIndex === 'name') {
        return {
          ...response,
          render (value: undefined | string | number, record: UserDataType) {
            if (record.isAddBtn) {
              return <Button onClick={handleAddRow}>Add More</Button>
            }
            return (
              <div className='flex gap-1 items-center'>
                <div className='w-7 aspect-square rounded-[4px] bg-gray-200'></div>
                <div className=''>
                  <ConfigProvider
                    theme={{
                      components: {
                        Input: {
                          paddingBlock: 0,
                          paddingInline: 0
                        }
                      }
                    }}
                  >
                    <Input defaultValue={record.name} />
                    <Input defaultValue={record.email} />
                  </ConfigProvider>
                </div>
              </div>
            )
          }
        }
      } else if (columnDetails.dataIndex === 'addColumns') {
        return {
          ...columnDetails,
          filterIcon: () => {
            return (
              <div id='addColumnId' className='flex items-center gap-2'>
                <p>+ Add Column</p>
              </div>
            )
          },
          filterDropdown: () => (
            <div
              style={{ padding: 8 }}
              onKeyDown={e => e.stopPropagation()}
              className='flex flex-col gap-2'
            ></div>
          )
        }
      }
      return response
    })
  }, [])

  const [columns, setColumns] = useState<ColumnsType<UserDataType>>(_columns)
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([])
  const [dataSource, setDataSource] = useState(generateDataSource)

  const handleColumnShow = useCallback(
    (dataIndex: string) => {
      console.log('show ', dataIndex)
      setColumns(prevState => {
        const newColumnData = [...prevState]
        const showColumnData = _columns.filter(data => {
          // @ts-ignore
          if (data.dataIndex === dataIndex) {
            return true
          }
          return false
        })
        newColumnData.unshift(...showColumnData)
        setHiddenColumns(prevHiddenState => {
          return prevHiddenState.filter(hiddenDataIndex => {
            if (hiddenDataIndex === dataIndex) {
              return false
            }
            return true
          })
        })
        return newColumnData
      })
    },
    [hiddenColumns]
  )

  useEffect(() => {
    document.querySelector('#addColumnTitle')?.parentElement?.remove()
  })

  useMemo(() => {
    setColumns(prevState => {
      prevState[prevState.length - 1] = {
        dataIndex: 'addColumns',
        width: 131,
        title: <div id='addColumnTitle'></div>,

        filterIcon: () => {
          return (
            <div id='showColumnsHeader' className='flex items-center gap-2'>
              <p>+ Add Column</p>
            </div>
          )
        },
        filterDropdown: () => {
          return (
            <div
              style={{ padding: 8 }}
              onKeyDown={e => e.stopPropagation()}
              className='flex flex-col gap-2'
            >
              {hiddenColumns.length === 0
                ? 'No Columns To Show'
                : hiddenColumns.map(dataIndex => {
                    return (
                      <Button
                        key={dataIndex}
                        size='small'
                        onClick={() => {
                          handleColumnShow(dataIndex)
                        }}
                      >
                        {dataIndex}
                      </Button>
                    )
                  })}
            </div>
          )
        }
      }
      return prevState
    })
  }, [hiddenColumns])

  const handleColumnHide = useCallback((dataIndex: string) => {
    setColumns(prevState => {
      return prevState.filter(data => {
        // @ts-ignore
        if (data.dataIndex === dataIndex) {
          setHiddenColumns(prevState => {
            return [...prevState, dataIndex]
          })
          return false
        }
        return true
      })
    })
  }, [])

  const handleAddRow = useCallback(() => {
    // @ts-ignore
    setDataSource(prevData => {
      const newData = {
        key: prevData.length,
        name: '',
        email: '',
        imageUrl: '',
        addedFrom: '',
        tags: '',
        internalId: '',
        clientId: '',
        phone: '',
        clientPortal: '',
        asignee: {
          name: '',
          imageUrl: '',
          college: ''
        },
        followers: '',
        status: '',
        applications: '',
        lastUpdated: ''
      }
      return [
        ...prevData.slice(0, prevData.length - 1),
        newData,
        { key: prevData.length + 1, isAddBtn: true }
      ]
    })
  }, [])

  if (columns.length === 0) return null

  return (
    <section>
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
      <main className='h-full w-full bg-white'>
        <nav className='h-[72px] border-b px-6 flex justify-between items-center pl-6'>
          <div className='flex items-center gap-5'>
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    borderRadius: 4
                  }
                }
              }}
            >
              <Input
                className='px-2 py-[6px]'
                placeholder='Search Particular'
                prefix={
                  <svg
                    className='mr-[6px]'
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
            </ConfigProvider>
            <Select
              defaultValue='Filter by assigned'
              suffixIcon={
                <img src='/icons/menu/chevron-down.svg' title='Dropdown' />
              }
              options={[]}
            />
            <DatePicker />
          </div>
          <div className='flex items-center gap-9'>
            <div className='flex items-center'>
              <button className='flex items-center gap-[6px] text-xs leading-[16.8px]'>
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
              <div className='mx-5'>
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
              <button className='flex items-center gap-[6px] text-xs leading-[16.8px]'>
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
              <div className='mx-5'>
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
              <button className='flex items-center gap-[6px] text-xs leading-[16.8px]'>
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
            <button className='text-sm font-medium leading-[19.6px] text-[#4786E7]'>
              Clear
            </button>
          </div>
        </nav>
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
        <div className='pl-6'>
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
            <Table
              tableLayout='auto'
              rowSelection={{
                type: 'checkbox'
              }}
              // @ts-ignore
              columns={columns}
              bordered
              pagination={false}
              dataSource={dataSource}
              scroll={{
                x: 1970,
                y: 300
              }}
            />
          </ConfigProvider>
        </div>
      </main>
    </section>
  )
}
