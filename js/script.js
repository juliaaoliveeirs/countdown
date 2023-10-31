import Countdown from './modules/countdown.js';
import Modal from './modules/modal.js';

const countdown = new Countdown('01 Jan 2024 00:00:00');
countdown.init();

const modal = new Modal('.modal-open', '.modal', '.modal-close', 'Escape');
modal.init();
