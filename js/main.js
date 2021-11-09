import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';

import { router } from './routes.js'


const options = {
    el: '#app',
    router,
    components: {
        appHeader,
        userMsg
    },
    template: `
    <section>
    <user-msg />
        <app-header />
        <router-view />
    </section>
    `,
    data() {
        return {};
    },
    created() {},
    destroyed() {},
    methods: {},
    computed: {},
};

new Vue(options);
