import { useState } from "react"
import { CardView } from "./components/CardView"
import { CatalogView } from "./components/CatalogView"

const initialCartItems = [
    // {
    //     product: {
    //     },
    //     quantity: 0,
    // }
]


export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleAddProductCard = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            setCartItems([
                ...cartItems.filter((i) => i.product.id !== product.id),
                {
                    product,
                    quantity: hasItem.quantity + 1
                }
            ])

        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ])
        }
    }

    return (
        <>
            <div className="container">
                <h3>Cart Shop</h3>
                <CatalogView handler={handleAddProductCard} />

                <div className="my-4 w-50">
                    <CardView items={cartItems} />
                </div>
            </div>
        </>
    )
}