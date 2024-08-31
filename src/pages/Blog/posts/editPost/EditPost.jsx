import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import '../CreateEditPost.css';
import { AuthContext } from '../../../../context/AuthContext.jsx';
import Button from '../../../../components/button/Button.jsx';

function EditPost() {
    const { id } = useParams();
    const location = useLocation();
    const { post } = location.state || {};
    const [title, setTitle] = useState(post?.title || '');
    const [subtitle, setSubtitle] = useState(post?.subtitle || '');
    const [description, setDescription] = useState(post?.description || '');
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const { roles } = useContext(AuthContext);

    useEffect(() => {
        const isAdmin = roles.some(role => role.authority === 'ROLE_ADMIN');
        if (!isAdmin) {
            navigate('/unauthorized');
        }
    }, [roles, navigate]);

    async function updatePost(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('description', description);

        if (fileInputRef.current.files[0]) {
            formData.append('image', fileInputRef.current.files[0]);
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:8080/posts/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log(response.data);
            navigate('/blog');
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="create-post-page">
            <h1>Edit Post</h1>
            <form onSubmit={updatePost}>
                <div className="form-group">
                    <label htmlFor="post-title">Title</label>
                    <input
                        type="text"
                        name="post-title-field"
                        id="post-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="post-subtitle">Subtitle</label>
                    <input
                        type="text"
                        name="post-subtitle-field"
                        id="post-subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="post-description">Description</label>
                    <textarea
                        name="post-description-field"
                        id="post-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="post-image">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        id="post-image"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                    />
                    {image && <img src={image} alt="Preview" className="image-preview" />}
                </div>
                <div className="button-createupdate-post">
                <Button
                    type="submit"
                    text="Update"
                    backgroundColor="#90BE6D"
                    onClick={updatePost}
                />
                </div>
            </form>
        </div>
    );
}

export default EditPost;
