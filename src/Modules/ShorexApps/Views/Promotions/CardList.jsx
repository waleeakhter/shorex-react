import {withTranslation} from 'react-i18next'
import React from 'react'
import { Row, Button , Alert } from 'react-bootstrap'
import { deleteItem } from "../../../Helper/helper"
import { Link } from "react-router-dom"
const Card = (props) => {
    
  const currentUser=JSON.parse(localStorage.getItem('currentUser'))
  
    const { data, Style } = props;
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
        deleteItem(id, 'promotions',props.t)
            .then(res => {
                // console.log(res)
                res ? setPromotions(promotions.filter(item => item.id !== id)) : btn.disabled = false
            })
    }
    return (
        <Row className={` ${Style.row}`}>
            {promotions.length > 0 ? promotions.map(promotion =>
                <div className={Style.cols}  key={promotion.id}>
                    <div className={Style.card}key={promotion?.id.toString()} >
                        <div className={Style.img + ' '}>
                        <object data= {promotion?.promo_file_url} className='w-100'>
		</object>
                        </div>
                        <div className={Style.text}>
                            <h4 className="heading">{text(props.i18n.language === 'es'?promotion.title_fr:promotion.title)}</h4>
                            <p title={promotion?.description}>{text(props.i18n.language === 'es'?promotion.description_fr:promotion.description)}</p>
                        </div>
                        <div className={Style.Buttons}>
                            {
                                currentUser.roles.includes('Admin') &&
                                <Button variant="danger" onClick={(e) => deletePromotion(e, promotion?.id)} > {props.t('shorex:delete')} </Button>
                            }
                            <Link to={`promotions/${promotion.id}/edit`}><Button variant="success" > {props.t('edit')} </Button></Link>
                        </div>
                    </div>
                </div>
            )
                : <Alert variant="danger" className="mt-5 fs-6">Not Data Found <i className="fa-solid fa-diamond-exclamation "></i></Alert>}
        </Row>
    )
}

export default withTranslation(['base', 'shorex'])(Card)