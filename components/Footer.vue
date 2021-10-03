<template>
  <footer>
    <div class="row">
      <div class="col-sm-6 col-md-4 footer-navigation">
        <h3><a class="navbar-brand" href="#"></a></h3>
        <p class="links">
          <a href="#">Home</a><strong> · </strong><a href="#">Blog</a
          ><strong> · </strong><a href="#">Tech</a><strong> · </strong
          ><a href="#">Services</a><a href="#"></a>
        </p>
        <p class="company-name">Number9 Technology Solutions© 2021</p>
      </div>
      <div class="col-sm-6 col-md-4 footer-contacts">
        <div class="div-footer-links">
          <i class="fa fa-phone footer-contacts-icon d-inline-block"
            ><font-awesome-icon :icon="['fas', 'map']"
          /></i>
          <p
            class="footer-center-info email text-left foot-par-text d-inline-block"
          >
            Freiburg im Breisgau
          </p>
        </div>
        <div class="div-footer-links">
          <i class="fa fa-phone footer-contacts-icon d-inline-block"
            ><font-awesome-icon :icon="['fas', 'phone']"
          /></i>
          <p
            class="footer-center-info email text-left foot-par-text d-inline-block"
          >
            +49 157 3728 9767
          </p>
        </div>
        <div class="div-footer-links">
          <i class="fa fa-phone footer-contacts-icon d-inline-block"
            ><font-awesome-icon :icon="['fas', 'mail-bulk']"
          /></i>
          <p class="foot-par-text d-inline-block">
            <a id="emailLink" href="#" target="_blank">info@numbernine.tech</a>
          </p>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="col-md-4 footer-about">
        <h4>Über&nbsp; Uns</h4>
        <p>
          Eine Neugründung in Freiburg. Offen für technologische Lösungen mit
          Herz für Design und Leidenschaft für Effizienz.
        </p>
        <div class="social-links social-icons">
          <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
          <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
          <a href="#"><font-awesome-icon :icon="['fab', 'github']" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
footer {
  background-color: #000;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
  bottom: 0;
  color: #fff;
}

@media (max-width: 592px) {
  #footer-contacts {
    flex: none !important;
    max-width: none !important;
  }
  footer {
    text-align: center;
  }
}

.footer-navigation h3 {
  margin: 0;
  font: normal 36px Cookie, cursive;
  margin-bottom: 20px;
  color: #fff;
}

.footer-navigation h3 a {
  background: url('~@/assets/img/logo.svg') center / contain no-repeat;
  width: 150px;
  height: 41px;
  margin: 23px;
  margin-left: 12px;
  margin-top: 16px;
}

.footer-navigation h3 span {
  color: #007bff;
}

.footer-navigation p.links a {
  color: #fff;
  text-decoration: none;
}

.footer-navigation p.company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin-top: 20px;
}

@media (max-width: 767px) {
  .footer-contacts {
    margin: 30px 0;
  }
}

.footer-contacts p a {
  color: #007bff;
  text-decoration: none;
}

.fa.footer-contacts-icon {
  background-color: #33383b;
  color: #fff;
  font-size: 18px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 38px;
  margin: 10px 15px 10px 0;
}

span.new-line-span {
  display: block;
  font-weight: normal;
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-about h4 {
  display: block;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-about p {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

div.social-links {
  margin-top: 20px;
  color: #fff;
}

.social-links a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-right: 5px;
  margin-bottom: 5px;
}

#contact-main-button:hover {
  background: #007bffad;
}
</style>
