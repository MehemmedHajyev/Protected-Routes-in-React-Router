import React from 'react';
import { useProfile } from '../components/Hooks/useProfil';
import { Navigate } from 'react-router-dom';

const AuthProtected: React.FC<{ children: React.ReactNode; from: { location: Location } }> = (props) => {
    const profile = useProfile(); // Doğrudan kullan

    if (!profile) {
        return <Navigate to={{ pathname: '/login' }} />;
    }

    return <>{props.children}</>;
};

export default AuthProtected;
