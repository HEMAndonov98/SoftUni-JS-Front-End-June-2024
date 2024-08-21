window.addEventListener("load", solve);

function solve() {
  const form = document.querySelector('form');
  const addButtn = document.getElementById('add-btn');
  const textField = document.getElementById('description');
  const listEl = document.getElementById('preview-list');
  const archiveListEl = document.getElementById('archive-list');

  const createHistoricEvent = (eventName, eventDate, description) => {
    const listItemE = document.createElement('li');
    const articleE = document.createElement('article');
    const pName = document.createElement('p');
    const pDate = document.createElement('p');
    const pDesc = document.createElement('p');

    const edditBttnE = document.createElement('button');
    const nextBttnE = document.createElement('button');
    const buttonContainerE = document.createElement('div');

    pName.textContent = eventName;
    pDate.textContent = eventDate;
    pDesc.textContent = description;

    edditBttnE.textContent = '[Edit]';
    edditBttnE.classList.add('edit-btn');

    nextBttnE.textContent = '[Next]';
    nextBttnE.classList.add('next-btn');

    buttonContainerE.classList.add('buttons')

    buttonContainerE.appendChild(edditBttnE);
    buttonContainerE.appendChild(nextBttnE);

    articleE.appendChild(pName);
    articleE.appendChild(pDate);
    articleE.appendChild(pDesc);

    listItemE.appendChild(articleE);
    listItemE.appendChild(buttonContainerE);
    listEl.appendChild(listItemE);
  };

  const addEditFunction = () => {
    const btnContainerE = document.querySelector('.buttons');

    const editBtn = btnContainerE.querySelector('.edit-btn');
    btnContainerE.removeChild(editBtn);

    editBtn.addEventListener('click', editArticle);

    btnContainerE.prepend(editBtn);
  };
  const editArticle = (editBtn) => {
    // Extract data from preview-list and delete list item
    const articleE = editBtn.currentTarget.parentNode.previousSibling;
    const [nameField, dateField] = [...form.getElementsByTagName('input')];
    const [pName, pDate, pDesc] = [...articleE.children].map((e) => e.textContent);
    listEl.removeChild(articleE.parentNode);

    // add extracted to form
    nameField.value = pName;
    dateField.value = pDate;
    textField.value = pDesc;

    //enable addbutton
    addButtn.attributes.removeNamedItem('disabled');
  }

  const addNextFunction = () => {
    const btnContainerE = document.querySelector('.buttons');

    const nextBtn = btnContainerE.querySelector('.next-btn');
    btnContainerE.removeChild(nextBtn);

    nextBtn.addEventListener('click', next);
    btnContainerE.append(nextBtn);
  };
  const next = (nextBtn) => {
    const listItemE = listEl.querySelector('li');

    // Delete List Item with event

    listEl.removeChild(listItemE);
    // Remove BttnContainer from list item

    const btnsContainer = listItemE.querySelector('.buttons');
    listItemE.removeChild(btnsContainer);
    // Add a single button [Archive] with class archive-btn

    const archiveBtn = document.createElement('button');
    archiveBtn.classList.add('archive-btn');
    archiveBtn.textContent = '[Archive]';

    archiveBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      archiveListEl.removeChild(archiveListEl.children[0]);
      addButtn.attributes.removeNamedItem('disabled');
    })
    listItemE.appendChild(archiveBtn);
    // Append list item to ul with id archive-list
    archiveListEl.appendChild(listItemE);
  }

  addButtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputFields = [...form.getElementsByTagName('input')];

    const [eventName, eventDate] = inputFields.map((e) => e.value);
    const desc = textField.value;

    inputFields.forEach((e) => e.value = '');
    textField.value = '';
    addButtn.setAttribute('disabled', true);

    createHistoricEvent(eventName, eventDate, desc);
    addEditFunction();
    addNextFunction();
  });

}