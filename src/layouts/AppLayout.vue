<script setup>
import SideBar from '../components/SideBar.vue'
</script>

<template>
    <header>
        <SideBar></SideBar>
    </header>
    <main>
        <component :is="$route.meta.layout">
            <router-view></router-view>
        </component>
    </main>
</template>
