import { useEffect, useState } from "react";
import API from "../../api/axios";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";

function Profile() {

     const { user } = useAuth();

    const [profile, setProfile] = useState(null);

    useEffect(() => {

        API.get("/users/profile")
            .then((res) => setProfile(res.data))
            .catch(console.error);

    }, []);

    if (!profile) {

        return (
            <DashboardLayout
                role="user"
                title="Profile"
            >
                <h2>Loading...</h2>
            </DashboardLayout>
        );

    }

    return (

        <DashboardLayout
    role={user.role}
    title="Profile"
>

            <div className="profile-container">

                <div className="profile-card">

                    <div className="profile-header">

                        <div className="profile-avatar">

                            {profile.name.charAt(0).toUpperCase()}

                        </div>

                        <div>

                            <h2>{profile.name}</h2>

                            <p>{profile.role.toUpperCase()}</p>

                        </div>

                    </div>

                    <div className="profile-details">

                        <div className="detail">

                            <label>Full Name</label>

                            <h4>{profile.name}</h4>

                        </div>

                        <div className="detail">

                            <label>Email Address</label>

                            <h4>{profile.email}</h4>

                        </div>
                        <div className="detail">

    <label>User ID</label>

    <h4>{profile.userId}</h4>

</div>

<div className="detail">

    <label>Member Since</label>

    <h4>{new Date(profile.createdAt).toLocaleDateString()}</h4>

</div>

                        <div className="detail">

                            <label>Role</label>

                            <span className="role-badge">

                                {profile.role}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Profile;