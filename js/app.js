const router = new VueRouter({
    routes: [
        // dynamic segments start with a colon
        {path: '/:tick'}
    ]
})

var app = new Vue({
    router,
    el: '#lamma-surf',
    data: {
        base: "http://www.lamma.rete.toscana.it/models/ww3",
        wave: "/last/swh.",
        wind: "/last/wind10.",
        model: 'lr',
        area: 'M'
    },
    methods: {
        step: function (n) {
            this.$router.push(String(Number(this.$route.params.tick) + n));
        },
        swap_model: function () {
            if (this.model == 'lr') {
                this.model = 'hr';
                this.area = 'B';
            } else if (this.model == 'hr') {
                this.model = 'lr';
                this.area = 'M';
            }
        }
    },
    mounted() {
        if (typeof this.$route.params.tick === "undefined") {
            this.$router.push('1');
        } else {
            // this.current = Number(router.currentRoute.params.tick) + 1;
        }

    },
    watch: {
        $route(to, from) {
            // this.current = Number(to.params.tick);
        }
    }
})
