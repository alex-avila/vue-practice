<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="changeColor(colors.blue)">Load Blue Template</button>
                <button class="btn btn-success" @click="changeColor(colors.green)">Load Green Template</button>
                <button class="btn btn-danger" @click="changeColor(colors.red)">Load Red Template</button>
                <hr>
                <component :is="color">
                    <h1>Fun.</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                color: 'appBlue',
                colors: {
                    blue: 'appBlue',
                    green: 'appGreen',
                    red: 'appRed'
                }
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            changeColor(color) {
                this.color = color
            }
        }
    }
</script>

<style>
</style>
