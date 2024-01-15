import { CardView } from "./components/CardView"
import { CatalogView } from "./components/CatalogView"


export const CartApp = () => {

    return (
        <>
            <div className="container">
                <h3>Cart Shop</h3>
                <CatalogView />
                
                <div className="my-4 w-50">
                    <CardView />
                </div>
            </div>
        </>
    )
}