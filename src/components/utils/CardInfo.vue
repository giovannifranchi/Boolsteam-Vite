<template>
    <div class="wrapper">
        <h3 class="text-white">{{ info.game }}</h3>
        <h4 class="text-white mt-3">Data di rilascio: {{ info.release_date }}</h4>
        <ul class="list-unstyled d-flex gap-4 mt-5" v-if="info.genres">
            <li v-for="(genre, index) in info.genres" :key="index" class="flex-grow-1">
                <span class="badge text-bg-dark w-100 fs-5">{{ genre.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'CardInfo',

        props: {
            info: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
    background-color: rgba($color: #000000, $alpha: .3);
}
</style>