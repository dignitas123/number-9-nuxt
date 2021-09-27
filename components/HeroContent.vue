<template>
  <div id="hero-content">
    <h1 id="main-quote">
      IT-Service &amp; Anwendungslösungen für Ihre Unternehmung
    </h1>
    <h2 id="main-quote-1">
      Kontaktieren Sie uns noch heute um Ihre Ideen Wirklichkeit werden zu
      lassen!
    </h2>
  </div>
</template>

<style scoped lang="scss">
#hero-content {
  margin-right: auto;
  margin-left: auto;
  max-width: 700px;
  border-radius: 25px;
  box-shadow: 0px 0px 40px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}

#main-quote {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 520px) {
  #main-quote {
    font-size: 24px;
  }
}

@media (min-width: 730px) {
  #main-quote {
    font-size: 60px;
  }
}

@media (min-width: 956px) {
  #main-quote {
    font-size: 40px;
    font-weight: bold;
  }
}

#main-quote-1 {
  text-transform: none;
  font-size: 20px;
  margin-top: 50px;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 520px) {
  #main-quote-1 {
    font-size: 18px;
  }
}

@media (min-width: 730px) {
  #main-quote-1 {
    font-size: 30px;
  }
}

@media (min-width: 956px) {
  #main-quote-1 {
    font-size: 50px;
  }
}
</style>
