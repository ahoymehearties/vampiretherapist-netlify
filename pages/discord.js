import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectPage() {
    const router = useRouter();

    useEffect(() => {
        router.push('https://discord.gg/JM7Xr3zp7V');
    }, [router]);

    return null;
}
