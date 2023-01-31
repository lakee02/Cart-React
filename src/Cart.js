import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
    constructor (){
        super();
        this.state={
           products:[
            {
                price:6969,
                title:'Nokia 1200',
                qty:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qae522N2EzJZbdyGdnALi-BAirqdp8cZc55VoDDtQ&s',
                id:1,
            },
            {
                price:76969,
                title:'Apple Watch',
                qty:1,
                img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1660713659063,1660927566964,1661371890735',
                id:2,
            },
            {
                price:99999,
                title:'Apple Laptop',
                qty:1,
                img:'https://johnlewis.scene7.com/is/image/JohnLewis/laptop-carousel1-140922',
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
    handleIncreaseQuantity=(product)=>{
        const{products}=this.state;
        const index=products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products:products
        })
    }
    handleDecreseQuantity=(product)=>{
        const{products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty -=1;

        this.setState({
            products:products
        })
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreseQuantity} 
                    />;
                })}
            </div>
        );
    }
}


export default Cart;