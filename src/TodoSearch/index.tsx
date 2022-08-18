import React, { ChangeEvent } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

interface TodoSearch {
    searchValue: string;
    setSearchValue: Function;
}

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    
    const onSearchValueChange = (event: any) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch }