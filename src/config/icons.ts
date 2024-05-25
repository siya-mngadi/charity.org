import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

import {
  faBars,
  faHouse,
  faPhone,
  faEnvelope,
  faArrowLeft,
  faArrowRight,
  faSquareArrowUpRight
} from "@fortawesome/free-solid-svg-icons";

library.add(
  ...[
    faBars,
    faHouse,
    faPhone,
    faFacebook,
    faInstagram,
    faEnvelope,
    faSquareArrowUpRight,
    faArrowLeft,
    faArrowRight
  ]
);

export enum AwesomeIcons {
  MENU = "fa-solid fa-bars",
  HOME = "fa-solid fa-house",
  CALL = "fa-solid fa-phone",
  FACEBOOK = "fa-brands fa-facebook",
  INSTAGRAM = "fa-brands fa-instagram",
  EMAIL = "fa-solid fa-envelope",
  LEARN_MORE = "fa-solid fa-square-arrow-up-right",
  BACK = "fa-solid fa-arrow-left",
  NEXT = "fa-solid fa-arrow-right"
}
