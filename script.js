let scrollBarFunction = ()=>{
    let middleiconbar = document.querySelector('.middle-icon-bar');
    let deg = 0;
    middleiconbar.addEventListener('click',(e)=>{
        mainScrollBar = document.querySelector('.main-scroll-bar');
        mainScrollBar.style.transform = `translate(40%,-30%)  rotate(${deg+=90}deg)`;
        if(deg == 360){
            deg =0;
            mainScrollBar.style.transform = `translate(40%,-30%)  rotate(${deg}deg)`;
        }
    });
}
scrollBarFunction();
// icon bar
let iconBar = document.querySelectorAll('.iconbar');
iconBar.forEach((e)=>{
    e.addEventListener('mouseover',(event)=>{
        if(e.classList.contains('rotate-90') || e.classList.contains('rotate-270') ){
            if(e.classList.contains('rotate-90')){
                e.style.transform = 'rotate(90deg) scale(1.2)'
            }
            else{
                e.style.transform = 'rotate(-90deg) scale(1.2)'
            }
        }
        else{
            e.style.transform = 'scale(1.2)';
        }
    });
    e.addEventListener('mouseout',(event)=>{
        if(e.classList.contains('rotate-90') || e.classList.contains('rotate-270') ){
            if(e.classList.contains('rotate-90')){
                e.style.transform = 'rotate(90deg) scale(1)'
            }
            else{
                e.style.transform = 'rotate(-90deg) scale(1)'
            }
        }
        else{
            e.style.transform = 'scale(1)';
        }
    });
})