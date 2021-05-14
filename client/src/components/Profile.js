import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div class="card" style={{width: '18rem'}}>
        <header className="jumbotron">
        <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
        </header>
        <p>
        <input class="form-control" type="text" placeholder={currentUser.data.userData.username} disabled></input>
        </p>
        <p>
        <input class="form-control" type="text"  placeholder={currentUser.data.userData.email} disabled></input>
        </p>
        <p>
        <input class="form-control" type="password"  placeholder={currentUser.data.userData._id} disabled></input>
        </p>
        <button type="button" class="btn btn-primary"><i class="bi bi-pencil"></i></button>
      </div>
    </div>
  );
};

export default Profile
