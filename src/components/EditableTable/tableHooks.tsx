import { ConfigProvider, Input, Button } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useCallback, useEffect, useMemo, useState } from 'react'
import generateDataSource, { columnDetails } from './Datasource'

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

export function useTableHooks () {
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
          return (
            <div className='px-4 py-2'>
              <Input defaultValue={value} />
            </div>
          )
        }
      }
      if (columnDetails.dataIndex === 'name') {
        return {
          ...response,
          render (value: undefined | string | number, record: UserDataType) {
            if (record.isAddBtn) {
              return (
                <div className='px-4 py-2'>
                  <ConfigProvider
                    theme={{
                      components: {
                        Button: {
                          colorText: 'var(--h4)'
                        }
                      }
                    }}
                  >
                    <Button onClick={handleAddRow} type='text'>
                      + Add Client’s details
                    </Button>
                  </ConfigProvider>
                </div>
              )
            }
            return (
              <div className='flex gap-2 items-center group px-4 py-2'>
                <div className=''>
                  {typeof record.imageUrl === 'string' &&
                  record.imageUrl.length > 2 ? (
                    <div className='rounded-[4px] w-7 aspect-square overflow-hidden'>
                      <img
                        src={record.imageUrl}
                        title={record.name}
                        className='object-cover h-full w-full'
                      />
                    </div>
                  ) : (
                    <div className='rounded-[4px] bg-gray-200 w-7 aspect-square'></div>
                  )}
                </div>
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
                    <ConfigProvider
                      theme={{
                        components: {
                          Input: {
                            colorText: 'var(--h2-highlight)'
                          }
                        }
                      }}
                    >
                      <Input defaultValue={record.name} />
                    </ConfigProvider>
                    <Input defaultValue={record.email} />
                  </ConfigProvider>
                </div>
                <div className='group-hover:opacity-100 group-hover:pointer-events-auto cursor-pointer opacity-0 pointer-events-none border rounded-full border-dashed border-slate-400'>
                  <svg
                    className='m-1 h-3 w-3'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.00001 2.91666V11.0833M2.91667 6.99999H11.0833'
                      stroke='#667085'
                      stroke-width='0.583333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
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
      } else if (columnDetails.dataIndex === 'assignee') {
        return {
          ...response,
          render (value: undefined | string | number, record: UserDataType) {
            if (record.isAddBtn) {
              return <div className='h-8'></div>
            }
            return (
              <div className='flex gap-2 items-center group px-4 py-2'>
                <div className=''>
                  {typeof record.imageUrl === 'string' &&
                  record.imageUrl.length > 2 ? (
                    <div className='rounded-[4px] w-7 aspect-square overflow-hidden'>
                      <img
                        src={record.imageUrl}
                        title={record.name}
                        className='object-cover h-full w-full'
                      />
                    </div>
                  ) : (
                    <div className='rounded-[4px] bg-gray-200 w-7 aspect-square'></div>
                  )}
                </div>
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
                    <ConfigProvider
                      theme={{
                        components: {
                          Input: {
                            colorText: 'var(--h2-highlight)'
                          }
                        }
                      }}
                    >
                      <Input defaultValue={record.name} />
                    </ConfigProvider>
                    <Input defaultValue={record.email} />
                  </ConfigProvider>
                </div>
                <div className='md:cursor-pointer'>
                  <svg
                    className='m-1 h-3 w-3'
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                  >
                    <path
                      d='M11.6666 4.08333H5.83331C3.90032 4.08333 2.33331 5.65034 2.33331 7.58333C2.33331 9.51633 3.90032 11.0833 5.83331 11.0833H11.6666M11.6666 4.08333L9.33331 1.75M11.6666 4.08333L9.33331 6.41667'
                      stroke='#667085'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
              </div>
            )
          }
        }
      } else if (columnDetails.dataIndex === 'followers') {
        return {
          ...response,
          render (value: undefined | string | number, record: UserDataType) {
            if (record.isAddBtn) {
              return <div className='h-8'></div>
            }
            return (
              <div className='flex items-center px-4 py-2'>
                <Input defaultValue={value} />
                <div className='md:cursor-pointer'>
                  <svg
                    className='m-1 h-3 w-3'
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                  >
                    <path
                      d='M11.6666 4.08333H5.83331C3.90032 4.08333 2.33331 5.65034 2.33331 7.58333C2.33331 9.51633 3.90032 11.0833 5.83331 11.0833H11.6666M11.6666 4.08333L9.33331 1.75M11.6666 4.08333L9.33331 6.41667'
                      stroke='#667085'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
              </div>
            )
          }
        }
      } else if (columnDetails.dataIndex === 'status') {
        return {
          ...response,
          className: 'statusCell',
          render (value: undefined | string | number, record: UserDataType) {
            if (record.isAddBtn) {
              return <div className='h-8'></div>
            }
            return (
              <div
                id='statusData'
                className={`flex items-center h-full px-4 py-2 ${
                  record.status === 'Completed'
                    ? 'bg-[#4AC86E]'
                    : 'bg-[#4786E7]'
                }`}
              >
                <ConfigProvider
                  theme={{
                    components: {
                      Input: {
                        colorText: 'white'
                      }
                    }
                  }}
                >
                  <Input defaultValue={value} />
                </ConfigProvider>
              </div>
            )
          }
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
            <div
              id='showColumnsHeader'
              className='flex items-center gap-2 pl-4'
            >
              <p className='text-xs text-[var(--h4)] font-normal'>
                + Add Column
              </p>
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

  // useEffect(() => {
  //   document.querySelectorAll('.statusCell').forEach((element, index) => {
  //     if (index === 0) return
  //     console.log(element)
  //     const isCompleted =
  //       // @ts-ignore
  //       element.children[0]?.children[0]?.value === 'Completed'
  //     if (isCompleted) {
  //       element.classList.add('green')
  //       return
  //       // @ts-ignore
  //     } else if (element.children[0]?.children[0]?.value === 'In Progress') {
  //       element.classList.add('blue')
  //     }
  //   })
  // })

  return {
    columns,
    hiddenColumns,
    dataSource,
    handleAddRow,
    handleColumnHide,
    handleColumnShow
  }
}
