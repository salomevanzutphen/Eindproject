import React from 'react';
import './ImageCard.css';

const ImageCard = ({ post, onImageClick }) => {
    return (
        <div className="image-card" onClick={() => onImageClick(post)}>
            <div className="image-container">
                <img src={`data:image/jpeg;base64,${post.imgdata}`} alt={post.title} />



                    <div className="text">
                        <div className="overlay">
                        <div className="title-artist">{post.title}</div>
                        <div className="name-artist">{post.artist}</div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
