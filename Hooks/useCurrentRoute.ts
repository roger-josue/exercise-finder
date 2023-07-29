import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//Custom Hook using useRouter custom Hook from next/router, this one will be used to set the color of the current Menu item according to the route retrieved
export default function useCurrentRoute() {
    const router = useRouter();
    const [currentRoute, setCurrentRoute] = useState("");
    useEffect(() => {
        setCurrentRoute(router.route);
    }, [router]);

    return currentRoute;
}
