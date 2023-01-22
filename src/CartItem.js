import React from "react";

class CartItem extends React.Component{
    constructor (){
        super();
        this.state={
            price:6969,
            title:'Nokia 1200',
            qty:1,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qae522N2EzJZbdyGdnALi-BAirqdp8cZc55VoDDtQ&s'
        }
    }
    increaseQuantity=()=>{
       // console.log("hii")
       // setState form 1
       this.setState({
        qty:this.state.qty +1
       })
    }
    decreaseQuantity=()=>{
        this.setState({
            qty:this.state.qty -1
        })
    }
    render(){
        const {price,title,qty,img}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} />
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
                        <img alt="decrease"
                         className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                         onClick={this.decreaseQuantity.bind(this)}
                         />
                        <img alt="delete"
                         className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                         />
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