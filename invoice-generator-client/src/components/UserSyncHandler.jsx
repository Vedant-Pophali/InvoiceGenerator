import { useContext, useEffect, useState } from 'react';
import { AppContext } from "../context/AppContext.jsx";
import { useUser, useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-hot-toast";

const UserSyncHandler = () => {
    const [synced, setSynced] = useState(false);
    const { baseUrl } = useContext(AppContext);
    const { user, isLoaded, isSignedIn } = useUser();
    const { getToken } = useAuth();

    useEffect(() => {
        const syncUser = async () => {
            if (!isLoaded || !isSignedIn || synced) return;

            try {
                const token = await getToken();
                const userData = {
                    clerkId: user.id,
                    email: user.primaryEmailAddress.emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    photoUrl: user.imageUrl
                };

                await axios.post(`${baseUrl}/users`, userData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setSynced(true);
            } catch (error) {
                toast.error("Failed to sync the user data");
            }
        };

        syncUser();
    }, [isLoaded, isSignedIn, synced, getToken, user, baseUrl]);

    return null;
};

export default UserSyncHandler;
