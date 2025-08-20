import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { signInWithGoogle, logout } from '../../actions/auth';
import * as styles from './styles'

const Auth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    return(
        <div>
            {user ? (
                <div style={styles.container}>
                    <img src = {user.photoURL} alt = {user.displayName} style={styles.userImage} />
                    <span style={styles.userName}>{user.displayName}</span>
                    <button onClick={() => dispatch(logout())} style={styles.button}>Logout</button>
                </div>
            ): (
                <button onClick={() => dispatch(signInWithGoogle())} style={styles.logoutButton}>Sign in with Google</button>
            )}
        </div>
    );
};

export default Auth;