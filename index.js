const flower = document.querySelector('.flower');
var mensajes = ["Hola mi amor hermosa se que hoy se regalan flores amarillas pero yo queria hacerlo de una forma mas orginal", "y por eso queria darte esta flor una que es eterna como el amor que siento por ti", "te amo hoy, mañana y siempre quiero vivir una vida contigo y quedarme hasta viejitos te amo nena", "espero te guste de mi para ti", "Entre más pase el tiempo más me gustas y más me enamoro de ti ya hasta mi corazón me dice con sus latidos que eres el amor de mi vida, que si no ve tu hermosa sonrisa ya no siente ningúna alegría. También que si no siento el calor de tus abrazos me muero de frío porque cuando me alejó de ti solo me dan ganas de volver a verte, quiero verte todos los días conmigo. También me pasa si no veo tu bella mirada se empieza a marchitar mi alma Porque el brillo que tienen tus lindos ojos es el que ilumina mi alma y la que la hace florecer como el sol que nace al amanecer. Por eso no creo que pueda vivir sin ti, ni tampoco creo que pueda sentir algo de alegría en mi alma por eso ya eres el motivo de mi alegría y el amor de mi vida como toda la fuerza que hace mover todo mi ser. Mi corazón ya te eligió para hacer el amor de mi vida y mis ojos solo te verán a ti, mi mente siempre te pensará como mi corazón siempre te querrá y te amara porque ya me enamore de ti y siempre te diré que ya eres el amor de mi vida"];

flower.addEventListener('click', () => {
  function mostrarMensajes(i) {
    if (i < mensajes.length) {
      swal(mensajes[i]).then(function() {
        mostrarMensajes(i + 1);
      });
    }
  }

  mostrarMensajes(0);
});
