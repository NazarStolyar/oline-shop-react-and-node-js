import React from 'react';
import { useSelector } from 'react-redux'
import styles from './bottom-menu.module.scss'
import {NavLink} from "react-router-dom";

export const BottomMenu = () => {
    const { categories } = useSelector((state) => state.categories)

    return (
        <div className={styles.body}>
            <ul>
                {
                    categories.map((item, key) => (
                        <li key={key}>
                            <NavLink to={`/categories/${item.id}`}>{ item.name }</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
