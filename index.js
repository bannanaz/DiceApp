
 document.getElementById('side').addEventListener('click', function() {
    
    var num = Math.ceil(Math.random() * 6 );

    //selektera varje resp dot-id.
    for(var i=1; i<7; i++){
        document.getElementById('dot'+ i).style.display = '';
     }

    //cleara senaste siffran
    var classList = document.querySelectorAll('.dot');
    for (i = 0; i < classList.length; i++) {
    classList[i].style.display = 'none';
    } 


    if (num === 1){
        dot7.style.display = 'block';
    }

    else if (num === 2){
        dot1.style.display = 'block';
        dot2.style.display = 'block';
        }

    else if (num === 3){
        dot1.style.display = 'block';
        dot2.style.display = 'block';
        dot7.style.display = 'block';
        }

    else if (num === 4){
        dot1.style.display = 'block';
        dot4.style.display = 'block';
        dot3.style.display = 'block';
        dot2.style.display = 'block';
        }
    
    else if (num === 5){
        dot1.style.display = 'block';
        dot4.style.display = 'block';
        dot3.style.display = 'block';
        dot2.style.display = 'block';
        dot7.style.display = 'block';
    }

    else {
        dot1.style.display = 'block';
        dot4.style.display = 'block';
        dot3.style.display = 'block';
        dot2.style.display = 'block';
        dot5.style.display = 'block';
        dot6.style.display = 'block';
    }
  });
