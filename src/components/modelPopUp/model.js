"use client"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export function MyVerticallyCenteredModal(props) {
    const { noticeData, ...otherProps } = props
    // console.log(noticeData, "noticeData")
    const routes = useRouter()
    const linkToProductDetails = () => {
        routes.push(noticeData?.url)
    }
    return (
        <Modal
            {...otherProps}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    <div style={{ color: 'black' }}>
                        {noticeData?.title}
                    </div>


                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {noticeData?.url && (
                    <Link href={noticeData?.url}>
                        <div className='model-img'>
                            <img src={noticeData?.photo} alt="product" />
                        </div>
                    </Link>
                )}

            </Modal.Body>
            <Modal.Footer>

                <Button style={{ background: "#B6B9BE" }} onClick={otherProps.onHide}>Close</Button>
                <Button onClick={linkToProductDetails}>Learn More</Button>

            </Modal.Footer>
        </Modal>
    );
}