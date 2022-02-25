option = {
    root: null,
    rootmargin: 0,
    threshold: 0.5
}

const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.intersectionRatio);
        if(entry.intersectionRatio >= 0.5){
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}

observer = new IntersectionObserver(handleIntersect, option);

observer.observe(document.querySelector('.hidden'));
