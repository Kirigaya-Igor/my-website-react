import React from "react";
import {ErrorMessage, Field} from "formik"
import TextError from "./TextError"

type FormItemPropsType = {
    itemId: string
    placeholder: string
    itemType: string
    itemName: string
    itemLabel: string
    important: boolean
    errors: any
    component?: any
}

const FormItem: React.FC<FormItemPropsType> = ({itemId, placeholder, itemType, itemName, itemLabel, important, errors, component}) => {
    return (
        <div className="mb-1">
            <label htmlFor={itemId} className="textColor form-label">
                {itemLabel} {important ? <span className='redText'>*</span> : ''}
            </label>
            <ErrorMessage name={itemName} component={TextError}/>
            <Field className='form-control customField' id={itemId}
                   placeholder={placeholder} type={itemType}
                   name={itemName} component={component}/>

        </div>
    )
}

export default FormItem