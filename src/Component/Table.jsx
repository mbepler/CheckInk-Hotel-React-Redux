import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
 


class Table extends React.Component{
    render() {
    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
    }, {
        Header: 'Document',
        accessor: 'document'
    }, {
        Header: 'Amount Spent ($)',
        accessor: 'total'
    }]
    return <ReactTable
        data={this.props.data}
        columns={columns}
        defaultPageSize={5}
    />
    }

}

export default Table
