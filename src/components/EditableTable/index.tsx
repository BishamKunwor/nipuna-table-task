import { Table } from 'antd'
import { useTableHooks } from './tableHooks'
import TableConfigs from './TableConfigs'

export default function EditableTable () {
  const { columns, dataSource, handleAddRow } = useTableHooks()
  if (columns.length === 0) return null

  return (
    <>
      <TableConfigs handleAddRow={handleAddRow} />
      <div className='pl-6'>
        <Table
          tableLayout='auto'
          rowClassName={record => {
            console.log(record)
            return 'hello'
          }}
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
            y: 500
          }}
        />
      </div>
    </>
  )
}
