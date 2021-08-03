import React from "react";
import { useRoutes } from "../../routes";
import { Link } from "react-router-dom";

export const MainLayout = () => {
    const routers = useRoutes();

    return (
        <div className='layout'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/categories/123'>Categories</Link></li>
                <li><Link to='/products/123'>Products</Link></li>
                <li><Link to='/checkout'>Checkout</Link></li>
                <li><Link to='/orders'>Orders</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>

            { routers }
        </div>
    )
}
