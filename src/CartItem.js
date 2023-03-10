import React from "react";

const CartItem=(props)=>{
    
    // increaseQuantity=()=>{
       
    //    this.setState({
    //     qty:this.state.qty +1
    //    })
    // }
    // decreaseQuantity=()=>{
    //     const {qty}=this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState({
    //         qty:this.state.qty -1
    //     })
    // }
    // testing(){
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000)
    //     });
    //     promise.then(()=>{
    //         this.setState({qty:100});
    //         console.log('state',this.state);
    //     })
    // }
    
        //console.log(this.setState);
        const {price,title,qty,img}=props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} alt='item'/>
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
                        //   onClick={this.increaseQuantity.bind(this)}
                          onClick={()=>onIncreaseQuantity(product)}
                          />
                        <img alt="decrease"
                         className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        //  onClick={this.decreaseQuantity.bind(this)}
                        onClick={()=>onDecreaseQuantity(product)}
                         />
                        <img alt="delete"
                         className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                         onClick={()=>onDeleteProduct(product.id)}
                         />
                    </div>
                </div>
            </div>
        );
}


export default CartItem;