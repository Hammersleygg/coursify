import React, { useState } from 'react';
import './settings.css';
import DeleteAccountModal from './DeleteAccountModal';

export default function Settings() {
  const [isDeleteAccountModalOpen, setDeleteAccountModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteAccountModalOpen(true);
  }

  const handleCancelDelete = () => {
    setDeleteAccountModalOpen(false);
  }

  const handleConfirmDelete = () => {
    // Implement the logic to delete the account here
    // This is just a placeholder function
    console.log('Account deleted');
    // Close the modal after deletion (you can add more logic here)
    setDeleteAccountModalOpen(false);
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle" onClick={handleDeleteAccount}>Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon fa-solid fa-house-chimney-user"></i>
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="user" />
            <label>Email</label>
            <input type="text" placeholder="user@g.cofc.edu" />
            <label>Password</label>
            <input type="password" placeholder="***"/>

            <button className="settingsSubmit">Update</button>
        </form>
      </div>

      {isDeleteAccountModalOpen && (
        <div className="modal-background">
          <DeleteAccountModal
            onDelete={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        </div>
      )}
    </div>
  );
}
