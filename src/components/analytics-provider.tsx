"use client"

import { Analytics } from "@/components/analytics";
import { useEffect, useState } from "react";

export const AnalyticsProvider = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (process.env.NODE_ENV !== "production" || !process.env.NEXT_PUBLIC_GTM_ID) {
        return null;
    }

    // Render the Analytics component only on the client side after mounting
    return mounted ? <Analytics /> : null;
}
