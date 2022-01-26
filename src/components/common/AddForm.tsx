import React from "react"
import {Form, Formik} from "formik"
import * as Yup from 'yup'
import FormItem from "../common/CustomInput"
import './addForm.scss'
import {newItemType} from "./generalTypes";

type AddFormType = {
    setNewItem: (newItem: Array<newItemType>) => void
}

export const AddForm: React.FC<AddFormType> = ({setNewItem}) => {

    const validationSchema = Yup.object({
        title: Yup.string().required('The field "Title" is required'),
        content: Yup.string().required('The field "Content" is required')
    })

    return (
        <div className='addForm'>
            <Formik
                initialValues={{title: "", content: ""}}
                validationSchema={validationSchema}
                onSubmit={(values, {resetForm} ) => {
                    setNewItem([values])
                    resetForm({})
                }}
            >
                {({ isValid, errors, dirty }) => (
                    <div className='container-fluid'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-6'>
                                <Form className='d-flex flex-column m-5 mt-3'>
                                    <FormItem itemId='Title' placeholder='Title' itemType='text'
                                              itemName='title' itemLabel='Title' important={true} errors={errors}/>
                                    <FormItem itemId='Content' placeholder='Content' itemType='text'
                                              itemName='content' itemLabel='Content' important={true} errors={errors}/>
                                    <button type="submit" disabled={!isValid || !dirty} className="btnColor btn btn-success mt-3">ADD</button>

                                </Form>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}