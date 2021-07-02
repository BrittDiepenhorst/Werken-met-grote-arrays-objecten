console.log(randomPersonData);

const landList = document.getElementById('landlist');
const steenbokList = document.getElementById('steenboklist');
const buttonLandList = document.getElementById('buttonLandList');
const buttonSteenbokVrouwen = document.getElementById('buttonSteenbokVrouwen');

// Functie om data aan de html toe te voegen
const addDataToDom = (array, list) => {
    landList.innerHTML = '';
    steenbokList.innerHTML = '';
    array.forEach((element) => {
        const listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.innerHTML = element;
        // foto toevoegen lukt niet, waarom niet? 
        // const photoImg = document.createElement("img");
        // listItem.appendChild(photoImg);
        // photoImg.setAttribute('src', element.photo);
        // listItem.appendChild(photoImg);
    })
};

// Maak functie lijst van alle landen, gesorteerd op naam van het land 
buttonLandList.addEventListener("click", function () {
    const MakingLandList = () => {
        const landListArray = randomPersonData.map((element) => {
            return element.region;
        })
        const landListArrayNew = [... new Set(landListArray)].sort();
        addDataToDom(landListArrayNew, landList);
    }
    MakingLandList();
});

// Maak een lijst van mensen voor- en achternaam en hun foto, sorteer de lijst op voornaam, vrouw, ouder zijn dan 30 (1990 of ouder), een steenbok zijn (jarig van 22 december t/m 19 januari)
buttonSteenbokVrouwen.addEventListener("click", function () {
    const MakingSteenBokList = () => {
        let telwaarde = 0;
        let filteredArray = [];
        randomPersonData.forEach((element) => {
            const birthdayDay = parseInt(element.birthday.dmy.split("/")[0]);
            const birthdayMonth = parseInt(element.birthday.dmy.split("/")[1]);
            const birthdayYear = parseInt(element.birthday.dmy.split("/")[2]);
            if (element.gender === "female" &&
                // element.age > 30 &&; waarom werkt dit niet en birthdayYear wel? 
                birthdayMonth == 12 && birthdayDay > 21 && birthdayYear < 1990 ||
                birthdayMonth == 01 && birthdayDay < 20 && birthdayYear < 1990) {
                filteredArray[telwaarde] = element.name + ' ' + element.surname + ' ' + element.photo;
                telwaarde += 1;
            }
        })
        const sorteredFilteredArray = filteredArray.sort();

        addDataToDom(sorteredFilteredArray, steenbokList);
    }
    MakingSteenBokList();
});
