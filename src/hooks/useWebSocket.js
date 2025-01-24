import { useEffect } from 'react';
import Cookies from 'js-cookie';

const useWebSocket = (url) => {
    useEffect(() => {
        const displayedMessages = new Set(Cookies.get('displayedMessages') ? Cookies.get('displayedMessages').split(',') : []);

        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const messageData = JSON.parse(event.data);
            const uniqueKey = `${messageData.type}-${messageData.message}`;

            // Check if this message has already been displayed
            if (!displayedMessages.has(uniqueKey)) {
                displayedMessages.add(uniqueKey);
                
                if (Notification.permission === 'granted') {
                    new Notification('New Notification', { body: messageData.message });
                }

                // Update cookies with the new displayed message
                Cookies.set('displayedMessages', Array.from(displayedMessages).join(','), { expires: 7 });
            }
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, [url]);
};

export default useWebSocket;