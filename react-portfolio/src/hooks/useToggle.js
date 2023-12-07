import { useState } from "react";

export const useToggle = () => {
    const [on, setOn] = useState(false);

    const handleToggle = () => {
        setOn(!on);
    }

    return [on, handleToggle];
};