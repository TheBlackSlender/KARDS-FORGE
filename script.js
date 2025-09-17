document.addEventListener('DOMContentLoaded', function () {
  const cardTypeSelect = document.querySelector('select[name="cardType"]');
  const unitFields = document.getElementById('unitFields');
  const nonCombatFields = document.getElementById('nonCombatFields');
  const form = document.getElementById('cardCreatorForm');
  
  function updateFormFields() {
    const value = cardTypeSelect.value;
    if (
      value === 'Infantry' ||
      value === 'Tank' ||
      value === 'Artillery' ||
      value === 'Fighter' ||
      value === 'Bomber'
    ) {
      unitFields.style.display = '';
      nonCombatFields.style.display = 'none';
    } else if (value === 'Order' || value === 'Countermeasure') {
      unitFields.style.display = 'none';
      nonCombatFields.style.display = '';
    } else {
      unitFields.style.display = 'none';
      nonCombatFields.style.display = 'none';
    }
  }

  cardTypeSelect.addEventListener('change', updateFormFields);
  updateFormFields();

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get all form data
    const data = new FormData(form);
    const cardName = data.get('cardName');
    const cardCost = data.get('cardCost');
    const cardType = data.get('cardType');
    const cardRarity = data.get('cardRarity');
    const nation = data.get('nation');

    let cardDetails = `
      <h3>Card Preview</h3>
      <p><strong>Name:</strong> ${cardName}</p>
      <p><strong>Cost:</strong> ${cardCost}</p>
      <p><strong>Type:</strong> ${cardType}</p>
      <p><strong>Rarity:</strong> ${cardRarity}</p>
      <p><strong>Nation:</strong> ${nation}</p>
    `;

    if (
      cardType === 'Infantry' ||
      cardType === 'Tank' ||
      cardType === 'Artillery' ||
      cardType === 'Fighter' ||
      cardType === 'Bomber'
    ) {
      const operationCost = data.get('operationCost');
      const attack = data.get('attack');
      const defense = data.get('defense');
      const keywords = data.get('keywords');
      cardDetails += `
        <p><strong>Operation Cost:</strong> ${operationCost}</p>
        <p><strong>Attack:</strong> ${attack}</p>
        <p><strong>Defense:</strong> ${defense}</p>
        <p><strong>Keywords/Abilities:</strong> ${keywords}</p>
      `;
    } else if (cardType === 'Order' || cardType === 'Countermeasure') {
      const effect = data.get('effect');
      cardDetails += `<p><strong>Effect:</strong> ${effect}</p>`;
    }

    // Display the card details below the form
    let previewDiv = document.getElementById('card-preview');
    if (!previewDiv) {
      previewDiv = document.createElement('div');
      previewDiv.id = 'card-preview';
      form.parentNode.appendChild(previewDiv);
    }
    previewDiv.innerHTML = cardDetails;
  });
});
console.log("KARDS Card Creator loaded!");