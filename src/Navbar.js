import React from "react";

const Navbar=(props)=>{
    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src='https://img.icons8.com/ios/256/shopping-cart.png' alt='cart-icon'/>
            <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    )
}

const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#aac0f3',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9
    }
}
export default Navbar;
