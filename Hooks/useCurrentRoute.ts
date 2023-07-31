import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";

export default function useCurrentRoute() {
    const selectedSegment = useSelectedLayoutSegment();
    const [currentRoute, setCurrentRoute] = useState("/");

    useEffect(() => {
        if (selectedSegment !== null) {
            setCurrentRoute(selectedSegment);
        } else {
            setCurrentRoute("/");
        }
    }, [selectedSegment]);

    return currentRoute;
}
