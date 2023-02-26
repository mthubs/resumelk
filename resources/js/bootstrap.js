import lodash from 'lodash'
window._ = lodash

import * as Popper from '@popperjs/core'
window.Popper = Popper

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios'
import Swal from 'sweetalert2'

window.axios = axios
window.Swal = Swal

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true

window.axios.interceptors.response.use(undefined, async function (error) {
    switch (error.response.status) {
        case 401:
            window.localStorage.clear()
            await Swal.fire({
                title: 'Oturumunuz sonlanmış',
                text: 'Tekrar giriş yapınız',
                icon: 'error'
            })
            window.location.reload()
            break
        default:
            return Promise.reject(error)
    }
});

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

/*import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
     broadcaster: 'pusher',
     key: process.env.MIX_PUSHER_APP_KEY,
     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
     forceTLS: true
});*/
