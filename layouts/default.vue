<template>
    <div class="app container-fluid">
        <div class="row">
            <main-menu></main-menu> 
            <main class="col-xs p-4 py-5">
                <Nuxt />
            </main>
        </div>
    </div>
</template>

<script>
import MainMenu from '@/components/main-menu';

export default {
    data() {
        return {
            year: "2017",
            transformValue: "translateX(0)",
            navState: false
        };
    }
};
</script>