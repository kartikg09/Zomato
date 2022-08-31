import { items } from "../../../data/data.js";

export const addItem = (req, res, next) => {
    try{
        console.log("check2")
        items.push({
            name: 'dosa',
            price: 100,
            status: 'Active',
            quantity: 100,
            resId: '1'
          })
        res.send(items)
    } catch (err) {
        next(err)
    }
}

export const getItems = (req, res, next) => {
    try {

        res.send(items)
    } catch(err) {
        next(err)
    }
}