import React from 'react';
//import { useState } from 'react';
//fa FaTrash

import ListItems from './ListItems';
const Content = ({items, handleCheck, handleDelete}) => {


return (
    <main>
        {(items.length) ? (
        <ListItems
            items = {items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        )
        : (<p>YOUR LIST IS</p>)}
    </main>
)
}

export default Content