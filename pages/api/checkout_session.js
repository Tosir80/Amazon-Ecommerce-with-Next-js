
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res)=>{
    const {items,email} =req.body 
    const transfromItems = items.map((item)=>({
        discription :item.description ,
        quantity:1 ,
        price_data:{
            currency:"usd" ,
            unit_amount: item.price *100 ,
            product_data :{
                name:item.title,
                images:[item.image]
            }
        }
    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types :['card'] ,
        line_items: transfromItems ,
        mode:'payment' ,
        success_url :'http://localhost:3000/success',
        cancel_url :'http://localhost:3000/home',
        metadata :{
            email,
            images : JSON.stringify(items.map((item)=>item.image))
        }
    })

    res.status(200).json( {id: session.id})
}