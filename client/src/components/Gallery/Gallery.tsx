import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Gallery.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Photo from '../Photo/Photo';
import {GalleryState, Image} from './GalleryInterface'

class Gallery extends React.Component<{ }, GalleryState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            error: "",
            isLoaded: false,
            images: [],
            hasMore: true,
            step:15
        };
    }

    fetchImageFromServer = () => {
        fetch(`/api/images/${this.state.images.length}/${this.state.images.length + this.state.step}`)
            .then(res => {
                if(res.status === 200){
                    return res.json()
                }
                throw (`An error occurred - ${res.statusText}`);
            })
            .then(
                (images) => {
                    let hasMore = true;
                    if(!images.length){
                        hasMore = false;
                    }
                    this.setState({
                        isLoaded: true,
                        images: this.state.images.concat(images),
                        hasMore: hasMore
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error.props
                    });
                }
            )
    };

    componentDidMount() {
        this.fetchImageFromServer()
    }

    render() {
        const { isLoaded, images , hasMore, error} = this.state;
        if (error) {
            return <ErrorBoundary text={error} />;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="body">
                    <InfiniteScroll
                        dataLength={images.length} //This is important field to render the next data
                        next={this.fetchImageFromServer}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <div className="gallery">
                            {images.map( (image: Image) => {
                                return <Photo imageUrl={image.url} description={image.description} likes={image.likes}/>
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            )
        }
    }
}

export default Gallery;