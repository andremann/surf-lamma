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
        base: 'http://www.lamma.rete.toscana.it/models/ww3',
        wave: '/last/swh.',
        wind: '/last/wind10.',
        area:  null
    },
    methods: {
        get_area: function(model) {
            if (model === 'lr') {
                return 'M';
            } else {
                return 'B';
            }
        },
        step: function (n) {
            this.$router.push(String(Number(this.$route.params.tick) + n));
        },
        swap_model: function () {
            if (this.$route.params.model == 'lr') {
                this.$router.push('/model/hr/tick/' + this.$route.params.tick);
                this.area = 'B';
            } else if (this.$route.params.model == 'hr') {
                this.$router.push('/model/lr/tick/' + this.$route.params.tick);
                this.area = 'M';
            }
        }
    },
    mounted() {
        if (typeof this.$route.params.tick === "undefined" && typeof this.$route.params.model === "undefined") {
            this.$router.push('/model/lr/tick/1');
        }
        if (typeof this.$route.params.tick === "undefined") {
            this.$router.push('/model/' + this.$route.params.model + '/tick/1');
        }
        if (typeof this.$route.params.model === "undefined") {
            this.$router.push('/model/lr/tick/' + this.$route.params.model);
        }
        this.area = this.get_area(this.$route.params.model);
    },
    watch: {
        $route(to, from) {
            this.area = this.get_area(to.params.model);
        }
    }
})
