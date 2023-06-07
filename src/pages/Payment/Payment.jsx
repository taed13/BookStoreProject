import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Payment.css';


const Payment = () => {
    
    return (
        <>
        <div className="container">
            <div className="row m-0">
                <div className="col-md-7 col-12">
                    <div className="row">
                        <div className="col-12 mb-4">
                        <div className="row box-right">
                            <div className="col-md-8 ps-0 ">
                                <p className="ps-3 textmuted fw-bold h6 mb-0">TOTAL RECIEVED</p>
                                <p className="h1 fw-bold d-flex"> <span className=" fas fa-dollar-sign textmuted pe-1 h6 align-text-top mt-1"></span>84,254 <span className="textmuted">.58</span> </p>
                                <p className="ms-3 px-2 bg-green">+10% since last month</p>
                            </div>
                            <div className="col-md-4">
                                <p className="p-blue"> <span className="fas fa-circle pe-2"></span>Pending </p>
                                <p className="fw-bold mb-3"><span className="fas fa-dollar-sign pe-1"></span>1254 <span className="textmuted">.50</span> </p>
                                <p className="p-org"><span className="fas fa-circle pe-2"></span>On drafts</p>
                                <p className="fw-bold"><span className="fas fa-dollar-sign pe-1"></span>00<span className="textmuted">.00</span></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 px-0 mb-4">
                        <div className="box-right">
                            <div className="d-flex pb-2">
                                <p className="fw-bold h7"><span className="textmuted">quickpay.to/</span>Publicnote</p>
                                <p className="ms-auto p-blue"><span className=" bg btn btn-primary fas fa-pencil-alt me-3"></span> <span className=" bg btn btn-primary far fa-clone"></span> </p>
                            </div>
                            <div className="bg-blue p-2">
                                <p className="h8 textmuted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae dolorem voluptas nemo, modi eos minus nesciunt. 
                                <p className="p-blue bg btn btn-primary h8">LEARN MORE</p>
                                </p> 
                            </div>
                        </div>
                        </div>
                        <div className="col-12 px-0">
                        <div className="box-right">
                            <div className="d-flex mb-2">
                                <p className="fw-bold">Create new invoice</p>
                                <p className="ms-auto textmuted"><span className="fas fa-times"></span></p>
                            </div>
                            <div className="d-flex mb-2">
                                <p className="h7">#AL2545</p>
                                <p className="ms-auto bg btn btn-primary p-blue h8"><span className="far fa-clone pe-2"></span>COPY PAYMENT LINK </p>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <p className="textmuted h8">Project / Description</p>
                                    <input className="form-control" type="text" placeholder="Legal Consulting"/> 
                                </div>
                                <div className="col-6">
                                    <p className="textmuted h8">Issused on</p>
                                    <input className="form-control" type="text" placeholder="Oct 25, 2020"/> 
                                </div>
                                <div className="col-6">
                                    <p className="textmuted h8">Due on</p>
                                    <input className="form-control" type="text" placeholder="Oct 25, 2020"/> 
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12 ps-md-5 p-0 ">
                    <div className="box-left">
                        <p className="textmuted h8">Invoice</p>
                        <p className="fw-bold h7">Alex Parkinson</p>
                        <p className="textmuted h8">3897 Hickroy St, salt Lake city</p>
                        <p className="textmuted h8 mb-2">Utah, United States 84104</p>
                        <div className="h8">
                        <div className="row m-0 border mb-3">
                            <div className="col-6 h8 pe-0 ps-2">
                                <p className="textmuted py-2">Items</p>
                                <span className="d-block py-2 border-bottom">Legal Advising</span> <span className="d-block py-2">Expert Consulting</span> 
                            </div>
                            <div className="col-2 text-center p-0">
                                <p className="textmuted p-2">Qty</p>
                                <span className="d-block p-2 border-bottom">2</span> <span className="d-block p-2">1</span> 
                            </div>
                            <div className="col-2 p-0 text-center h8 border-end">
                                <p className="textmuted p-2">Price</p>
                                <span className="d-block border-bottom py-2"><span className="fas fa-dollar-sign"></span>500</span> <span className="d-block py-2 "><span className="fas fa-dollar-sign"></span>400</span> 
                            </div>
                            <div className="col-2 p-0 text-center">
                                <p className="textmuted p-2">Total</p>
                                <span className="d-block py-2 border-bottom"><span className="fas fa-dollar-sign"></span>1000</span> <span className="d-block py-2"><span className="fas fa-dollar-sign"></span>400</span> 
                            </div>
                        </div>
                        <div className="d-flex h7 mb-2">
                            <p className="">Total Amount</p>
                            <p className="ms-auto"><span className="fas fa-dollar-sign"></span>1400</p>
                        </div>
                        <div className="h8 mb-5">
                            <p className="textmuted">Lorem ipsum dolor sit amet elit. Adipisci ea harum sed quaerat tenetur </p>
                        </div>
                        </div>
                        <div className="">
                        <p className="h7 fw-bold mb-1">Pay this Invoice</p>
                        <p className="textmuted h8 mb-2">Make payment for this invoice by filling in the details</p>
                        <div className="form">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card border-0"> <input className="form-control ps-5" type="text" placeholder="Card number"/> <span className="far fa-credit-card"></span> </div>
                                </div>
                                <div className="col-6"> <input className="form-control my-3" type="text" placeholder="MM/YY"/> </div>
                                <div className="col-6"> <input className="form-control my-3" type="text" placeholder="cvv"/> </div>
                                <p className="p-blue h8 fw-bold mb-3">MORE PAYMENT METHODS</p>
                            </div>
                            <div className="btn btn-primary d-block h8">PAY <span className="fas fa-dollar-sign ms-2"></span>1400<span className="ms-3 fas fa-arrow-right"></span></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Payment;