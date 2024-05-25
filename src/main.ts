import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/***
 * CSS
 */
import "./assets/main.css";
/***
 * Icons
 */
import "@/config/icons";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components: components,
  directives: directives
});

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(vuetify);
app.use(router);

app.mount("#app");
