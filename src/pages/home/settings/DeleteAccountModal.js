// DeleteAccountModal.js
import React from 'react';
import './delete-account-confirmation.css';

export default function DeleteAccountModal({ onCancel, onDelete }) {
  return (
    <div className="delete-account-modal">
      <div className="modal-content">
        <h2>Confirm Account Deletion</h2>
        <p>Are you sure you want to delete your account?</p>
        <div className="confirmation-buttons">
          <button onClick={onDelete} className="confirm-button">Confirm</button>
          <button onClick={onCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}
