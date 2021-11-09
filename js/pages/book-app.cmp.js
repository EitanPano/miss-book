import { bookService } from '../services/book-service.js';
import { eventBus } from '../services/event-bus-service.js';

import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from './book-details.cmp.js'

export default {
    components: {
        bookFilter,
        bookList,
        bookDetails,
    },
    template: `
    <section class="book-app app-main">
        <book-filter @filtered="setFilter" />
        <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"/>
        <book-details v-else @closed="selectedBook = null" :book="selectedBook"/>
    </section>
    `,
    data() {
        return {
            books: bookService.query(),
            filterBy: null,
            selectedBook: null
        };
    },
    created() {
        this.loadBooks();
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books);
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        selectBook(book) {
            console.log(book);
            this.selectedBook = book;
        }    

    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;

            const searchStr = this.filterBy.title.toLowerCase();
            const minPrice = (this.filterBy.priceMin) ? this.filterBy.priceMin : 0
            const maxPrice = (this.filterBy.priceMax) ? this.filterBy.priceMax : Infinity

            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr) &&
                book.listPrice.amount >= minPrice &&
                book.listPrice.amount <= maxPrice
            })
            return booksToShow;
        }
    }
}
