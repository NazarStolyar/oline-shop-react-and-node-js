import React from "react";
import { Switch, Route } from 'react-router-dom'

import { HomePage } from "./pages/Home";
import { CategoriesPage } from "./pages/Categories";
import { ProductsPage } from "./pages/Products";
import { CheckoutPage } from "./pages/Checkout";
import { OrdersPage } from "./pages/Orders";
import { LoginPage } from "./pages/Login";
import { ProfilePage } from "./pages/Profile";
import { SearchPage } from "./pages/Search";
import { RegisterPage } from "./pages/Register";


export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <HomePage />
            </Route>
            <Route path='/categories/:id'>
                <CategoriesPage />
            </Route>
            <Route path='/products/:id'>
                <ProductsPage />
            </Route>
            <Route path='/checkout'>
                <CheckoutPage />
            </Route>
            <Route path='/orders'>
                <OrdersPage />
            </Route>
            <Route path='/login'>
                <LoginPage />
            </Route>
            <Route path='/profile'>
                <ProfilePage />
            </Route>
            <Route path='/search'>
                <SearchPage />
            </Route>
            <Route path='/register'>
                <RegisterPage />
            </Route>
        </Switch>
    )
}
