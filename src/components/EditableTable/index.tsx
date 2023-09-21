import { Table, ConfigProvider, Input, Button } from 'antd'
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
    <>
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
    </>
  )
}
