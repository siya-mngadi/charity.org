<template>
  <nav class="navbar navbar-expand-md fixed-top navbar-light bg-light py-0">
    <div class="navbar-container">
      <div class="nav-container">
        <div class="nav-menu">
          <div class="img-logo">
            <RouterLink class="navbar-brand" to="/">
              <img alt="Isolezwe Classic Logo" src="../assets/logo.svg" />
            </RouterLink>
          </div>

          <div class="btn-menu">
            <VBtn
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggleBtn"
              aria-controls="toggleBtn"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon :icon="['fas', 'bars']" class="fa-xl" />
            </VBtn>
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="toggleBtn">
        <ul class="navbar-nav ms-auto mb-2">
          <li class="nav-item">
            <RouterLink class="nav-link mx-3 fs-5" to="/">Home</RouterLink>
          </li>

          <li class="nav-item">
            <a href="#project" class="nav-link mx-3 fs-5">Projects</a>
          </li>

          <li class="nav-item">
            <a href="#aboutUs" class="nav-link mx-3 fs-5">About</a>
          </li>

          <li class="nav-item">
            <a href="#contactUs" class="nav-link mx-3 fs-5">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
$main: #c68c53;

.nav-link {
  position: relative;
}

.navbar-container {
  display: flex;
  width: 80%;
  margin: auto;
}

.nav-link::after {
  content: "";
  opacity: 0;
  transition: all 0.2s;
  height: 2px;
  width: 100%;
  background-color: $main;
  position: absolute;
  bottom: 0;
  left: 0;
}

.nav-link:hover::after {
  opacity: 1;
}

.nav-container {
  display: inline;
  width: 100%;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
}

.navbar-brand {
  height: fit-content;
  img {
    width: 6rem;
    object-fit: cover;
  }
}

.navbar-toggler {
  min-height: 45px;
}
</style>
