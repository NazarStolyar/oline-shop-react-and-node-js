import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Navbar } from "./Navbar";
import { BottomMenu } from "./BottomMenu";
import { useGetAllCategories } from "../../serivices/getCateroies";
import { GET_CATEGORIES } from "../../store/types";


export const Header = () => {
    const { categories } = useGetAllCategories();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_CATEGORIES',
            payload: categories
        })
    }, [])

    return (
        <div>
            <Navbar />
            <BottomMenu />
        </div>
    )
}


