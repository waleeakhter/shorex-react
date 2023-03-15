import React from 'react'
import AdvanceSelect from "./../../../../Common/AdvanceSelect/AdvanceSelect"
import { Row, Col, Button, Form } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import {withTranslation} from 'react-i18next'
import moment from 'moment/moment'

const DriverFilters = (props) => {
    const { setFilterQuery } = props;
    const [filters, setFilters] = React.useState({ created_at: null, sort: null, id: null });
    const handleSelectChange = (value) => {
        console.log(value)
        setFilters({ ...filters, sort: value })
    }
    const options = [{ value: "first_name|asc", label: "A-Z" }, { value: "first_name|desc", label: "Z-A" }]
    const search = () => {
        let _filters={...filters}
        if(filters?.created_at){
            _filters.created_at=moment(filters.created_at).format('yyyy-MM-DD')
        }
        setFilterQuery(_filters)
     
    }
    return (
        <Row className="animated fadeIn mt-4 gy-3" style={{ gap: "20px 0px" }}>
            <Form.Group as={Col} sm="6" xl="4" controlId="first_name" >
                <Form.Label>{props.t('shorex:joining-date')}</Form.Label>
                <DatePicker selected={filters.created_at}
                    onChange={date => setFilters({ ...filters, created_at: date })}
                    placeholderText=''
                    autoComplete='off'
                    dateFormat="dd/MM/yyyy"
                    name="created_at"
                />
            </Form.Group>
            <Form.Group as={Col} sm="6" xl="4" controlId="category_id" >
                <Form.Label>{props.t('shorex:sort-by')}</Form.Label>
                <AdvanceSelect options={options} name="sort"
                    callback={handleSelectChange}
                />
            </Form.Group>

            <Form.Group as={Col} sm="6" xl="4" controlId="category_id" >
                <Form.Label>{props.t('shorex:user-id')}</Form.Label>
                <Form.Control type="text" placeholder="" name="id" onChange={e => setFilters({ ...filters, id: e.target.value })} />
            </Form.Group>

            <Form.Group as={Col} xs="12" controlId="category_id" >
                <Button variant="success btn-search" onClick={search} >{props.t('base:general-reset-search')}</Button>
            </Form.Group>
        </Row>
    )
}

export default withTranslation(['base', 'shorex'])(DriverFilters)