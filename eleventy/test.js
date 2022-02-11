import { bubbleScroll } from '../index.mjs';

const view = document.querySelector('.parallax-page');

// bubbleScroll(view);

view.addEventListener('scroll', (e) => {
    console.log('scrolling');
});
