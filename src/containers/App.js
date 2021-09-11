import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import Footer from '../Components/Footer';
import '../index.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            pokemonDetails: [],
            searchField: '',
        };
    }

    getPokemonDetails() {
        let url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({ pokemons: data.results }, () => {
                    this.state.pokemons.map((pokemon) => {
                        fetch(pokemon.url)
                            .then((resp) => resp.json())
                            .then((data) => {
                                this.setState((prevState) => ({
                                    pokemonDetails: [
                                        ...prevState.pokemonDetails,
                                        data,
                                    ],
                                }));
                            });
                    });
                });
            });
    }

    componentDidMount() {
        this.getPokemonDetails();
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    getFilteredSortedList() {
        const filtered = this.state.pokemonDetails.filter((pokemon) => {
            if (
                pokemon.name
                    .toLowerCase()
                    .includes(this.state.searchField.toLowerCase())
            ) {
                return pokemon;
            }
        });
        return filtered.sort((a, b) => a.id - b.id);
    }

    render() {
        if (this.state.pokemons.length === 0) {
            return <h1>LOADING</h1>;
        } else {
            return (
                <div className='app-contaner'>
                    <div className='title-container'>
                        <img
                            className='pokemon-title'
                            src='https://cdn.worldvectorlogo.com/logos/pokemon-23.svg'
                            alt='poketitle'
                        />
                    </div>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <div className='pokemon-container'>
                                <div className='all-container'>
                                    <CardList
                                        pokemonList={this.getFilteredSortedList()}
                                    />
                                </div>
                            </div>
                        </ErrorBoundry>
                    </Scroll>
                    <Footer />
                </div>
            );
        }
    }
}

export default App;
