import React from "react";

const BookProductPay = () => {
    return (
        <>
        <div className="container pl-2 my-2">
            <strong>Người bán: </strong>
            <a href="#">Lakeside Books (Benton Harbor MI, U.S.A.)</a>
            <a href="#" className="d-block">Terms of Sale</a>
        </div>
        <div style={{ display: 'flex' }} className="pageHeader">
            <div style={{ flex: 6 }}>
                <div className="book pl-2">Lorem ipsum dolor sit amet
                 consectetur adipisicing elit. Beatae adipisci minus 
                 voluptates, praesentium commodi modi quam obcaecati 
                 nobis debitis, perspiciatis facere, eius error placeat
                  molestiae est ullam sunt aliquam facilis.</div>

            </div>
            <div style={{ flex: 2 }}>
                <div className="row">
                    <div className="col">
                        <strong>Giá</strong>
                    </div>
                    <div className="col">
                        <strong>Số lượng</strong>
                    </div>
                </div>
            </div>
            <div style={{ flex: 2 }}>
                <h1>abc</h1>
            </div>
        </div>
        </>
    )
}

export default BookProductPay;