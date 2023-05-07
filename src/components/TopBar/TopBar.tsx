import React, { useState }  from 'react';
import TopBarView from './TopBarView';
import { auth } from "../../firebase"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const TopBar = () => {
    // #region HOOKS
  const { logOut, currentUser } = useAuth();
  const navigate = useNavigate();
  // #endregion

    // #region STATE
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // #endregion 

    const handleClick = async () => {
        try {
          setError("");
          setLoading(true);
          await logOut(auth);
          navigate("/");
        } catch {
          setError("Failed to log out");
        }
    
        setLoading(false);
      }
    return (
        <div>
            <TopBarView
                currentUser={currentUser}
                logOut={handleClick}
                error={error}
                loading={loading}
            />
        </div>
    );
};

export default TopBar;