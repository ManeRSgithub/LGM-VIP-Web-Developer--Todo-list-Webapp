   // Get DOM elements
   const list = document.querySelector('#list');
   const form = document.querySelector('#form');
   const input = document.querySelector('#form input');

   // Add to list
   const addToList = (text) => {
	 const listItem = document.createElement('li');
	 const checkbox = document.createElement('input');
	 const label = document.createElement('label');
	 const deleteButton = document.createElement('span');

	 // Setup checkbox
	 checkbox.type = 'checkbox';
	 checkbox.className = 'checkbox';
	 listItem.appendChild(checkbox);

	 // Setup label
	 label.innerText = text;
	 listItem.appendChild(label);

	 // Setup delete button
	 deleteButton.innerText = 'delete';
	 deleteButton.className = 'delete';
	 listItem.appendChild(deleteButton);

	 // Add to list
	 list.appendChild(listItem);
   };

   // Add to list event
   form.addEventListener('submit', (e) => {
	 e.preventDefault();
	 const text = input.value;
	 if (text) {
	   addToList(text);
	   input.value = '';
	 }
   });

   // Check off list item event
   list.addEventListener('click', (e) => {
	 if (e.target.type === 'checkbox') {
	   const listItem = e.target.parentNode;
	   listItem.classList.toggle('done');
	 } else if (e.target.className === 'delete') {
	   const listItem = e.target.parentNode;
	   list.removeChild(listItem);
	 }
   });