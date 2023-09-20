import { Table, ConfigProvider, Input, Button } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useCallback, useEffect, useState } from 'react'

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
}

export default function EditableTable () {
  const columns: ColumnsType<UserDataType> = [
    {
      dataIndex: 'name',
      title: 'Name',
      width: 171,
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
      filterDropdown: filterProps => (
        <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
          <Button className='w-full' onClick={() => handleColumnHide('name')}>
            Hide
          </Button>
        </div>
      ),
      sorter (a, b) {
        return a.name.length - b.name.length
      },
      render (value, record) {
        return (
          <div className='flex gap-1 items-center'>
            <div className='w-7 aspect-square rounded-[4px] bg-gray-200'></div>
            <div className=''>
              {/* <Input defaultValue={record.name} />
              <Input defaultValue={record.email} /> */}
              <p className='leading-[16.8px]'>{record.name}</p>
              <p className='leading-[16.8px]'>{record.email}</p>
            </div>
          </div>
        )
      }
    },
    {
      dataIndex: 'addedFrom',
      title: 'Added from',
      width: 121,
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
      filterDropdown: filterProps => (
        <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
          <Button
            className='w-full'
            onClick={() => handleColumnHide('addedFrom')}
          >
            Hide
          </Button>
        </div>
      ),
      sorter (a, b) {
        return a.name.length - b.name.length
      },
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'tags',
      title: 'Tags',
      width: 81,
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
      filterDropdown: filterProps => (
        <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
          <Button className='w-full' onClick={() => handleColumnHide('tags')}>
            Hide
          </Button>
        </div>
      ),
      sorter (a, b) {
        return a.name.length - b.name.length
      },
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'internalId',
      title: 'Internal Id',
      width: 111,
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
      filterDropdown: filterProps => (
        <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
          <Button
            className='w-full'
            onClick={() => handleColumnHide('internalId')}
          >
            Hide
          </Button>
        </div>
      ),
      sorter (a, b) {
        return a.name.length - b.name.length
      },
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'clientId',
      title: 'Client Id',
      width: 101,
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'phone',
      title: 'Phone',
      width: 90,
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'clientPortal',
      title: 'Client Portal',
      width: 124,
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'assignee',
      title: 'Assignee',
      width: 183,
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'followers',
      title: 'Followers',
      width: 108,
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'status',
      title: 'Status',
      width: 91,
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'applications',
      title: 'Applications',
      width: 125,
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'lastUpdated',
      title: 'Last Updated',
      width: 131,
      render (value) {
        return <Input defaultValue={value} />
      }
    },
    {
      dataIndex: 'addColumns',
      width: 171,
      filterIcon: () => {
        return (
          <div className='flex items-center gap-2'>
            <p>+ Add Column</p>
          </div>
        )
      },
      filterDropdown: () => (
        <div
          style={{ padding: 8 }}
          onKeyDown={e => e.stopPropagation()}
          className='flex flex-col gap-2'
        >
          {showHiddenColumnsBtns()}
        </div>
      )
    }
  ]

  const [columnsSource, setColumnSource] = useState(columns)
  const [hiddenColumns, setHiddenColumns] = useState<ColumnsType<UserDataType>>(
    []
  )

  const handleColumnShow = useCallback((dataIndex: string) => {
    setColumnSource(prevState => {
      const newFilteredList = [...prevState]
      setHiddenColumns(prevData => {
        const newHiddenList = []
        prevData.forEach(data => {
          if (data.dataIndex !== dataIndex) {
            newHiddenList.push(data)
          } else {
            newFilteredList.unshift(data)
          }
          return newHiddenList
        })
      })
      return newFilteredList
    })
  }, [])

  const showHiddenColumnsBtns = useCallback(() => {
    let localHiddenColumns = []
    setHiddenColumns(prevData => {
      if (!prevData) return prevData
      prevData.forEach(data => {
        localHiddenColumns.push(data)
      })
      return prevData
    })
    return localHiddenColumns.map(data => {
      return (
        <Button
          size='small'
          className='w-full'
          onClick={() => {
            handleColumnShow(data.dataIndex)
          }}
        >
          {data.title}
        </Button>
      )
    })
  }, [])

  const handleColumnHide = useCallback((columnName: string) => {
    setColumnSource(prevData => {
      const newColumnsSource = prevData.filter(column => {
        if (column.dataIndex !== columnName) {
          return true
        }
        setHiddenColumns(prevData => {
          return [...prevData, column]
        })
        return false
      })
      return newColumnsSource
    })
  }, [])

  const dataSource = []
  for (let i = 0; i < 30; i++) {
    dataSource.push({
      key: i,
      name: 'Bisham Kunwor',
      email: 'novelian.nova@gmail.com',
      imageUrl: 'url',
      addedFrom: 'System',
      tags: '',
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
      lastUpdated: '2025-11-19'
    })
  }

  return (
    <section>
      <header className='h-[60px] bg-white mb-2'></header>
      <main className='h-full w-full'>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                cellFontSize: 12,
                paddingContentVerticalLG: 0,
                padding: 0
              },
              Input: {
                controlHeightLG: 34,
                borderRadius: 2,
                fontSize: 12,
                colorBorder: 'transparent',
                paddingInline: 16,
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
              // onChange: (
              //   selectedRowKeys: React.Key[],
              //   selectedRows: UserDataType[]
              // ) => {
              //   console.log(
              //     `selectedRowKeys: ${selectedRowKeys}`,
              //     'selectedRows: ',
              //     selectedRows
              //   )
              // },
              // getCheckboxProps: (record: UserDataType) => ({
              //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
              //   name: record.name
              // })
            }}
            columns={columnsSource}
            bordered
            pagination={false}
            dataSource={dataSource}
            scroll={{
              x: 1444,
              y: 300
            }}
          />
        </ConfigProvider>
      </main>
    </section>
  )
}
