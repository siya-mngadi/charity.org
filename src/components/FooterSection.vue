<template>
  <footer>
    <div class="bg-dark pt-5 pb-4">
      <div class="container text center text-md-left">
        <div class="row text-center text-md-left">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <div class="footer-logo">
              <img alt="company logo" class="img-fluid" src="../assets/logo.png" />
            </div>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <ul class="links">
              <li class="link-primary mt-3">
                <a href="#home"><span>Home </span></a>
              </li>
              <li class="link-primary mt-3">
                <a href="#project"><span>Projects </span></a>
              </li>
              <li class="link-primary mt-3">
                <a href="#aboutUs"> <span> About Us </span></a>
              </li>
              <li class="link-primary mt-3">
                <RouterLink to="/privacy">
                  <span> Privacy Policy </span>
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold">Follow us on</h5>
            <ul class="social-media">
              <li>
                <RouterLink to="/#">
                  <FontAwesomeIcon class="media-icon" :icon="AwesomeIcons.FACEBOOK" />
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/#">
                  <FontAwesomeIcon class="media-icon" :icon="AwesomeIcons.INSTAGRAM" />
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold">Contact</h5>

            <div class="mb-2">
              <FontAwesomeIcon :icon="AwesomeIcons.HOME" class="footer-text mr-3" />
              <div class="container-fuild">
                <div class="row">
                  <span class="footer-text">suburb Street</span>
                </div>
                <div class="row">
                  <span class="footer-text">suburb</span>
                </div>
                <div class="row">
                  <span class="footer-text">City, XXXX</span>
                </div>
              </div>
            </div>

            <div class="mb-2">
              <FontAwesomeIcon :icon="AwesomeIcons.EMAIL" class="footer-text mr-3" />
              <div class="footer-text">
                <span> charity-org@gmail.com </span>
              </div>
            </div>

            <div class="mb-2">
              <FontAwesomeIcon :icon="AwesomeIcons.CALL" class="text-white mr-3" />
              <div class="container-fuild">
                <div class="row">
                  <span class="footer-text">XXX XXX XXXX</span>
                </div>
                <div class="row">
                  <span class="footer-text">XXX XXX XXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-text">
      <span>2023 - &copy; Copyright - Charity Organisation</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { AwesomeIcons } from "@/config/icons";
</script>

<style scoped lang="scss">
$main: #c68c53;
$text: #e4e4e4;
$link: #0d6efd;

.copyright-text {
  display: flex;
  justify-content: center;
  height: 35px;
  align-items: center;
  background-color: $main;

  span {
    color: $text;
    font-weight: bold;
  }
}
.text-gold {
  color: $main;
}

.footer-text {
  color: $text;
}

span {
  font-size: small;
}

.links {
  list-style: none;
  padding: 0;

  ul {
    display: inline-block;
  }

  li {
    padding-bottom: 10px;
    padding-right: 5px;
  }

  .link-primary {
    a {
      color: whitesmoke;
      text-decoration: none;
    }
  }

  .link-primary:hover {
    a {
      color: $link;
    }
  }
}

.social-media {
  list-style: none;
  padding: 0;

  li {
    margin-top: 30px;
  }

  svg {
    color: white;
  }

  .media-icon:hover {
    color: $link;
  }
}

footer {
  h5 {
    color: white;
    border-bottom: 5px solid $main;
  }
}

.footer-logo {
  img {
    width: 65%;
    object-fit: contain;
    mix-blend-mode: lighten;
  }
}

@media screen and (max-width: 780x) {
  .footer-logo {
    img {
      width: 30%;
      object-fit: contain;
      mix-blend-mode: lighten;
    }
  }
}
</style>
