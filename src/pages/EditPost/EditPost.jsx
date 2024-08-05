import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import { useParams, useNavigate } from 'react-router-dom';
import './EditPost.css';

const EditPost = ({ posts, setPosts }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const postToEdit = posts.find(p => p.id === parseInt(id));
        if (postToEdit) {
            setPost(postToEdit);
            setTitle(postToEdit.title);
            setArtist(postToEdit.artist);
            setDescription(postToEdit.description);
            setImage(postToEdit.image);
        }
    }, [id, posts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPost = {
            ...post,
            title,
            artist,
            description,
            image,
        };
        const updatedPosts = posts.map(p => p.id === parseInt(id) ? updatedPost : p);
        setPosts(updatedPosts);
        navigate('/');
    };

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    if (!post) return <p>Loading...</p>;

    return (
        <div className="edit-post-page">
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Artist</label>
                    <input
                        type="text"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {image && <img src={image} alt="Preview" className="image-preview" />}
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

EditPost.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })).isRequired,
    setPosts: PropTypes.func.isRequired,
};

export default EditPost;
