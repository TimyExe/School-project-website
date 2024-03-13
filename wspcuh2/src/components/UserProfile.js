import React from 'react';
import '../styles/user.css'; 

function UserProfile() {
  return (
    <div className="App">
      <header className="App-header">
       
     
        <div className="user-info">
          <img src="https://firebasestorage.googleapis.com/v0/b/uwuproj-b30f1.appspot.com/o/profileImages%2Fl6Ba5MRzoVZ4ESW38muX1G7iimv1?alt=media&token=28376053-8bf8-49e2-9105-607df40fbae3" alt="Profile Image" className="profile-image" />
          <p>Email: toji@gmail.com</p>
          <p>Last Login: 1710316468146</p>
          <p>Number: 94974729428</p>
          <p>Role: admin</p>
          <p>Username: Toji</p>
          
          <div className="button-group">
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>

       
        
      </header>
    </div>
  );
}

export default UserProfile;
