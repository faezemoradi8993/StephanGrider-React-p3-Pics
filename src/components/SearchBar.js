
import React, { Component } from 'react';
class SearchBar extends Component {
    state = { term: "" };
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        this.setState({ term: "" })

    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm} >
                    <div className="field">
                        <lablel>Image Search</lablel>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;