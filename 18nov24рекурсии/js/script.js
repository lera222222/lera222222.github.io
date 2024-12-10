let startBox = document.createElement('div');
// startBox.style.margin = 'auto';
document.body.append(startBox);
let color1 = 0;
let color2 = 100;
let color3 = 1;


    function draw(size, box){

            if (size>1) {

                let boxChild = document.createElement('div');
                boxChild.style.width = (size + 25) + 'px';
                boxChild.style.height = (size - 20) + 'px';
               
                boxChild.style.border = '3px solid rgb( '+ color1 + ',' + color2 + ',' + color3 + ')';
                color1 = color1 + 4 ;
                color3 = color3 + 25 ;

                   const intervalId = setInterval(function() {

                    boxChild.style.transform = 'rotate(' + size/10 + 'deg) translateX(' + 1 + 'px) translateY(' + 1 + 'px)';
                    size++;
                    color1 = color1 - 10;
                    color3 = color3 - 100;
                
                },100); 
 
            box.append(boxChild);
            draw(size-10, boxChild);
 
            } 
        }

    draw(1000, startBox);

