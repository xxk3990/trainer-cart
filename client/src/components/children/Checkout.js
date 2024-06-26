import {React, useState} from 'react'
import { handlePost } from '../../services/requests-service';
import "../../styles/shopping-cart.css"
import { Snackbar } from '@mui/material';
export const Checkout = (props) => {
    const {cartItems} = props;
    const user = localStorage.getItem("user_uuid")
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const orderId = localStorage.getItem("orderID")
    const loadStripeCheckout = async (e) => {
        e.preventDefault()
        const today = new Date()
        const endpoint = `payment?user_uuid=${user}`
        const body = {
            cart_items: cartItems,
            order_uuid: orderId,
            order_date: `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`,
        }
        const response = await handlePost(endpoint, body)
        const data = await response.json();
        if(data.success) {
            setSnackbarMessage("") //clear current msg
            setOpenSnackbar(true);
            setSnackbarMessage("Loading Payment Screen...");
            setTimeout(() => {
                localStorage.removeItem("orderID")
                window.location.href = data.url
            }, 1500)
        }
    }
    return (
        <section className='checkout'>
            <Snackbar sx={{width: 10}} ContentProps={{sx: {display: 'block', textAlign: "center", fontSize: "16px"}}} className='cart-snackbar' open={openSnackbar} autoHideDuration={1500} message={snackbarMessage} anchorOrigin={{horizontal: "center", vertical:"top"}}/>
            <h4>Orders will be submitted on payment success.</h4>
            <button className='checkout-btn' onClick={loadStripeCheckout}>Pay</button>
        </section>
    )
}