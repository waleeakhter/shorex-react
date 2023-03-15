import React,{useState} from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col, Button } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'
import Api from "@evenlogics/whf-api";
import { toast } from 'react-toastify'
const AddProduct = (props) => {
  const { id } = props.match.params
  const [serverErrors, setServerErrors] = useState([])
  


  let fields = {
    title: {
      type: 'text',
      label: props.t('shorex:sub-item'),
      required: true,
      name: 'title',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-subitem-name'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    title_fr: {
      type: 'text',
      label: props.t('shorex:sub-item-es'),
      required: true,
      name: 'title_fr',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-sub-name-in-spanish'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    item_type: {
      type: 'advanceSelect',
      target: 'item-types?limit=99999',
      optionLabel: "title",
      optionValue: "id",
      label: 'Item',
      required: true,
      name: 'item_type_id',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:select-item'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },

    pts: {
      type: 'number',
      label: props.t('shorex:item-points'),
      required: true,
      name: 'pts',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-some-pts'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },

    questions: {
      type: 'text',
      label: props.t('shorex:quantity-question'),
      required: true,
      name: 'questions',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-question'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    questions_fr: {
      type: 'text',
      label: props.t('shorex:quantity-question-es'),
      required: true,
      name: 'questions_fr',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-question-es'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },

    // "Media": {
    //   type: "h4",
    //   col: 12,
    // },

    product_img: {
      type: 'filePic',
      label: props.t('shorex:item-image'),
      required: id ? false : true,
      name: 'product_img',
      col: ' col-sm-6 col-xl-4',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
  }

  
 const  renderServerErrors = () => {
   
  if(serverErrors.length===0){
      return []
  }
    return (
        <ul className="alert alert-danger">
            {serverErrors.map((error) => {
                return <li key={error}>{error}</li>;
            })}
        </ul>
    );
};

  return (
    <div>
      <h4 className="heading mb-4">{id ? props.t('shorex:edit-products') : props.t('shorex:add-products')}</h4>
      <Row>
        <Col xxl="10">
          {
            renderServerErrors()
          }
          <FormGenerator
            targetEntity={'products'}
            fields={fields}
            targetId={id}
            name="products"
            debug={false}
            redirect="apps/products"
            extraVals={{ _method: id ? 'Patch' : null }}
            addComponent={<SubmitComponent  id={id} history={props.history} t={props.t} setServerErrors={setServerErrors}/>}
            noFooter
          />
         
        </Col>
      </Row>
    </div>
  )
}


function SubmitComponent(props){
  const {values,setFieldValue,setDisableButton,initialValues,setserverError,id,history,t,setServerErrors}=props
  console.log(values,setFieldValue,setDisableButton,initialValues,setserverError)
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  
  const submit=()=>{
    let data=values
    setIsSubmitting(true)
   if(values.product_img){  
    let formData = new FormData();
     formData.append('title',values.title)
     formData.append('title_fr',values.title_fr)
     formData.append('item_type_id',values.item_type_id)
     formData.append('pts',values.pts)
     formData.append('questions',values.questions)
     formData.append('questions_fr',values.questions_fr) 
     formData.append('product_img',values.product_img)
     if(id){
       formData.append('_method','patch')  
     }  
    data=formData
  }
 let method = "post";
    let url = "/products";
    if (id) {
      method='patch'
        if(values.product_img){
          method='post'
        }
        url = "/products/" + id;
    }



    Api.request(method, url, data)
      .then((response) => {
        toast.success(t('general-form-success'));
        history.push(`/apps/products`)
      })
      .catch((error) => {
        if (typeof error.response !== 'undefined' && error.response.data.errors) {
          const errorArr=Object.values(error.response.data.errors);
          setServerErrors(errorArr)
      }
      }).finally(()=> setIsSubmitting(false));
  }
  return  <Button disabled={(!values.product_img && !values.url)|| values.questions===undefined || values.questions_fr===undefined||isSubmitting} onClick={submit}>{t('base:general-submit')}</Button>
}
export default withTranslation(['base', 'shorex'])(AddProduct)
