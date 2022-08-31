import { orders } from "../../../data/data";

export const addOrder = (req, res, next) => {
    try {
        const check  = items.filter((item) => item.name === 'thali' && item.quantity > 1);
        if (check) {
            
            orders.push({
                name: 'thali',
                price: 100,
                status: 'Active',
                quantity: 1,
                resId: '3*'
              })
    
    
              res.send(orders)
        } else {
            res.send("Quantity not present")
        }
    } catch(err) {
        next(err)
    }
}