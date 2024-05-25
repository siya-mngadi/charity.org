<template>
  <main>
    <div class="home">
      <div class="row home-text" id="home">
        <div class="col-md-4 text-center">
          <h1 class="col-text fw-bold">
            We are <span class="gold-text"> blessed </span> to bless others
          </h1>
          <div class="mission-icon">
            <img :src="we_care" alt="we care" />
          </div>
        </div>

        <div class="col-md-4">
          <h6 class="text-uppercase">VISION</h6>
          <p class="text-muted fs-6">
            Our vision is a world free from the shackles of crime, HIV/AIDS, and poverty. We are
            committed to empowering individuals and communities, providing them with the tools and
            resources they need to overcome these social challenges.
          </p>
          <p class="text-muted fs-6">
            We believe in the power of unity, education, and compassion to transform lives and
            create a safer, healthier, and more prosperous world for all
          </p>
        </div>

        <div class="col-md-4">
          <h6 class="text-uppercase">Donations</h6>
          <p class="text-muted fs-6">
            We appreciate all donations that may help us achieve our goals of empowering our
            community.
          </p>
          <p class="text-muted fs-6">Donate to us and make a different.</p>
          <v-btn color="primary" variant="elevated" @click="isDonateModalOpen = true">
            Donate Now</v-btn
          >
        </div>
      </div>
      <div class="row" id="project">
        <div class="img-slider">
          <v-carousel
            cycle
            hide-delimiter-background
            height="auto"
            show-arrows="hover"
            interval="10000"
          >
            <v-carousel-item cover>
              <template #default>
                <img alt="community_project_01" class="img-fluid" :src="charity_01" />
              </template>
            </v-carousel-item>

            <v-carousel-item cover>
              <template #default>
                <img alt="community_project_02" class="img-fluid" :src="charity_02" />
              </template>
            </v-carousel-item>

            <v-carousel-item cover>
              <template #default>
                <img alt="community_project_03" class="img-fluid" :src="charity_03" />
              </template>
            </v-carousel-item>

            <template #prev="{ props }">
              <v-btn density="compact" rounded @click="props.onClick">
                <FontAwesomeIcon :icon="AwesomeIcons.BACK" />
              </v-btn>
            </template>

            <template #next="{ props }">
              <v-btn density="compact" rounded @click="props.onClick">
                <FontAwesomeIcon :icon="AwesomeIcons.NEXT" />
              </v-btn>
            </template>
          </v-carousel>
        </div>
      </div>
      <div class="project-list">
        <div class="project-header">
          <h5>OUR CORE PROJECTS</h5>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <v-card max-width="400" class="mb-2" variant="flat">
              <v-img
                aspect-ratio="3/2"
                height="200"
                :src="charity_03"
                alt="food-support"
                class="align-end text-white"
                cover
              >
                <v-card-title class="text-center">Food support</v-card-title>
              </v-img>
              <v-card-subtitle class="p-0 h5 my-2"> Helping kids avoid hunger. </v-card-subtitle>

              <v-card-text class="text-muted p-0 fs-6 text-sm-start">
                Our Food Support Project is not just about providing meals, it's about nourishing
                hope and strengthening bonds. Each food parcel we deliver carries with it a message
                of love, a promise of support, and a commitment to stand by each other.
              </v-card-text>
            </v-card>
          </div>

          <div class="col-lg-4">
            <v-card max-width="400" variant="flat">
              <v-img
                aspect-ratio="3/2"
                height="200"
                :src="charity_04"
                alt="food-support"
                class="align-end text-white"
                cover
              >
                <v-card-title class="text-center">Sport Development</v-card-title>
              </v-img>

              <v-card-subtitle class="p-0 h5 my-2">
                Empowering youth through sports.
              </v-card-subtitle>

              <v-card-text class="text-muted p-0 text-sm-start">
                <p class="fs-6">
                  Our Sport Development Project is about inspiring dreams and building character. It
                  teaches teamwork, perseverance, and the pursuit of excellence. In the heart of
                  every child lies a champion waiting to be discovered.
                </p>
              </v-card-text>
            </v-card>
          </div>

          <div class="col-lg-4">
            <v-card max-width="400" variant="flat">
              <v-img
                aspect-ratio="3/2"
                height="200"
                :src="charity_05"
                alt="food-support"
                class="align-end text-white"
                cover
              >
                <v-card-title class="text-center">Woman and Child Abuse Campaign</v-card-title>
              </v-img>

              <v-card-subtitle class="p-0 h5 my-2"> Freedom is everyone's right. </v-card-subtitle>

              <v-card-text class="text-muted p-0 text-sm-start">
                <p class="fs-6">
                  Our campaign against woman and child abuse is not just about fighting these
                  shadows of abuse, it's about igniting the light within each individual affected.
                  Through our collective efforts, we strive to create a world where every woman and
                  child is safe, respected, and free to realize their full potential.
                </p>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>

      <div class="about-section" id="aboutUs">
        <div class="about-header">
          <h5>ABOUT US</h5>
        </div>

        <div class="row">
          <div class="col-md-6">
            <v-card max-height="500">
              <v-img
                aspect-ratio="16/9"
                max-height="315"
                :src="charity"
                alt="team"
                class="align-end text-white"
                contain
              >
              </v-img>
            </v-card>
          </div>
          <div class="col-md-6">
            <v-card>
              <v-card-title>CHARITY ORGANISATION</v-card-title>
              <v-card-text>
                <p class="text-muted fs-6">
                  Charity Organisation is a registered non-profit company affiliated under Companies
                  and intellectual property Commission with a registration number xxxx/xxxxxx/xx;
                  our organization is located at (location) which is most affected by Social issues
                  such as Crime, Hiv and Aids, Poverty and other Social issues.
                </p>
                <p class="text-muted fs-6">
                  Our work is centered around providing resources, support, and opportunities to
                  those most vulnerable in our society. We strive to empower individuals and
                  communities to rise above their circumstances and create a safer, healthier, and
                  more prosperous future. We believe in the power of unity, education, and
                  compassion to transform lives.
                </p>
                <p class="text-muted fs-6">
                  We work tirelessly to create programs and initiatives that address the root causes
                  of these social issues.
                </p>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>

      <div class="team-list">
        <div class="team-header">
          <h5>OUR DEDICATED TEAM</h5>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <v-card max-width="400" class="mb-2">
              <v-img aspect-ratio="0.5" height="200" :src="userImg" alt="director"> </v-img>

              <v-card-subtitle class="my-2 text-gold fs-5"> Director </v-card-subtitle>

              <v-card-text class="text-sm-start fs-4 fw-bold"> PERSON 1 </v-card-text>
            </v-card>
          </div>

          <div class="col-sm-3">
            <v-card max-width="400" class="mb-2">
              <v-img aspect-ratio="0.5" height="200" :src="userImg" alt="director"> </v-img>

              <v-card-subtitle class="my-2 text-gold fs-5"> Director </v-card-subtitle>

              <v-card-text width="100" class="text-sm-start fs-4 fw-bold"> PERSON 2 </v-card-text>
            </v-card>
          </div>

          <div class="col-sm-3">
            <v-card max-width="400" class="mb-2">
              <v-img aspect-ratio="0.5" height="200" :src="userImg" alt="director"> </v-img>

              <v-card-subtitle class="my-2 text-gold fs-5"> Director </v-card-subtitle>

              <v-card-text class="text-sm-start fs-4 fw-bold"> PERSON 3 </v-card-text>
            </v-card>
          </div>

          <div class="col-sm-3">
            <v-card max-width="400" class="mb-2">
              <v-img aspect-ratio="0.5" height="200" :src="userImg" alt="director"> </v-img>

              <v-card-subtitle class="my-2 text-gold fs-5"> Director </v-card-subtitle>

              <v-card-text class="text-sm-start fs-4 fw-bold"> PERSON 4 </v-card-text>
            </v-card>
          </div>
        </div>
      </div>

      <div class="contact-section" id="contactUs">
        <div class="contact-header">
          <h5>CONTACT US</h5>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="contact-img mb-2">
              <v-img
                aspect-ratio="16/9"
                height="300"
                :src="contact"
                alt="Image by Tumisu from Pixabay"
                cover
              >
              </v-img>
            </div>
          </div>
          <div class="col-md-8">
            <v-form ref="ref_form" validate-on="input" @submit.prevent="handleSubmit">
              <div class="row">
                <div class="col-sm-6">
                  <v-text-field
                    v-model.trim="contactModel.name"
                    label="Tell us your name"
                    :rules="nameRules"
                    placeholder="e.g John Doe"
                  ></v-text-field>
                </div>
                <div class="col-sm-6">
                  <v-text-field
                    v-model.trim="contactModel.email"
                    :rules="emailRules"
                    label="Your email address"
                    placeholder="e.g email@gmail.com"
                  ></v-text-field>
                </div>
              </div>

              <v-textarea
                v-model.trim="contactModel.message"
                :rules="messageRules"
                auto-grow
                class="mb-3"
                label="Type your message"
                placeholder="Start typing here..."
              ></v-textarea>

              <div class="form-btn">
                <v-btn color="success" type="submit" class="me-4">Submit</v-btn>
                <v-btn color="error" class="me-4" @click="handleReset"> clear </v-btn>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </main>
  <v-dialog v-model="isDonateModalOpen" width="400">
    <v-card>
      <v-card-title class="text-center"> DONATE TO US </v-card-title>
      <v-card-text>
        <span class="text-muted fs-6">
          For security purposes, please kindly get in contact with us to make a donation.
        </span>

        <div class="bank-logo">
          <img src="../assets/ithala-bank.png" alt="ithala bank logo" />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" block @click="isDonateModalOpen = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-snackbar v-model="notifySuccess" width="400" top variant="plain" :timeout="4000">
    <template #default>
      <v-alert density="compact" width="300" title="Success" type="success" icon="$success">
        Sent Successfully, we will be in touched with you shortly
      </v-alert>
    </template>
  </v-snackbar>
  <v-snackbar v-model="notifyError" width="400" top variant="plain" :timeout="4000">
    <template #default>
      <v-alert density="compact" width="300" title="Error" type="error" icon="$error">
        Unable to send form, please try again after a few minutes
      </v-alert>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { AwesomeIcons } from "@/config/icons";
import { reactive, ref } from "vue";
import contact from "@/assets/contact-us.png";
import userImg from "@/assets/user.png";
import charity from "@/assets/images/charity.png";
import charity_01 from "@/assets/images/charity_01.jpg";
import charity_02 from "@/assets/images/charity_02.jpg";
import charity_03 from "@/assets/images/charity_03.jpg";
import charity_04 from "@/assets/images/charity_04.jpg";
import charity_05 from "@/assets/images/charity_05.jpg";
import we_care from "@/assets/care.png";
import axios from "axios";

const isDonateModalOpen = ref(false);
const notifyError = ref(false);
const notifySuccess = ref(false);
const ref_form = ref();
const contactModel = reactive({ email: "", name: "", message: "" });

const nameRules = [
  (value: string) => {
    if (value?.length > 3) return true;

    return "Name must be at least 3 characters.";
  }
];

const messageRules = [
  (value: string) => {
    if (value?.length >= 10) return true;

    return "Message needs to be at least 10 characters.";
  }
];

const emailRules = [
  (value: string) => {
    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

    return "Must be a valid e-mail.";
  }
];

const handleReset = () => {
  contactModel.email = "";
  contactModel.message = "";
  contactModel.name = "";
};

const handleSubmit = async () => {
  if (!ref_form.value.isValid) return;
  await axios
    .post("https://formspree.io/f/mwkdwoqv", contactModel)
    .then(() => {
      notifySuccess.value = true;
      handleReset();
    })
    .catch((error) => {
      notifyError.value = true;
      console.error(error);
    });
};
</script>
<style scoped lang="scss">
$main: #c68c53;

.v-overlay:is(.v-snackbar) {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 80%;
  left: 80%;
}

.home {
  height: 100%;

  :deep(.fs-6) {
    font-size: 15px !important;
  }

  .col-md-4 {
    min-height: 150px;

    p,
    a {
      font-size: 14px;
    }
  }

  .col-text {
    font-size: 45px;
  }

  .link-primary {
    text-decoration: none;
    font-size: medium;
  }
}

.gold-text {
  color: $main;
}

.mission-icon {
  img {
    width: 20%;
    object-fit: contain;
    aspect-ratio: 1/1;
  }
}

.home-text {
  margin-bottom: 10px;
}

.bank-logo {
  display: flex;
  justify-content: center;
  justify-items: center;
  img {
    width: 20%;
    object-fit: contain;
    aspect-ratio: 3/2;
  }
}

.contact-section {
  border-radius: 20px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;

  .contact-header {
    display: flex;
    justify-content: space-between;

    h5 {
      padding: 0;
      border-bottom: 5px solid $main;
    }

    .btn {
      color: #1565c0;
      min-width: 20px;
      min-height: 25px;
      margin-right: 1rem;
    }
  }
}

.about-section {
  border-radius: 20px;
  margin-top: 2rem;

  .about-header {
    display: flex;
    justify-content: space-between;

    h5 {
      padding: 0;
      border-bottom: 5px solid $main;
    }

    .btn {
      color: #1565c0;
      min-width: 20px;
      min-height: 25px;
      margin-right: 1rem;
    }
  }
}

.team-list {
  border-radius: 20px;
  margin-top: 2rem;

  .team-header {
    display: flex;
    justify-content: space-between;

    h5 {
      padding: 0;
      border-bottom: 5px solid $main;
    }

    .btn {
      color: #1565c0;
      min-width: 20px;
      min-height: 25px;
      margin-right: 1rem;
    }
  }
}

.project-list {
  border-radius: 20px;
  margin-top: 2rem;

  .project-header {
    display: flex;
    justify-content: space-between;

    h5 {
      padding: 0;
      border-bottom: 5px solid $main;
    }

    .btn {
      color: #1565c0;
      min-width: 20px;
      min-height: 25px;
      margin-right: 1rem;
    }
  }
}

:deep(.v-carousel-item) {
  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 3/2;
  }
}
</style>
