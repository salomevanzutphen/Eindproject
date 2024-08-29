import './DeleteConfirmation.css';
import Button from '../button/Button.jsx';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
    return (
        <div className="delete-confirmation-overlay">
            <div className="delete-confirmation-box">
                <h2>Are you sure?</h2>
                <div className="delete-confirmation-actions">

                    <div>
                    <Button
                        text="Delete"
                        backgroundColor="var(--red)"
                        onClick={onConfirm}
                    />
                </div>

                    <div>
                    <Button
                        text="Cancel"
                        backgroundColor="#6c757d"
                        onClick={onCancel}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
