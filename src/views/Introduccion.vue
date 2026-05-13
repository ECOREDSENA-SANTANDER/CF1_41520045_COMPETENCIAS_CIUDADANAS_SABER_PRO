<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/intro/1.png')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2
            img(src='@/assets/curso/intro/2.svg')
          .col-lg-10
            p.mb-0 En la actualidad, la formación ciudadana se constituye en un pilar fundamental para afrontar los retos sociales que enfrentan las sociedades contemporáneas. En el contexto de Colombia, resulta especialmente relevante fortalecer competencias que permitan a los individuos desenvolverse de manera responsable, crítica y constructiva frente a las diversas problemáticas sociales.
        p.mb-0 En este sentido, las competencias emocionales adquieren un papel central, ya que favorecen el desarrollo de habilidades para analizar situaciones, comprender diferentes perspectivas y tomar decisiones basadas en una actitud positiva. Estas competencias no solo contribuyen al crecimiento personal, sino que también inciden en la productividad, la convivencia y la construcción de entornos más equitativos.
    
    p.mb-4 Formar ciudadanos implica, entonces, un proceso continuo de transformación social, en el que se integran principios éticos, valores y normas que orientan la interacción humana. De esta manera, se promueve el reconocimiento del otro, el respeto por las diferencias y la participación activa en la vida social.
    
    p.mb-5 Por ello, reflexionar sobre cómo el país promueve la formación ciudadana en las nuevas generaciones resulta fundamental, especialmente en un contexto donde se buscan alternativas para disminuir la exclusión social, combatir la corrupción, fortalecer la participación ciudadana y resolver los conflictos de manera pacífica.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
