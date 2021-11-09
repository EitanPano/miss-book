export default {
    props: ['reviews'],
    template: `
    <section>
        <ul>
            <li v-for="review in reviews" :key="review.id">
                <p>{{ review.name }}</p>
                <p>{{ review.rating }}</p>
                <p v-if="review.txt">{{ review.txt }}</p>
                <p>{{ review.date }}</p>
                <button @click="remove(review)">x</button>
            </li>
        </ul>
    </section>
    `,
    methods: {
        remove(review) {
            this.$emit('removed', review)
        }
    }
}