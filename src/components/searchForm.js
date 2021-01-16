import React, {useState} from 'react'

const SearchForm = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInput =  (event) => {
        event.preventDefault()
    }

    const handleChange = e => {
        const value = e.target.value
        setSearchTerm(value)
        console.log(value)
    }

    return (
        <form onSubmit={handleInput}>
            <input type="text" onChange={handleChange} name="title" placeholder="search" />
        </form>
    )
}

export default SearchForm;