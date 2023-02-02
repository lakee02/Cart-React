import React from "react";

// import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor (){
    super();
    this.state={
       products:[
        {
            price:69699,
            title:'I pad',
            qty:1,
            img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1629840706000',
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
            price:69999,
            title:'Apple Headphone',
            qty:1,
            img:'https://media.currys.biz/i/currysprod/M10207224_silver-grey?$l-large$&fmt=auto',
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
handleDeleteProduct=(id)=>{
    const{products}=this.state;
    
    const items=products.filter((item)=>item.id!==id);

    this.setState({
        products:items
    })
}
getCartCount=()=>{
  const {products}=this.state
  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
getCartTotal=()=>{
  const{products}=this.state;
  let cartTotal=0;

  products.map((product)=>{
    cartTotal = cartTotal+product.qty*product.price;
  })
  return cartTotal;
}
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        
        {/* <CartItem /> */}
        <Navbar count={this.getCartCount()}/>
        <div style={{padding:10,fontSize:20}}>
          Total:{this.getCartTotal()}
        </div>
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreseQuantity} 
        onDeleteProduct={this.handleDeleteProduct}
        />
        
      </div>
    );
  }
}

export default App;
