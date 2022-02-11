function bubbleScroll(element) {
    element.addEventListener('scroll', (e) => {
        if (e.bubbles) return null;
        element.dispatchEvent(new Event('scroll', { bubbles: true }));
    }, { passive: true });
}

export { bubbleScroll };
