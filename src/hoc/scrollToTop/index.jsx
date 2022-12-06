import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;