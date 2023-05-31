<template>
    <div class="d-flex gap-5">
        <div class="img-container w-25">
            <img :src="info.thumb" :alt="info.game">
        </div>
        <div class="details w-50">
            <h3>{{ info.game }}</h3>
            <ul class="list-unstyled d-flex gap-3 m-0 p-0">
                <li class="flex-grow-1" v-for="(genre, index) in info.genres" :key="index">
                    <span class="badge text-bg-dark w-100">{{ genre.name }}</span>
                </li>
            </ul>
            <div class="d-flex">
                <span>{{ info.release_date }}</span>
                <span>Icons</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CardList',

        props: {
            info: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>