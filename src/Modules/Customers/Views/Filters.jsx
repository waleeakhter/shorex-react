import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import AdvanceSelect from "./../../../Common/AdvanceSelect/AdvanceSelect"
import {withTranslation} from 'react-i18next'

const Filters = (props) => {
    const { setFilterQuery } = props;
    const [search, setSearch] = React.useState({})

    const handleSelectChange = (value) => {
        console.log(value, "fields_category_id")
        value && setSearch({ ...search, fields_category_id: value })
    }

    const filterFunction = () => {
        console.log(search, 'search')
        setFilterQuery(search)
    }
    return (
        <>
            <Row className="animated fadeIn mt-4 gy-3">
                <Form.Group as={Col} sm="6" xl="4" controlId="first_name" >
                    <Form.Label>{props.t('shorex:postal-code')} </Form.Label>
                    <Form.Control type="text" placeholder={props.t('shorex:enter-postal-code')}
                        name="fields_post_code" autoComplete='off'
                        onChange={(e) => {
                            setSearch({ ...search, fields_post_code: e.target.value })
                        }
                        }
                    />
                </Form.Group>
                {/* <Form.Group as={Col} sm="6" xl="4" controlId="category_id" >
          <Form.Label>Item Types</Form.Label>
          <AdvanceSelect target="categories" name="category_id"
            lableValue="title"
            handleSelectChange={handleSelectChange}
          />
        </Form.Group> */}

                <Form.Group as={Col} sm="6" xl="4" controlId="category_id" >
                    <Form.Label>{props.t('shorex:nature-of-business')}</Form.Label>
                    <AdvanceSelect target="categories?limit=9999" name="fields_category_id" lableValue="title"
                        callback={handleSelectChange}
                    />
                </Form.Group>
                <Form.Group as={Col} xs="12" controlId="category_id" >
                    <Button variant="success" className="btn btn-search" onClick={filterFunction}>{props.t('base:general-search')}</Button>
                </Form.Group>
            </Row>
        </>
    )
}

export default withTranslation(['base', 'shorex'])(Filters)