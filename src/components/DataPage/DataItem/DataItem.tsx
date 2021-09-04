import React, {useEffect, useState} from "react"
import {ApiDataType} from "../../API/appAPI";
import {AddForm} from "../../common/AddForm";
import {useAuthState} from "react-firebase-hooks/auth";
import {firebaseInit} from "../../firebase/firebaseInit";
import {newItemType} from "../../common/generalTypes";

const admin = process.env.REACT_APP_ADMIN_ID;

type DataItemType = {
    myData: Array<ApiDataType>
    receiveNewItem: (newItem: Array<newItemType>) => void
    receiveDeleteItem: (deleteItem: string) => void
}

export const DataItem: React.FC<DataItemType> = ({myData, receiveNewItem, receiveDeleteItem}) => {

    const [user] = useAuthState(firebaseInit.auth());
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        if(myData.length !== 0){
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
    }, [myData])

    return (
        <>
            {isEmpty && <h3 className='d-flex justify-content-center text-white'>The database is empty.</h3>}

            {myData.map((item, index, array) => {
                let lastElem = false
                if(index === array.length - 1){
                    lastElem = true
                }
                return (
                    <div className='col-12 mb-3 d-flex justify-content-between' key={index}>
                        <div className='col-1'></div>
                        <div className={`col-10 d-flex justify-content-between ${lastElem ? '' : 'dataItem'}`}>
                            <h6 className="textColor">{item.title}</h6>

                            <div className='d-flex justify-content-end'>
                                <span className='textColor'>{item.content}</span>
                                {user && admin === user.uid ?
                                    <button type="button" className="btn btn-danger btn-sm" style={{marginLeft: '30px'}}
                                            onClick={() => receiveDeleteItem(item.id)}>delete</button>
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                        <div className='col-1'></div>
                    </div>)
            })}

            {user && admin === user.uid ? <div><AddForm setNewItem={receiveNewItem}/></div> : <div></div>}
        </>
    )
}