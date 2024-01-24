export const CardView = ({ items }) => {
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
                    {Array.isArray(items) && items.map((item, index) => (
                        <tr key={`${item.product.id}-${index}`}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{isNaN(item.quantity * item.product.price) ? 'Invalid Price' : (item.quantity * item.product.price)}</td>
                            <td>remove</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">{calculateTotal(items)}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

const calculateTotal = (items) => {
    return items.reduce((total, item) => {
        const itemTotal = isNaN(item.quantity * item.product.price) ? 0 : (item.quantity * item.product.price);
        return total + itemTotal;
    }, 0);
};
