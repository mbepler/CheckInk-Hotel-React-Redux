import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
 


class Table extends React.Component{
    render() {
    const data = [{
        nome: 'Fulano',
        documento: '99999-89-988',
        valorGasto: '999,52'
    }]
    
    const columns = [{
        Header: 'Nome',
        accessor: 'name' // String-based value accessors!
    }, {
        Header: 'Documento',
        accessor: 'document'
    }, {
        Header: 'Valor Gasto (R$)',
        accessor: 'phone'
    }]
    return <ReactTable
        data={this.props.data}
        columns={columns}
        defaultPageSize={5}
    />
    }

}

export default Table
