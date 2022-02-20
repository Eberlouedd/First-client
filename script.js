const auto = document.querySelector('.auto');
const account = document.querySelector('.account');
const analys = document.querySelector('.analys');
const pAuto = document.querySelector('.auto p');
const dAuto = document.querySelector('.auto-project');
const pAccount = document.querySelector('.account p');
const pAnalys = document.querySelector('.analys p');

const selectAuto = () => {
    const timeLine = gsap.timeline({paused: true});

    timeLine.to(account, {display: 'none', duration: 0});
    timeLine.to(analys, {display: 'none', duration: 0});
    timeLine.to(dAuto, {display: 'flex', duration: 0})
    timeLine.to(pAuto, {display: 'none', duration: 0});
    timeLine.to(auto, {width: '100%', duration: 1}, '+=0.5');
    timeLine.to('.auto-project div', {opacity: 1, stagger: 0.5});
    timeLine.play();

}
