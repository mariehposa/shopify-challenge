const SearchForm = () => {
    const handleInput =  (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleInput}>
            <input type="text" name="title" placeholder="search" />
        </form>
    )
}

export default SearchForm;