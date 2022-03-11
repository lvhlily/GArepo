function selectPet(petType){

    // Get the specific pet data set from data.js
    const thePet = petData[petType];

    // Set the title (class is petDisplayName)
    document.querySelector('.petDisplayName').innerText = thePet.displayName;



    // Empty the specification data
    document.querySelector('.petsDataSpecs').innerHTML = "";

    let listData = "";

    // Add the space required, size, weight

    listData += "<dt>Space Required</dt>";
    listData += "<dd>" + thePet.spaceRequired + "</dd>";

    listData += "<dt>Weight</dt>";
    listData += "<dd>"+thePet.weight + "</dd>";

    listData += "<dt>Size</dt>";
    listData += "<dd>"+ thePet.size + "</dd>";

 
    // Add logic to add the trainability and lap size images

    // Trainability
    listData += "<dt>Trainability</dt>";

    if(thePet.trainability == true){
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-default.svg.png' alt=\"Yes\"/></dd>";
    }else{
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-unreadable.svg.png' alt=\"Yes\"/></dd>";

    }

    // Lap size
    listData += "<dt>Fits On Lap</dt>";

    if(thePet.fitsOnLap == true){
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-default.svg.png' alt=\"Yes\"/></dd>";
    }else{
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-unreadable.svg.png' alt=\"Yes\"/></dd>";

    }

    // Add the foods (may require loop)
   
    listData += "<dt>Foods</dt>";
    listData += "<dd><ul>";

    for(let i=0; i < thePet.foods.length; i++){
        listData += "<li>"+ thePet.foods[i] +"</li>";
    }
   

    listData += "</ul></dd>";

    document.querySelector(".petsDataSpecs").innerHTML = listData;




    // Update the images

        // Set the big image
        document.querySelector('.photoLarge').setAttribute('src', thePet.images[0].img);

        // Target alt tag
        document.querySelector('.photoLarge').setAttribute('alt', thePet.images[0].alt);


        // Add the thumbnails
        let theThumbnails = "";

            // Loop through images for thumbnails and change them according to pet
        for(let i=0; i < thePet.images.length; i++){
            theThumbnails += "<a href='" + thePet.images[i].img + "'><img class=\"photoThumb\" src='" + thePet.images[i].thumb + "' alt='" + thePet.images[i].thumb + "'/></a>";
        }

        document.querySelector('.thumbHaus').innerHTML = theThumbnails;

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        let theThumbnailTags = document.querySelectorAll('.thumbHaus > a');

        for(let i=0; i < theThumbnailTags.length; i++){
            theThumbnailTags[i].addEventListener
            ('click', function(e){

                // Stop the A from running
                e.preventDefault();

                // Get the href of the A (this is our big image url). getAttribute gets just attributes in an object
                let theBigImageURL = this.getAttribute('href');

                // Get the alt of the img tag. querySelector gets whole object and children
                let theAlt = this.querySelector('.photoThumb').getAttribute('alt');


                // Set the big image alt and src
                document.querySelector('.photoLarge').setAttribute('src', theBigImageURL);

                document.querySelector('.photoLarge').setAttribute('alt', theAlt);
            });

        }


    // Empty the ideal for

    document.querySelector('.idealFor').innerHTML = "";

    let idealData = "";

    // Insert the ideal for

    for(let i=0; i < thePet.idealOwner.length; i++){
        idealData += "<ul>"+ thePet.idealOwner[i] +"</ul>";
    }

    document.querySelector(".idealFor").innerHTML = idealData;

    // Empty the Adoption Groups
    document.querySelector('.adoptionGroups').innerHTML = "";

    let adoptData = "";
    // Add the adoption groups

    for(let i=0; i < thePet.adoption.length; i++){
        adoptData += "<li><a href=\"" + thePet.adoption[i].url + "\" target=\"_blank\">"+thePet.adoption[i].name+"</a></li>";
    }

    document.querySelector(".adoptionGroups").innerHTML = adoptData;

}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");

    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
        
    // Get the selected pet
        let selectedPet = document.querySelector('#petType').value;
        console.log("The selected pet is "+selectedPet)


        // call selectPet
        selectPet(selectedPet);


        });
    });
    


