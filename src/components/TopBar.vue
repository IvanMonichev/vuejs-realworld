<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >conduit
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'home' }"
            active-class="active"
            >Home
          </router-link>
        </li>
        <template v-if="isAnonymous">
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
            <router-link class="nav-link" :to="{ name: 'home' }">
              <img :src="currentUser.image" class="user-pic" />
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { getterTypes } from '@/store/modules/auth'

export default {
  name: 'RwTopBar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
}
</script>
