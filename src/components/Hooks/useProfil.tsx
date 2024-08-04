import { useState, useEffect } from 'react';

export const useProfile = () => {
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.token) {
                setProfile(parsedUser);
            }
        }
    }, []);

    return profile; // Sadece profil döndürülüyor
};
