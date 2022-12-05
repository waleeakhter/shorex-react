import React, { useState } from 'react'
import { Spinner, Alert } from 'react-bootstrap'
import CommonCard from "./../CommonCardView/CommonCard"
import Api from "@evenlogics/whf-api"
import { deleteItem } from "./../../Modules/Helper/helper"
import { Paginator } from 'primereact/paginator';
import "./pagination.scss"
import { Dropdown } from 'primereact/dropdown';
const ListView = ({ view, target, hide, edit, redirect, Filters, filterShow }) => {

  const [items, setitems] = React.useState([])
  const [spinner, setSpinner] = React.useState(true)
  const [filterQuery, setFilterQuery] = React.useState({})
  const [first, setFirst] = useState(0);
  const [pagination, setPagination] = useState({ page: 0, limit: '12' });
  React.useEffect(() => {

    let params = "";
    if (filterShow && Object.keys(filterQuery).length > 0) {
      Object.keys(filterQuery).forEach((key, i) => {
        params = params + `${i !== 0 ? '&' : ""}${key}=${filterQuery[key]}`;
      })
    }


    Api.request('get', `/${target}?${params ?? ""}&page=${pagination.page + 1}&limit=${pagination.limit}`).then((res) => {
      console.log(res)
      setitems(res)
      setSpinner(false)

    }).catch((err) => console.log(err))
  }, [target, filterQuery, filterShow, pagination.limit, pagination.page])



  const callBack = (id) => {
    console.log(id)
    deleteItem(id, target).then((res) => {
      console.log(res)
      res && setitems(items.filter(item => item.id !== id))
    }).catch((err) => {
      console.log(err)
    })

  }
  const rows = [
    { label: '12', value: '12' },
    { label: '24', value: '24' },
    { label: '30', value: '30' },
    { label: '50', value: '50' },
  ];
  const template = {
    layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink ',
    'RowsPerPageDropdown': (options) => {
      return ("")
    },
  }
  const leftContent = <Dropdown scrollHeight="100%" value={pagination.limit} options={rows} onChange={(e) => { setPagination({ page: 0, limit: e.value }); setSpinner(true) }} />
  return (
    <>
      {!spinner ?

        (<>
          {filterShow && <Filters setFilterQuery={setFilterQuery} />}
          {items?.data?.length > 0 ?

            <div className={`customerRow ${view}`} >
              {items?.data?.map((item, i) =>
                <CommonCard
                  text1={item.first_name + " " + item.last_name}
                  text2={item.business_name}
                  redirect={redirect?.replace(":id", `${item.id}`)}
                  view={view}
                  key={item?.id}
                  avatar={item?.avatar}
                  edit={`${edit}/${item.id}/edit`}
                  delete={(e) => { callBack(item.id) }}
                  hide={hide}
                />
              )}
            </div>

            : <Alert className="mt-5 fs-6" variant={'danger'}>
              No Data Found <i className="fa-solid fa-diamond-exclamation"></i>
            </Alert>}
        </>
        )

        : <div className="py-5 text-center"><Spinner animation="border" /></div>}
      {items?.data?.length > 0 && <Paginator template={template} rows={items?.meta?.per_page} leftContent={leftContent}
        totalRecords={items?.meta?.total} first={first}
        onPageChange={(e) => { setFirst(e.first); setPagination({ ...pagination, page: e.page }); setSpinner(!spinner) }}>
      </Paginator>}

    </>
  )
}

export default ListView