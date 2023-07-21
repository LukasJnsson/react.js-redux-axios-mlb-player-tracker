
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


/**
 * Hook that redirects the user to the index page
 * @param {Number} milliseconds - The milliseconds until the redirection
 */
export const useRedirect = (milliseconds) => {
    const navigate = useNavigate(); 

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, Number(milliseconds));
        }, [milliseconds, navigate]);
};


export default useRedirect;