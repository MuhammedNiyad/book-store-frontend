import { useSelector } from 'react-redux';

export const useCurrentUser = () => {
    return useSelector((state) => state.user.currentUser);
};

export const useUserCart = () => {
    return useSelector((state) => state.cart);
};