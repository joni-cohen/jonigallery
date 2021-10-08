import React from 'react';
import './Like.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {LikeProps, LikeState} from './LikeInterface'

class Like extends React.Component<LikeProps, LikeState> {
    constructor(props:LikeProps) {
        super(props);
        const liked = (localStorage.getItem(this.props.id) === "true");
        const count = this.props.count + (liked ? 1 : 0);
        this.state= {
            liked,
            count
        };
    }

    switchLike = () => {
        const liked = !(localStorage.getItem(this.props.id) === "true")
        localStorage.setItem(this.props.id, liked.toString());
        this.setState({
            liked,
            count: this.props.count + (liked ? 1 : 0)
        });
    }
    render() {
        const { liked , count} = this.state;
        return (
            <div className={`${liked ? "ilike" : ""} likes`} onClick={this.switchLike}>
                <FontAwesomeIcon icon={faHeart}/>
                {count}
            </div>
        );
    }
}

export default Like;