function UpdateForm({ pokemon, handleSubmit, handleChange }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                placeholder="pokemon name"
                value={pokemon.name}
                name="name"
                onChange={handleChange}
                required
                id="name"
            />
            <label htmlFor="description">Description</label>
            <input
                placeholder="description"
                value={pokemon.description}
                name="description"
                onChange={handleChange}
                id="description"
            />
            <label htmlFor="image">Image</label>
            <input
                placeholder="image url"
                value={pokemon.image}
                name="image"
                onChange={handleChange}
                id="image"
            />
            <label htmlFor="price">Price</label>
            <input
                placeholder="price"
                value={pokemon.price}
                name="price"
                onChange={handleChange}
                id="price"
            />
            <button type="submit">Submit Changes</button>
        </form>
    )
}

export default UpdateForm;