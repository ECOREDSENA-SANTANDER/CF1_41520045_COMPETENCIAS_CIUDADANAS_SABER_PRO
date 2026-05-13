<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Las competencias emocionales y ciudadanas constituyen un eje fundamental en la formación de individuos capaces de comprender, analizar y enfrentar las problemáticas sociales de manera crítica, responsable y constructiva. A través del desarrollo de habilidades como la empatía, el pensamiento reflexivo y la toma de decisiones, se fortalece no solo el crecimiento personal, sino también la convivencia y la participación social. En el contexto de Colombia, este proceso adquiere especial relevancia, ya que contribuye a la transformación social, promoviendo valores, principios éticos y el respeto por las normas. De este modo, la formación ciudadana se convierte en una herramienta clave para construir una sociedad más equitativa, incluyente y orientada al bienestar común. 

    .row.justify-content-center
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
