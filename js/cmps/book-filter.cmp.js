export default {
    template: `
    <div class="book-filter">
        <label>Search</label>
        <input @input="filter" v-model="filterBy.title" type="text" placeholder="Search book by title">
        <p>Price</p>
        <input @input="filter" v-model="filterBy.priceMin" type="number" min="0" placeholder="Min">
        -
        <input @input="filter" v-model="filterBy.priceMax" type="number" min="0" placeholder="Max">
    </div>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                priceMin: '',
                priceMax: ''
            },
        };
    },
    methods: {
        filter() {
            console.log({...this.filterBy});
            this.$emit('filtered', { ...this.filterBy });
        },
    },
};
