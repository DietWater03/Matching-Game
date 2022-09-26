window.addEventListener('load', generateFaces);
    let numberOfFaces = 5;//starting number of faces
    const theLeftSide = document.getElementById('leftSide');//left side space
    const theRightSide = document.getElementById('rightSide');//right side space

    function generateFaces(){

      for(let i = 0; i < numberOfFaces; i++){ //for loop that will generate a face during each loop
        let face = document.createElement('img'); //creating a new face element to be appended
        face.src = 'images/smile.png';
        const randomTop = Math.floor((Math.random() * 400) + 1); //random number for vertical postion 1-400px
        const randomLeft = Math.floor((Math.random() * 400) + 1); //random number for horizontal postion 1-400px
        face.style.top = randomTop + 'px'; //assign the random vertical postion to the face style
        face.style.left = randomLeft + 'px'; //same for horizontal style
        theLeftSide.appendChild(face); //append the face to the left space
      }

      const leftSideImages = theLeftSide.cloneNode(true); //clone the left side and save it to variable
      leftSideImages.removeChild(leftSideImages.lastChild); //remove the last face from the clone
      theRightSide.appendChild(leftSideImages); //add clone to the right side area
      theLeftSide.lastChild.addEventListener('click', nextLevel); //clicking on the last child will result in the next level appearing
      document.body.addEventListener('click', gameOver);  //click anywhere else will end the game
    }

    function nextLevel(event){ //function that makes the next level appear
      event.stopPropagation(); //stops bubbling
      numberOfFaces += 5; //add 5 more faces to the next level

      while(theLeftSide.firstChild){ //removes all faces on the left side 
        theLeftSide.removeChild(theLeftSide.firstChild);
      }

      while(theRightSide.firstChild){ //removes all faces on the right side
        theRightSide.removeChild(theRightSide.firstChild);
      }

      generateFaces(); //runs generate faces again
    }

    function gameOver(){ //function that ends the game
      alert('That\'s not it! Game Over.'); //tell user that the clicked the wrong face and that the game is over
      theLeftSide.lastChild.removeEventListener('click', nextLevel); //removes event listener from correct face
      document.body.removeEventListener('click', gameOver); //removes event listener from document body (wrong click)
    }