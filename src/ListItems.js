import React from 'react'
//import { FaTrash } from "react-icons/fa";
import LineItem from './LineItem';
const ListItems = ({items, handleCheck, handleDelete}) => {
return (
    <ul>
            {items.map((item) => (
                <LineItem
                item = {item}
                key = {item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
                />
            ))}
        </ul>
)
}

export default ListItems