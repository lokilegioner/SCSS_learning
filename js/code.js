let
    btnDropMenu = document.querySelector('.drop-list'),
    titleToFix = document.querySelector('#title-droped'),

    listMenu = document.createElement('div'),
    blockContent = document.getElementById('block-after-drop-menu'),
    isDroped = false,
    mt_afterDropedBlock = '9em',
    mt_beforeDropedBlock = '3em',
    listItems = document.querySelectorAll('.listBtn'),
    menuItems = [],
    dropBtnContainer = document.querySelector('#drop-down-cage'),
    dropBtn = document.createElement('div');

// Drop down menu for Edge

listMenu.classList.add('drop-menu-js-hide');
for (let i = 0; i < 4; i++) {
    menuItems.push(document.createElement('a'));
    menuItems[i].setAttribute('href', '#');
    menuItems[i].classList.add('listBtn');
    menuItems[i].textContent = listItems[i].textContent;
    listMenu.appendChild(menuItems[i]);
}

dropBtn.classList.add('drop-menu-btn');
dropBtnContainer.appendChild(dropBtn);

dropBtn.appendChild(listMenu);

dropBtn.addEventListener('click', function(){
    listMenu.classList.toggle('drop-menu-js-hide');
    listMenu.classList.toggle('drop-menu-js');
    if (!isDroped) {
        blockContent.style.margin = mt_afterDropedBlock + ' auto';
        isDroped = !isDroped;
    } else {
        blockContent.style.margin = mt_beforeDropedBlock + 'auto';
        isDroped = !isDroped;
    }
    
});

//Correction margin-top h1 after as detail droped for Chrome, Firefox

    btnDropMenu.addEventListener('click', function() {
        titleToFix.classList.toggle('margin-correction');
    });

