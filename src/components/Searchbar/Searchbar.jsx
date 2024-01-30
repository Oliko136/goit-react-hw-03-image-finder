import { Component } from "react";

export class Searchbar extends Component {
    state = {
        query: ''
    }

    handleChange = ({ target }) => {
        this.setState({
            query: target.value.toLowerCase()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.query.trim() === '') {
            alert('Please fill out this field');
            return;
        }

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        const { handleChange, handleSubmit } = this;
        const { query } = this.state;

        return (
            <header className="searchbar">
                <form className="form" onSubmit={handleSubmit}>
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        value={query}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                    />
                </form>
            </header>
        )
    }
}

