export default class Countdown {
  constructor(dateEvent) {
    this.dateEvent = new Date(dateEvent).getTime();
    // this.dateEvent = new Date('30 Oct 2023 20:48:30').getTime();
    this.daysElement = document.querySelector('.days');
    this.hoursElement = document.querySelector('.hours');
    this.minutesElement = document.querySelector('.minutes');
    this.secondsElement = document.querySelector('.seconds');
    this.h1Element = document.querySelector('.countdown-title');
    this.btnElement = document.querySelector('.countdown-btn');
  }

  // Formata a data quando estiver acabando
  formatTime(value) {
    return value <= 0 ? '00' : value < 10 ? `0${value}` : value.toString();
  }

  startCountdown() {
    const intervalCountdown = setInterval(() => {
      // Pega a hora de agora
      const dateNow = new Date().getTime();

      // Verifica a distancia entre as datas
      let dateDistance = this.dateEvent - dateNow;

      // Cálculo de dias, horas, minutos e segundos

      const days = Math.floor(dateDistance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (dateDistance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((dateDistance % (1000 * 60)) / 1000);

      this.daysElement.innerText = this.formatTime(days);
      this.hoursElement.innerText = this.formatTime(hours);
      this.minutesElement.innerText = this.formatTime(minutes);
      this.secondsElement.innerText = this.formatTime(seconds);

      if (dateDistance < 0) {
        clearInterval(intervalCountdown);
        this.h1Element.innerText = 'The launch has started!!';
        this.btnElement.classList.add('disabled');
        this.btnElement.classList.remove('modal-open');
      } else {
        this.btnElement.classList.remove('disabled');
        this.btnElement.classList.add('modal-open');
      }
    }, 1000);
  }

  init() {
    if (
      this.daysElement &&
      this.hoursElement &&
      this.minutesElement &&
      this.secondsElement
    ) {
      this.startCountdown();
    }
    return this;
  }
}
