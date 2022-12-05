import React from 'react'
import AdvanceSelect from "./../../../../Common/AdvanceSelect/AdvanceSelect"
import { Row, Col, Button, Form } from 'react-bootstrap'
import DatePicker from "react-datepicker"

const Filters = (props) => {
    const [filters, setFilters] = React.useState({ joining_date: null, sort: null, user_id: null });
    const handleSelectChange = (value) => {
        console.log(value)
        setFilters({ ...filters, sort: value })
    }
    const options = [{ value: "A-Z", label: "A-Z" }, { value: "Z-A", label: "Z-A" }]
    const search = () => {

        props.search(filters)
    }
    return (
        <Row className="animated fadeIn mt-4" style={{ gap: "20px 0px" }}>
            <Form.Group as={Col} sm="6" xl="4" controlId="first_name" >
                <Form.Label>Joining Date</Form.Label>
                <DatePicker selected={filters.joining_date}
                    onChange={date => setFilters({ ...filters, joining_date: date })}
                    placeholderText='Select Joining Date'
                    autoComplete='off'
                    dateFormat="dd/MM/yyyy"
                    name="joining_date"
                />
            </Form.Group>
            <Form.Group as={Col} sm="6" xl="4" controlId="category_id" >
                <Form.Label>Sort By</Form.Label>
                <AdvanceSelect options={options} name="sort"
                    handleSelectChange={handleSelectChange}
                />
            </Form.Group>

            <Form.Group as={Col} sm="6" xl="4" controlId="category_id" >
                <Form.Label>User ID</Form.Label>
                <Form.Control type="text" placeholder="Enter user ID" name="user_id" onChange={e => setFilters({ ...filters, user_id: e.target.value })} />
            </Form.Group>

            <Form.Group as={Col} sm="6" xl="4" controlId="category_id" >
                <Button variant="success" onClick={search} >Search</Button>
            </Form.Group>
        </Row>
    )
}

export default Filters