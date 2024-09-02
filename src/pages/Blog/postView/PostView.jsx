import './PostView.css';

const PostView = ({ post, onImageClick }) => {
    return (
        <div className="image-card" onClick={() => onImageClick(post)}>
            <div className="image-container">
                <img src={`data:image/jpeg;base64,${post.imgdata}`} alt={post.title} />
                    <div className="imagecard-text">
                        <div className="imagecard-overlay">
                        <div className="imagecard-title">{post.title}</div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default PostView;
