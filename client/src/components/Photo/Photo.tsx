import React from 'react';
import {PhotoProps} from './PhotoInterface'
import Like from "../Like/Like";
import './Photo.css';

class Photo extends React.Component<PhotoProps, {}> {
    constructor (props: PhotoProps){
        super(props);
    }

    render() {
        return (
            <div className="image-container">
                <div className="image">
                    <img src = {this.props.imageUrl} alt={this.props.imageUrl}/>
                    <div className="hover-image">
                        <p className="description">{this.props.description}</p>
                        <Like id={this.props.imageUrl} count={this.props.likes} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;