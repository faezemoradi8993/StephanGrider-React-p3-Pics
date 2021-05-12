import React, { Component } from 'react';
import unsplash from '../API/unsplash'
import ImageList from './ImageList';
import SearchBar from './SearchBar';
class App extends Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
        console.log(response.data.results);
    }
    render() {
        return (
            <div className=" ui container" style={{ marginTop: '30px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found : { this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

