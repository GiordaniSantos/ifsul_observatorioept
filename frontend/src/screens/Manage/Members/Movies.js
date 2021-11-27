import React from 'react';

class Movies extends React.Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.list, null, 2)}
            </div>
        );
    }
}

export default Movies;