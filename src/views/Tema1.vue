<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inteligencia emocional
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/1.png')
    
    p.mb-4(data-aos="fade-left") Se refiere a un conjunto de habilidades distintas al coeficiente intelectual, ya que se enfocan en el reconocimiento de las emociones y en la capacidad de relacionarse con los demás. Por ello, se divide en dos dimensiones:
    
    p.mb-4(data-aos="fade-right") La inteligencia emocional intrapersonal es la habilidad para comunicarse de manera eficaz con uno mismo y gestionar adecuadamente las propias emociones. Incluye la autoconciencia emocional, la autorregulación y la automotivación.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/3.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg2.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Título Pódcast acerca de la Inteligencia emocional"
                :audio="require('@/assets/actividad/audio/Podcast_CF1_41520045_Competencias_ciudadanas_Saber_Pro.mp3')"
              ).mb-0
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                //p.mb-0 

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 La inteligencia emocional interpersonal

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto
          h5 Figura 1.
          | Inteligencia emocional
        .bg3.p-4.p-lg-5
          img(src='@/assets/curso/tema1/4.svg', alt='La inteligencia emocional integra habilidades como la autoconciencia, la autorregulación, la automotivación, las habilidades sociales y la empatía, permitiendo a la persona comprender y gestionar sus emociones, así como relacionarse de manera adecuada con los demás.')

    .bg4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/5.png')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/6.svg')
            p.mb-3(data-aos="fade-left") Para fortalecer estas habilidades, es necesario cuestionarse y reflexionar sobre la propia forma de ser y de percibir el entorno: ¿qué tipo de persona soy?, ¿cómo está mi autoestima?, ¿valoro lo que soy y lo que hago?, ¿soy competente intelectualmente?, ¿comprendo, respeto y tolero a los demás?, ¿tengo en cuenta el cuidado del medio ambiente?
            p.mb-0(data-aos="fade-left") Es importante reconocer que las respuestas pueden ser subjetivas, ya que el amor propio puede distorsionar la percepción de uno mismo, llevando a pensar que siempre se actúa correctamente. Por ello, resulta conveniente realizar este tipo de reflexiones en grupo, con prudencia y apertura, para acercarse a una visión más objetiva y fortalecer aquellos aspectos que favorezcan una convivencia armoniosa y el desarrollo de competencias ciudadanas.

    p.mb-4(data-aos="fade-right") En consecuencia, es necesario evaluar las distintas áreas que influyen en la dimensión humana, como la social, cultural, educativa, laboral, familiar, emocional y física. En este sentido, lo emocional es un componente implícito y transversal que atraviesa todas estas dimensiones.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 1.
          | Inteligencia emocional intrapersonal vs. inteligencia emocional interpersonal
        .tabla-a.tab1
          table
            thead
              tr
                th Inteligencia emocional intrapersonal
                th Inteligencia emocional interpersonal
            tbody
              tr
                td Capacidad de comprender y gestionar las propias emociones.
                td Capacidad de comprender y manejar las emociones de los demás.
              tr
                td Se enfoca en el autoconocimiento y el autocontrol.
                td Se enfoca en la interacción y las relaciones sociales.
              tr
                td Incluye la autoconciencia, autorregulación y automotivación.
                td Incluye la empatía y las habilidades sociales.
              tr
                td Permite reconocer y controlar emociones propias.
                td Permite entender y responder a las emociones ajenas.
              tr
                td Favorece la toma de decisiones y el equilibrio emocional.
                td Facilita la convivencia y la resolución de conflictos.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Hormonas del cerebro: ¿por qué son importantes?
    
    p.mb-4(data-aos="fade-right") Las hormonas y neurotransmisores cerebrales son sustancias químicas que permiten la comunicación entre las neuronas. Son fundamentales para regular emociones, pensamientos y comportamientos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Figura 2.
          | Principales hormonas del cerebro
        img(src='@/assets/curso/tema1/7.svg', alt='Las hormonas del cerebro son mensajeros químicos esenciales que regulan nuestras emociones, pensamientos y comportamientos. Sustancias como la dopamina, serotonina y oxitocina influyen en el bienestar, la motivación y las relaciones sociales. Su equilibrio es clave para la salud mental y física. Mantener hábitos saludables ayuda a regular su funcionamiento y mejorar la calidad de vida.')

    .tit.mb-5.mb-lg-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Identificación de la competencia emocional

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-6
        p.mb-4 Para identificar esta competencia, es fundamental fortalecer el autoconcepto a través de la autoimagen, la autoestima y el autocompromiso. Estos elementos, desde lo individual, contribuyen a la formación del carácter y de la identidad.
        p.mb-0 En este sentido, es posible hablar de hábitos orientados al desarrollo de la inteligencia emocional, los cuales pueden aplicarse en las circunstancias adecuadas para favorecer la armonía, la convivencia pacífica y la construcción de paz, aspectos que resultan especialmente necesarios en el contexto de Colombia.
      .col-lg-6.d-none.d-lg-block
        img.img-t.img-a(src='@/assets/curso/tema1/8.png')


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Resiliencia
    
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5.d-none.d-lg-block
        img.img-t.img-a(src='@/assets/curso/tema1/9.png')
      .col-lg-7
        .bg5.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
              img(src='@/assets/curso/tema1/10.svg')
            .col-lg-7(data-aos="fade-left")
              .p-4
                p.mb-0 La resiliencia es la capacidad de enfrentar las dificultades, de cualquier tipo, con flexibilidad y de sobreponerse a ellas. Gracias a esta habilidad, el ser humano puede atravesar momentos potencialmente traumáticos y salir fortalecido.
        p.mb-0 Para desarrollarla, es necesario reestructurar las representaciones mentales en función de las nuevas circunstancias y de las propias necesidades. De este modo, las personas resilientes no solo logran superar las adversidades que enfrentan, sino que van un paso más allá: utilizan esas experiencias como oportunidades para crecer y desarrollar al máximo su potencial.
    
    p.mb-5(data-aos="fade-left") Desde esta perspectiva, no se concibe la vida como “dura”, sino como una sucesión de momentos difíciles que pueden ser afrontados y transformados. No se trata simplemente de un cambio en el lenguaje, sino de una manera más optimista y consciente de interpretar la realidad, entendiendo que después de la tormenta llega la calma. Por ello, esta forma de afrontar las dificultades puede resultar sorprendente para quienes no han desarrollado plenamente esta capacidad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/11.png')

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 ¿Cómo ser más resiliente?

    p.mb-4(data-aos="fade-right") La resiliencia no es una cualidad innata; por el contrario, es una capacidad que puede desarrollarse a lo largo de la vida. Según Southwick & Charney (2012), algunas acciones que favorecen su fortalecimiento son:

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima1(src='@/assets/curso/tema1/12.svg')
          h4.mb-0.text-center Fomentar la creatividad.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima2(src='@/assets/curso/tema1/13.svg')
          h4.mb-0.text-center Confiar en las propias capacidades.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima3(src='@/assets/curso/tema1/14.svg')
          h4.mb-0.text-center Asumir las dificultades como oportunidades de aprendizaje.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima4(src='@/assets/curso/tema1/15.svg')
          h4.mb-0.text-center Practicar la conciencia plena.
    .d-none
      img(src='@/assets/curso/tema1/f1.svg')
      img(src='@/assets/curso/tema1/f2.svg')
      img(src='@/assets/curso/tema1/f3.svg')
      img(src='@/assets/curso/tema1/f4.svg')

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima5(src='@/assets/curso/tema1/16.svg')
          h4.mb-0.text-center Reconocer tanto las propias potencialidades como las limitaciones.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima6(src='@/assets/curso/tema1/17.svg')
          h4.mb-0.text-center Mantener una visión objetiva de la vida, desde una perspectiva optimista.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima7(src='@/assets/curso/tema1/18.svg')
          h4.mb-0.text-center Rodearse de personas con actitudes positivas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima8(src='@/assets/curso/tema1/19.svg')
          h4.mb-0.text-center Evitar la necesidad de controlar todas las situaciones.
    .d-none
      img(src='@/assets/curso/tema1/f5.svg')
      img(src='@/assets/curso/tema1/f6.svg')
      img(src='@/assets/curso/tema1/f7.svg')
      img(src='@/assets/curso/tema1/f8.svg')

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima9(src='@/assets/curso/tema1/20.svg')
          h4.mb-0.text-center Ser flexible ante los cambios.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima10(src='@/assets/curso/tema1/21.svg')
          h4.mb-0.text-center Perseverar en las metas propuestas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima11(src='@/assets/curso/tema1/22.svg')
          h4.mb-0.text-center Afrontar la adversidad con sentido del humor.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg6.p-4
          img.img-t.img-a.my-2.mb-4.ima12(src='@/assets/curso/tema1/23.svg')
          h4.mb-0.text-center Buscar apoyo en los demás y fortalecer las redes de apoyo social.
    .d-none
      img(src='@/assets/curso/tema1/f9.svg')
      img(src='@/assets/curso/tema1/f10.svg')
      img(src='@/assets/curso/tema1/f11.svg')
      img(src='@/assets/curso/tema1/f12.svg')

    p.mb-0(data-aos="fade-right") Estas acciones contribuyen a desarrollar una actitud más adaptativa frente a las dificultades, favoreciendo el crecimiento personal y el bienestar emocional.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Procesos de resistencia

    .row.justify-content-center.align-items-end.mb-lg-5.mb-4
      .col-lg-5.d-none.d-lg-block
        img.img-t.img-a(src='@/assets/curso/tema1/24.png')
      .col-lg-7
        .bg3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right")
              img(src='@/assets/curso/tema1/25.svg')
            .col-lg-7(data-aos="fade-left")
              .p-4
                p.mb-0 El desarrollo de competencias ciudadanas en Colombia tiene como propósito promover un cambio social significativo. Para ello, es necesario reconocer y analizar tanto los antecedentes históricos como las características sociales actuales del país, incluyendo aspectos como los índices de violencia en el ámbito familiar, político y urbano.
        p.mb-0 En este contexto, es fundamental que las personas desarrollen habilidades que les permitan relacionarse de manera pacífica y constructiva, basadas en el reconocimiento de los derechos humanos y la Constitución Política. Dado que los seres humanos tienden a priorizar sus propios intereses e ideas, los conflictos son inevitables; sin embargo, estas competencias deben orientar la búsqueda de acuerdos, favoreciendo el diálogo y evitando el uso de la violencia.

    p.mb-4(data-aos="fade-right") Asimismo, al formar parte de grupos sociales, surge la necesidad de convivir y cuidarse mutuamente. De acuerdo con los Estándares Básicos de Competencias Ciudadanas (2004), es esencial aprender a no maltratar y a protegerse a sí mismo y a los demás de cualquier forma de violencia (física, verbal, sexual o psicológica).

    p.mb-4(data-aos="fade-left") También implica reconocer los errores, pedir disculpas cuando se causa daño y aprender a perdonar, entendiendo que el resentimiento y la rabia generan sufrimiento. A esto se suma el respeto por las normas de tránsito, la prevención de accidentes y la garantía de los derechos sexuales y reproductivos, entre otros aspectos que promueven una convivencia solidaria.

    .row.justify-content-center.align-items-start.mb-0(data-aos="fade-right")
      .col-lg-8
        p.mb-4 Este compromiso no se limita únicamente a las relaciones humanas. El cuidado del medio ambiente (incluyendo plantas, animales y todas las formas de vida) es igualmente fundamental para una convivencia pacífica, dado que todos compartimos el mismo planeta.
        .bg1.p-4.p-lg-5
          p.mb-4.mx-lg-2 Desde esta perspectiva, la paz no se entiende únicamente como la ausencia de guerra (paz negativa), sino como un proceso activo de construcción de justicia en los distintos niveles de las relaciones humanas (paz positiva). Se trata de un concepto dinámico que implica afrontar y resolver los conflictos de manera constructiva para alcanzar la armonía.
          p.mb-0.mx-lg-2 En consecuencia, construir la paz significa promover actitudes, procesos y acciones orientadas a transformar las relaciones marcadas por la violencia en vínculos basados en el respeto, la cooperación y la convivencia pacífica.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/25.png')


</template>

<script>
export default {
  name: 'Tema1',
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
