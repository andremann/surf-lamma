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
        get_area: function(model) {
            if (!this.zoom) {
                return 'A'
            } else {
                if (model === 'lr') {
                    return 'M';
                } else {
                    return 'B';
                }
            }
        },
        step: function (n) {
            this.$router.push(String(Number(this.$route.params.tick) + n));
        },
        swap_model: function () {
            if (this.$route.params.model == 'lr') {
                this.$router.push('/model/hr/tick/' + this.$route.params.tick);
                this.area = this.get_area(this.$route.params.model);
            } else if (this.$route.params.model == 'hr') {
                this.$router.push('/model/lr/tick/' + this.$route.params.tick);
                this.area = this.get_area(this.$route.params.model);
            }
        },
        toggle_area: function () {
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
        model = (typeof this.$route.params.model === 'undefined') ? 'lr' : this.$route.params.model;
        tick = (typeof this.$route.params.tick === 'undefined') ? '1' : this.$route.params.tick;
        this.$router.push('/model/' + model + '/tick/' + tick);
        this.area = this.get_area(this.$route.params.model);
    }
})
