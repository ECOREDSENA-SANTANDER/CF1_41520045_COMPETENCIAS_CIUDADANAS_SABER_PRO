<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Competencias emocionales y políticas públicas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'La inteligencia emocional intrapersonal se refiere a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprender las emociones de los demás.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manejar las emociones propias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resolver conflictos sociales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Participar en política.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 2,
          texto: 'La empatía hace parte de la inteligencia emocional:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Intrapersonal.', esCorrecta: false },
            { id: 'b', texto: 'Cognitiva.', esCorrecta: false },
            { id: 'c', texto: 'Interpersonal.', esCorrecta: true },
            { id: 'd', texto: 'Académica.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 3,
          texto: 'Una persona resiliente se caracteriza por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evitar los problemas.', esCorrecta: false },
            { id: 'b', texto: 'Ignorar sus emociones.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Superar dificultades y aprender de ellas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depender de otros para decidir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 4,
          texto: 'La cultura ciudadana se basa principalmente en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La competencia económica.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La obediencia sin cuestionar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La convivencia, respeto y solidaridad.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'El poder político.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El artículo 41 de la Constitución Política de Colombia establece:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El derecho al trabajo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La enseñanza obligatoria de la Constitución.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'La libertad de expresión.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La protección del ambiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El artículo 67 de la Constitución Política de Colombia se relaciona con:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La justicia penal.', esCorrecta: false },
            { id: 'b', texto: 'La educación.', esCorrecta: true },
            { id: 'c', texto: 'La economía.', esCorrecta: false },
            { id: 'd', texto: 'La seguridad.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 7,
          texto: 'Una actitud se define como:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conocimiento científico.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Una emoción pasajera.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Una disposición para actuar.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Una norma social.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 8,
          texto: 'La resiliencia implica principalmente:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Controlar a los demás.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Adaptarse positivamente al cambio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar emociones negativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No asumir responsabilidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 9,
          texto: 'Un ejemplo de valor universal es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Competencia.', esCorrecta: false },
            { id: 'b', texto: 'Amor.', esCorrecta: true },
            { id: 'c', texto: 'Riqueza.', esCorrecta: false },
            { id: 'd', texto: 'Poder.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 10,
          texto: 'La responsabilidad implica:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Culpar a otros.', esCorrecta: false },
            { id: 'b', texto: 'Evadir problemas.', esCorrecta: false },
            { id: 'c', texto: 'Asumir consecuencias.', esCorrecta: true },
            { id: 'd', texto: 'Seguir órdenes.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 11,
          texto: 'Una norma ambiental busca:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar el consumo.', esCorrecta: false },
            { id: 'b', texto: 'Reducir la contaminación.', esCorrecta: true },
            { id: 'c', texto: 'Generar conflicto.', esCorrecta: false },
            { id: 'd', texto: 'Evitar la participación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 12,
          texto: 'La tolerancia consiste en:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Imponer ideas.', esCorrecta: false },
            { id: 'b', texto: 'Ignorar a los demás.', esCorrecta: false },
            { id: 'c', texto: 'Aceptar diferencias.', esCorrecta: true },
            { id: 'd', texto: 'Criticar constantemente.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 13,
          texto: 'Una competencia ciudadana permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aislarse socialmente.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Resolver conflictos pacíficamente.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Evitar normas.', esCorrecta: false },
            { id: 'd', texto: 'Imponer autoridad.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 14,
          texto: 'El cuidado del medio ambiente implica:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Usar recursos sin control.', esCorrecta: false },
            { id: 'b', texto: 'Contaminar menos.', esCorrecta: true },
            { id: 'c', texto: 'Ignorar normas.', esCorrecta: false },
            { id: 'd', texto: 'Evitar responsabilidades.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 15,
          texto: 'La solidaridad se manifiesta cuando:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Se actúa individualmente.', esCorrecta: false },
            { id: 'b', texto: 'Se ayuda a otros.', esCorrecta: true },
            { id: 'c', texto: 'Se compite.', esCorrecta: false },
            { id: 'd', texto: 'Se ignoran problemas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 16,
          texto: 'El respeto implica:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Juzgar a los demás.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reconocer el valor de otros.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Evitar relaciones.', esCorrecta: false },
            { id: 'd', texto: 'Imponer reglas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 17,
          texto: 'La paz positiva se refiere a:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ausencia de guerra.', esCorrecta: false },
            { id: 'b', texto: 'Conflictos constantes.', esCorrecta: false },
            { id: 'c', texto: 'Justicia y armonía social.', esCorrecta: true },
            { id: 'd', texto: 'Autoridad estricta.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 18,
          texto: 'Una conducta ecológica adecuada es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Desperdiciar agua.', esCorrecta: false },
            { id: 'b', texto: 'Reciclar.', esCorrecta: true },
            { id: 'c', texto: 'Contaminar.', esCorrecta: false },
            { id: 'd', texto: 'Ignorar el entorno.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 19,
          texto: 'La cultura ciudadana contribuye a:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar conflictos.', esCorrecta: false },
            { id: 'b', texto: 'Mejorar la convivencia.', esCorrecta: true },
            { id: 'c', texto: 'Reducir la educación.', esCorrecta: false },
            { id: 'd', texto: 'Evitar normas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 20,
          texto: 'El desarrollo de competencias emocionales permite:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar problemas sociales.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Actuar impulsivamente.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Analizar situaciones y tomar decisiones responsables.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Depender de otros.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de las competencias emocionales y políticas públicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Posee una buena comprensión sobre las competencias emocionales y políticas públicas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
