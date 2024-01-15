
export const CardView = () => {
    return (

        <>

            <h3>Shopping cart</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>price</td>
                        <td>quantity</td>
                        <td>total</td>
                        <td>remove</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">12345</td>
                    </tr>
                </tfoot>
            </table>

        </>
    )
}
