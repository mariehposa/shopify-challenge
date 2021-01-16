import React, {useState} from 'react'

const SearchForm = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        const value = e.target.value
        setSearchTerm(value)
        console.log(value)
    }

    return (
        <form>
            <input type="text" onChange={handleChange} name="title" placeholder="search" />
        </form>
    )
}

export default SearchForm;