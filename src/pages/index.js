import useWebSocket from '@/hooks/useWebSocket';
import { useEffect } from 'react';

const HomePage = () => {
    useWebSocket('ws://maingatewayapi.ihs-solutions.com:8001/');

    useEffect(() => {
        const requestNotificationPermission = async () => {
            if ('Notification' in window) {
                const permission = await Notification.requestPermission();
                if (permission !== 'granted') {
                    console.log('Notification permission denied');
                }
            }
        };

        requestNotificationPermission();
    }, []);

    return (
        <div>
            <h1>Stay tuned for notifications!</h1>
        </div>
    );
};

export default HomePage;