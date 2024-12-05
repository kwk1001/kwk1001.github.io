document.getElementById('portfolio').addEventListener('click', function() {
    gtag('event', 'Portfolio_download', {
    'event_category': 'download',
    'event_label': 'Portfolio_button',
    'value': 1
    });
});

document.getElementById('scooter_read').addEventListener('click', function() {
    gtag('event', 'scooter_read', {
        'event_category': 'read',
        'event_label': 'scooter_read',
        'value': 1
    });
});