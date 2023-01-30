import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
    constructor (){
        super();
        this.state={
           product:[
            {
                price:6969,
                title:'Nokia 1200',
                qty:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qae522N2EzJZbdyGdnALi-BAirqdp8cZc55VoDDtQ&s',
                id:1,
            },
            {
                price:6969,
                title:'Nokia 1200',
                qty:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qae522N2EzJZbdyGdnALi-BAirqdp8cZc55VoDDtQ&s',
                id:2,
            },
            {
                price:6969,
                title:'Nokia 1200',
                qty:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qae522N2EzJZbdyGdnALi-BAirqdp8cZc55VoDDtQ&s',
                id:3,
            },
            {
                price:6969,
                title:'Nokia 1200',
                qty:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qae522N2EzJZbdyGdnALi-BAirqdp8cZc55VoDDtQ&s',
                id:4,
            }
           ]
        }
        // this.testing();
    }
    render(){
        const {product}=this.state;
        return(
            <div className="cart">
                {product.map((product)=>{
                    return <CartItem product={product} key={product.id} />;
                })}
            </div>
        );
    }
}


export default Cart;