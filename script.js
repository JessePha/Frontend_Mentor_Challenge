
document.querySelectorAll('.accordion_question').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('open');
        let accCollapse = item.nextElementSibling;
        if(!item.classList.contains('collapsing')){
            
        if(item.classList.contains('open')){
            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;

            setTimeout(() =>{
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
            },1)
            item.nextElementSibling.classList = 'accordion_collapse collapsing';
            setTimeout(() =>{
                item.nextElementSibling.classList = 'accordion_collapse collapse open';
            }, 300)
        }else{
            accCollapse.classList = 'accordion_collapse collapsing';
            
            setTimeout(() =>{
                accCollapse.style.height = '0px';
            },1)

            setTimeout(() =>{
                accCollapse.classList = 'accordion_collapse collapse';
                accCollapse.style.height = '';
            }, 300)
        }
    }

    })
})