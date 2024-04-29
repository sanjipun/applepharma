"use client";
import React, { useEffect } from 'react'
import Model, { MyVerticallyCenteredModal } from './model'
import { getNoticeData } from '@/services/api/general-api';

const ModelPopUpComponent = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [noticeData, setNoticeData] = React.useState({});

    useEffect(() => {
        getNoticeData().then((data) => {
            setNoticeData(data)
            if(data?.is_main === false){
                setModalShow(false)
            }
            else{
                setTimeout(() => {
                    setModalShow(true)
                }, 1300);
            }
        })  
        // set the function after some seonds
       
    }, [])
//   console.log(noticeData, "noticeData")
    return (
        <div>
           <MyVerticallyCenteredModal show={modalShow} 
           onHide={() => setModalShow(false)} 
           noticeData={noticeData}
            />
        </div>
    )
}

export default ModelPopUpComponent