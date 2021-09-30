import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { APIURL } from '../../config';

function UpdatePokemon({ match }) {
    const [pokemon, setPokemon] = useState(null);
    const [createdId, setCreatedId] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const url = `${APIURL}/pokemons/${match.params.id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPokemon({
                    name: data.name,
                    description: data.description,
                    image: data.image,
                    price: data.price,
                });
            })
            .catch(() => {
                setError(true);
            });
    }, [match.params.id]);

    const handleChange = (event) => {
        event.persist();
        setPokemon({
            ...pokemon,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `${APIURL}/pokemons/${match.params.id}`;

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(pokemon),
        })
            .then((response) => response.json())
            .then((data) => {
                setCreatedId(data._id);
            })
            .catch(() => {
                setError(true);
            });
    };

    if (createdId) {
        return <Redirect to={`/pokemons/${createdId}`} />;
    }

    return (
        <div>
            <h1>Update Pokemon</h1>
        </div>
    );
}

export default UpdatePokemon;

