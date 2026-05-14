// Inline-Script, läuft im <head> vor dem ersten Paint und setzt
// die A11y-Klassen aus localStorage auf <html>. Verhindert FOUC.
export const a11yInitScript = `(function(){try{var s=localStorage.getItem('hpf:a11y:size');var c=localStorage.getItem('hpf:a11y:contrast');if(s==='large')document.documentElement.classList.add('a11y-large');if(s==='xlarge')document.documentElement.classList.add('a11y-xlarge');if(c==='1')document.documentElement.classList.add('a11y-contrast');}catch(e){}})();`;
