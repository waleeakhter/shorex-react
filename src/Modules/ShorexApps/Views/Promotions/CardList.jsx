import React from 'react'
import { Row, Button , Alert } from 'react-bootstrap'
import { deleteItem } from "../../../Helper/helper"
import { Link } from "react-router-dom"
const Card = ({ data, Style }) => {
    const [promotions, setPromotions] = React.useState([])
    const text = (text => {
        return text.length > 75 ? text.slice(0, 75) + '...' : text
    })
    React.useEffect(() => {
        setPromotions(data)
    }, [data])

    const deletePromotion = (e, id) => {
        const btn = e.target;
        btn.disabled = true
        deleteItem(id, 'promotions')
            .then(res => {
                console.log(res)
                res ? setPromotions(promotions.filter(item => item.id !== id)) : btn.disabled = false
            })
    }
    return (
        <Row className={` ${Style.row}`}>
            {promotions.length > 0 ? promotions.map(promotion =>
                <div className={Style.cols}  key={promotion.id}>
                    <div className={Style.card}key={promotion?.id.toString()} >
                        <div className={Style.img}>
                            <img src={promotion?.promo_image_url} alt={"promotion-banner"} className="w-100" />
                        </div>
                        <div className={Style.text}>
                            <h4 className="heading">{text(promotion?.title)}</h4>
                            <p title={promotion?.description}>{text(promotion?.description)}</p>
                        </div>
                        <div className={Style.Buttons}>
                            <Button variant="danger" onClick={(e) => deletePromotion(e, promotion?.id)} > Delete </Button>
                            <Link to={`promotions/${promotion.id}/edit`}><Button variant="success" > Edit </Button></Link>
                        </div>
                    </div>
                </div>
            )
                : <Alert variant="danger" className="mt-5 fs-6">Not Data Found <i className="fa-solid fa-diamond-exclamation "></i></Alert>}
        </Row>
    )
}

export default Card