import { useState, useEffect } from "react";

const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, []);

    return width;
};

export default useScreenWidth;
