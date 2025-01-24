self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.message.message() : 'Default message',
        // icon: 'icon.png',
    };

    event.waitUntil(
        self.registration.showNotification('New Notification', options)
    );
});