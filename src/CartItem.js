import React from "react";

class CartItem extends React.Component{
    constructor (){
        super();
        this.state={
            pricce:999,
            title:'Mobile Phone',
            qty:1,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qae522N2EzJZbdyGdnALi-BAirqdp8cZc55VoDDtQ&s'
        }
    }
    increaseQuantity=()=>{
        console.log("hii")
    }
    render(){
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:17}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase"
                         className="action-icons"
                          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                          onClick={this.increaseQuantity.bind(this)}
                          />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const style={
    image: {
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}




export default CartItem;