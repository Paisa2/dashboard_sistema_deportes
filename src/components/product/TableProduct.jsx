import { Button } from "@mui/material"
import { useState } from "react"

function TableProduct({
    dataTableRef,
    products,
    pagination,
    allfilters,
    setAllfilters,
    setProductSelected,
    loading,
    setShowDeleteDialog,
    setShowInfoDialog,
    setShowFormDialog
    }) {
      
    const [sortField, setSortField] = useState('')
    const [sortOrder, setSortOrder] = useState('')

    const handleFilter = (e) => {
        const values = Object.assign({}, e.filters)
        const filters = {}
        for (const key in values) {
            if(typeof values[key].value === 'string') values[key].values[key].value.trin() 
              if(values[key].value !== null && values[key].value !== '') {
                  if(['nombre', 'marca', 'precio'].includes(key)){
                      filters[`filter[${key}][like]`] = values[key].value
                  } else {
                      filters[`filter[${key}]`] = values[key].value
                  }
              }
            }
            if(allfilters) {
              if(allfilters.sort) {
                filters.sort = allfilters.sort
              }
              if(allfilters.page_size) {
                  filters.page_size = allfilters.page_size
              }
            }
            setAllfilters(filters)
        }

        const handleSort = (e) => {
          setSortField(e.sortField)
          setSortOrder(e.sortOrder)
          console.log(e)
          let value = ''
          if(e.sortOrder === 1) {
            value = e.sortField
          } else {
            value = `-${e.sortField}`
          }
          setAllfilters({...allfilters, sort: value, page: 1})
        }

        const handlePagination = (e) => {
          console.log(e)
          setAllfilters({...allfilters, page: e.page+1, page_size: e.rows})
        }

        
        const handleDelete = (rowData) => {
          setProductSelected(rowData)
          setShowDeleteDialog(true)
        }

        const handleUpdate = (rowData) => {
            setProductSelected(rowData)
            setShowFormDialog(true)
        }

        const handleView = (rowData) => {
            setProductSelected(rowData)
            setShowInfoDialog(true)
        }

        const handleClearFilters = () => {
          if(dataTableRef.current) {
            dataTableRef.current.reset()
            setAllfilters({})
          }
        }

        const actionsRowFilterTemplate = () => {
          return <div className='d-flex justify-content-center'><Button type="button" icon='pi pi-filter-slash' label= 'Limpiar' className='p-button-outlined' onClick={handleClearFilters} /></div>
        }

        const actionsBodyTemplate = rowData  => (
          <div className='d-flex'>
              <span
                  className='ms-2 cursor-pointer'
                  onClick={()=> handleView(rowData)}
                  title='Visualizar'
                  >
                  <i className='pi pi-eye'></i>
              </span>
              <span
                  className='ms-2 cursor-pointer'
                  onClick={()=> handleUpdate(rowData)}
                  title='Editar'
                  >
                  <i className='pi pi-pencil'></i>
              </span>
              <span
                  className='ms-2 cursor-pointer'
                  onClick={()=> handleDelete(rowData)}
                  title='Eliminar'
                  >
                  <i className='pi pi-trash'></i>
              </span>
          </div>
      )
    
  return (
          <>
          </>
  )
}

export default TableProduct