<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >conduit
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <template v-if="!isLoggedIn">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <router-link
              class="nav-link"
              :to="{ name: 'home' }"
              active-class="active"
              >Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'login' }"
              active-class="active"
              >Sign in
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'register' }"
              active-class="active"
              >Sign up
            </router-link>
          </li>
        </template>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <a class="nav-link" href="/editor">
              <i class="ion-compose"></i>&nbsp;New Article
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile/eric-simons">
              <img src="" class="user-pic" />
              Eric Simons
            </a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RwTopBar',
  computed: mapState({
    currentUser: (state) => state.auth.currentUser,
    isLoggedIn: (state) => state.auth.isLoggedIn,
  }),
}
</script>
