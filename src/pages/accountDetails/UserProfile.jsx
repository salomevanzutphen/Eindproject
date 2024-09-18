import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';
import DeleteConfirmation from '../../components/deleteConfirmation/DeleteConfirmation';
import Button from '../../components/button/Button.jsx';

const UserProfile = ({ onClose }) => {
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
        birthday: '',
    });

    const [editMode, setEditMode] = useState({
        name: false,
        email: false,
        birthday: false,
    });

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    useEffect(() => {
        async function fetchUserDetails() {
            try {
                const response = await axios.get('http://localhost:8080/users', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setUserData({
                    username: response.data.username,
                    name: response.data.name,
                    email: response.data.email,
                    birthday: response.data.birthday,
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
                setErrorMessage('Failed to load user details. Please try again later.');
            }
        }

        fetchUserDetails();
    }, []);

    const validatePassword = (password) => {
        if (password.length < 8) {
            return 'Password must be at least 8 characters long.';
        }
        if (!/[a-z]/.test(password)) {
            return 'Password must contain at least one lowercase letter.';
        }
        if (!/[A-Z]/.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }
        return '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleEditToggle = (field) => {
        setEditMode((prevMode) => ({ ...prevMode, [field]: !prevMode[field] }));
    };

    const handleUpdate = async () => {
        setSuccessMessage('');
        setErrorMessage('');
        setEmailError('');

        const passwordValidationError = validatePassword(password);
        if (password && passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }

        try {
            await axios.put(
                'http://localhost:8080/users',
                {
                    ...userData,
                    password: password || undefined,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            setSuccessMessage('Your new user details are saved!');
            setEditMode({ name: false, email: false, birthday: false });
        } catch (error) {
            console.error('Error updating user details:', error);
            if (error.response && error.response.data) {
                const errorMessage = error.response.data;
                if (errorMessage.includes("Email already exists")) {
                    setEmailError('Email is already taken.');
                } else {
                    setErrorMessage('An error occurred while updating user details. Please try again.');
                }
            } else {
                setErrorMessage('An error occurred while updating user details. Please try again.');
            }
        }
    };

    const handleDeleteAccount = async () => {
        try {
            await axios.delete('http://localhost:8080/users', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            localStorage.removeItem('token');
            window.location.href = '/';
        } catch (error) {
            console.error('Error deleting user accountDetails:', error);
            setErrorMessage('An error occurred while deleting your accountDetails. Please try again.');
        }
    };

    const handleShowDeleteConfirmation = () => {
        setShowDeleteConfirmation(true);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirmation(false);
    };

    return (
        <div className="user-profile-modal">
            <div className="user-profile-container">
                <button className="close-button" onClick={onClose}>X</button>
                <h1>Your Profile</h1>

                <form className="user-profile-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="user-profile-form-group">
                        <label htmlFor="name">Name</label>

                        <div className="edit-form-innercontainer">
                            {editMode.name ? (
                                <input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} />
                            ) : (
                                <p>{userData.name}</p>
                            )}
                            <button type="button" onClick={() => handleEditToggle('name')}>
                                {editMode.name ? 'Save' : 'Edit'}
                            </button>
                        </div>
                    </div>

                    <div className="user-profile-form-group">
                        <label htmlFor="email">Email</label>

                        <div className="edit-form-innercontainer">
                            {editMode.email ? (
                                <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} />
                            ) : (
                                <p>{userData.email}</p>
                            )}
                            <button type="button" onClick={() => handleEditToggle('email')}>
                                {editMode.email ? 'Save' : 'Edit'}
                            </button>
                        </div>

                        {emailError && <h3 className="email-error">{emailError}</h3>}
                    </div>

                    <div className="user-profile-form-group">
                        <label htmlFor="birthday">Birthday</label>

                        <div className="edit-form-innercontainer">
                            {editMode.birthday ? (
                                <input type="date" id="birthday" name="birthday" value={userData.birthday} onChange={handleInputChange} />
                            ) : (
                                <p>{userData.birthday}</p>
                            )}
                            <button type="button" onClick={() => handleEditToggle('birthday')}>
                                {editMode.birthday ? 'Save' : 'Edit'}
                            </button>
                        </div>
                    </div>

                    <div className="user-profile-form-row">
                        <div className="user-profile-form-username">
                            <label htmlFor="username-account">Username</label>
                            <input type="text" id="username-account" name="username" value={userData.username} readOnly />
                        </div>

                        <div className="user-profile-form-password">
                            <label htmlFor="password">New Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                        </div>
                    </div>

                    <div className="profile-buttons">

                        <Button
                            type="button"
                            text="Update Details"
                            backgroundColor="#90BE6D"
                            onClick={handleUpdate}
                        />

                        <Button
                            type="button"
                            text="Delete Account"
                            backgroundColor="var(--red)"
                            onClick={handleShowDeleteConfirmation}
                        />
                    </div>
                    {successMessage && <p className="profile-success-message">{successMessage}</p>}
                    {errorMessage && <p className="profile-error-message">{errorMessage}</p>}
                </form>

                {showDeleteConfirmation && (
                    <DeleteConfirmation
                        onConfirm={handleDeleteAccount}
                        onCancel={handleCancelDelete}
                    />
                )}
            </div>
        </div>
    );
};

export default UserProfile;
