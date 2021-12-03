(function(){
    const buttons = document.querySelectorAll('.counterBtn');
    let count = 0;

    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if(button.classList.contains('minus')){
                count--;
            }
            else if(button.classList.contains('plus')){
                count++;
            }

            const counter = document.querySelector('#counter');
            counter.textContent = count;

            if(count < 0){
                counter.style.color = 'red';
            }
            else if (count > 0){
                counter.style.color = 'green';
            }
            else{
                counter.style.color= '#333333';
            }
        })
    })

})();