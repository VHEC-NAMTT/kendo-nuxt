<template>
    <div id="nav" style="min-height: 100vh" class="col-xs-3 bg-inverse text-white py-5 k-vbox"
        v-if="this.$route.path.toLowerCase() !== '/signin'" :class="{expand: navState}" >
        <!-- <span id="nav-toggle" class="nav-toggle d-md-none" @click="navState = !navState" >
            <span class="k-icon k-i-hamburger"></span>
        </span>
        <h1 id="app-title">Issues</h1> -->
        <p class="h4 mt-5">Project</p>
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" id="dashbaord">
                <nuxt-link to="/" class="nav-link">Dashboard</nuxt-link>
            </li>
            <li class="nav-item" id="issues">
                <nuxt-link to="/issues" class="nav-link">Issues</nuxt-link>
            </li>
            <li class="nav-item" id="issues">
                <nuxt-link to="/account" class="nav-link">Accounts</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/transaction" class="nav-link">Transaction</nuxt-link>
            </li>
            <li class="nav-item" id="issues">                
                <nuxt-link to="/import" class="nav-link">Import File</nuxt-link>
            </li>
            <li class="nav-item" id="issues">
                <nuxt-link to="/master" class="nav-link">Master Page</nuxt-link>
            </li>
            <li class="nav-item" id="issues">
                <nuxt-link to="/master-popup" class="nav-link">Master Page Popup</nuxt-link>
            </li>
        </ul>
        <p class="h4 mt-5">Account</p>
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" id="profile">
                <nuxt-link to="/profile" class="nav-link">My Profile</nuxt-link>
            </li>
            <li class="nav-item" id="signin">
                <nuxt-link to="/signin" class="nav-link">Sign Out</nuxt-link>
            </li>
        </ul>
        <hr class="k-flex" />
    </div>
</template>

<script>
export default {
    name: 'main-menu',
    data () {
      return {
        year: '2017',
        transformValue: 'translateX(0)',
        navState: false
      }
    }
}
</script>

<style>

</style>