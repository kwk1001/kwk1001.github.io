const content = document.querySelector('.right-column');

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

document.getElementById('water_read').addEventListener('click', function() {
    gtag('event', 'water_read', {
        'event_category': 'read',
        'event_label': 'water_read',
        'value': 1
    });
});

document.getElementById('UHI_read').addEventListener('click', function() {
    gtag('event', 'UHI_read', {
        'event_category': 'read',
        'event_label': 'UHI_read',
        'value': 1
    });
});

document.getElementById('Tuan_read').addEventListener('click', function() {
    gtag('event', 'Tuan_read', {
        'event_category': 'read',
        'event_label': 'Tuan_read',
        'value': 1
    });
});

document.getElementById('Origami_read').addEventListener('click', function() {
    gtag('event', 'Origami_read', {
        'event_category': 'read',
        'event_label': 'Origami_read',
        'value': 1
    });
});

document.getElementById('Pedestrian_read').addEventListener('click', function() {
    gtag('event', 'Pedestrian_read', {
        'event_category': 'read',
        'event_label': 'Pedestrian_read',
        'value': 1
    });
});

document.getElementById('steps_read').addEventListener('click', function() {
    gtag('event', 'steps_read', {
        'event_category': 'read',
        'event_label': 'steps_read',
        'value': 1
    });
});

document.getElementById('parcel_read').addEventListener('click', function() {
    gtag('event', 'parcel_read', {
        'event_category': 'read',
        'event_label': 'parcel_read',
        'value': 1
    });
});

document.getElementById('waving_read').addEventListener('click', function() {
    gtag('event', 'waving_read', {
        'event_category': 'read',
        'event_label': 'waving_read',
        'value': 1
    });
});

document.getElementById('restaurant_read').addEventListener('click', function() {
    gtag('event', 'restaurant_read', {
        'event_category': 'read',
        'event_label': 'restaurant_read',
        'value': 1
    });
});

document.getElementById('xinjiangwan_read').addEventListener('click', function() {
    gtag('event', 'xinjiangwan_read', {
        'event_category': 'read',
        'event_label': 'xinjiangwan_read',
        'value': 1
    });
});