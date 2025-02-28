const router = new VueRouter({
    routes: [
        {path: '/model/:model'},
        {path: '/model/:model/tick/:tick'}
    ]
})

var app = new Vue({
    router,
    el: '#lamma-surf',
    data: {
        period: false,
        gust: false,
        area:  null,
        zoom: false
    },
    methods: {
        handleKeyDown(event) {
            if (event.key === 'ArrowRight') {
              this.step(1);
            }
            if (event.key === 'ArrowLeft') {
                this.step(-1);
            }
            if (event.key === 'r') {
                this.$router.push('/model/' + this.$route.params.model + '/tick/' + 1);
            }
            if (event.key === 'g') {
                this.toggle_gust();
            }
            if (event.key === 'p') {
                this.toggle_period();
            }
            if (event.key === 'z') {
                this.toggle_zoom();
            }
            if (event.key === 'h') {
                this.swap_model();
            }
        },
        get_area: function(model) {
            if (this.$route.params.model == 'mol01ecm') {
                return 'z2';
            } else {
                if (!this.zoom) {
                    return 'A'
                } else {
                    return 'M';
                }
            }
        },
        step: function (n) {
            this.$router.push(String(Number(this.$route.params.tick) + n));
        },
        swap_model: function () {
            if (this.$route.params.model == 'ww305ecm') {
                this.$router.push('/model/mol01ecm/tick/' + this.$route.params.tick);
                this.area = this.get_area(this.$route.params.model);
            } else if (this.$route.params.model == 'mol01ecm') {
                this.$router.push('/model/ww305ecm/tick/' + this.$route.params.tick);
                this.area = this.get_area(this.$route.params.model);
            }
        },
        toggle_zoom: function () {
            this.zoom = !this.zoom;
            this.area = this.get_area(this.$route.params.model);
        },
        toggle_period: function () {
            this.period = !this.period;
        },
        toggle_gust: function () {
            this.gust = !this.gust;
        },
    },
    mounted() {
        model = (typeof this.$route.params.model === 'undefined' || this.$route.params.model == 'lr' || this.$route.params.model == 'hr') ? 'ww305ecm' : this.$route.params.model;
        tick = (typeof this.$route.params.tick === 'undefined') ? '1' : this.$route.params.tick;
        this.$router.push('/model/' + model + '/tick/' + tick);
        this.area = this.get_area(model);
        window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
})
