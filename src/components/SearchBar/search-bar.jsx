import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './search-bar.scss';


export const SearchBar = ({ user, onSearch }) => {

    const [query, setQuery] = useState("");

    useEffect(() => {
        onSearch(query);
    }, [query]);


    return (
        <>
            {user && (
                <Form className="d-flex mb-3" >
                    <Form.Control
                        type="search"
                        placeholder="Search movies here..."
                        className="me-2"
                        aria-label="Search"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                        }}
                    />
                    <Link to={"/"}>
                        <Button variant="primary" onClick={() => {
                            onSearch(query);
                        }}>Search</Button>
                    </Link>
                </Form>
            )}
        </>
    );
};