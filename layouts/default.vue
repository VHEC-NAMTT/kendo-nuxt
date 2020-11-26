<template>
  <div class="app container-fluid">
    <div class="row">
          <div id="top-bar" class="top-bar col-xs-12 bg-inverse d-md-none"></div>
            <div id="nav" style="min-height: 100vh"
                class="col-xs-3 bg-inverse text-white py-5 k-vbox"
                v-if="this.$route.path.toLowerCase() !== '/signin'"
                :class="{expand: navState}">
                <span id="nav-toggle" class="nav-toggle d-md-none" @click="navState = !navState">
                    <span class="k-icon k-i-hamburger"></span>
                </span>
                <h1 id="app-title">Issues</h1>
                <p id="app-subtitle">Sample Dashboard</p>
                <hr />
                <p class="h4 mt-5">Project</p>
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item" id="dashbaord">
                        <nuxt-link to="/" class="nav-link">Dashboard</nuxt-link>
                    </li>
                    <li class="nav-item" id="issues">
                        <nuxt-link to="/issues" class="nav-link">Issues</nuxt-link>
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
                <div id="copy">
                    <p>Copyright &copy; {{year}},<br /><a href="http://www.progress.com">Progress Software Corporation</a> and/or its subsidiaries or affiliates.</p>
                    <p>All Rights Reserved.</p>
                </div>
            </div>
          <main class="col-xs p-4 py-5">
              <Nuxt />
          </main>
      </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
        year: '2017',
        transformValue: 'translateX(0)',
        navState: false
      }
    }
}
</script>