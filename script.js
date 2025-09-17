document.addEventListener('DOMContentLoaded', function () {
  const cardTypeSelect = document.querySelector('select[name="cardType"]');
  const unitFields = document.getElementById('unitFields');
  const nonCombatFields = document.getElementById('nonCombatFields');

  function updateFormFields() {
    const value = cardTypeSelect.value;
    // Show unit fields for unit types
    if (
      value === 'Infantry' ||
      value === 'Tank' ||
      value === 'Artillery' ||
      value === 'Fighter' ||
      value === 'Bomber'
    ) {
      unitFields.style.display = '';
      nonCombatFields.style.display = 'none';
    }
    // Show non-combat fields for Order or Countermeasure
    else if (value === 'Order' || value === 'Countermeasure') {
      unitFields.style.display = 'none';
      nonCombatFields.style.display = '';
    } else {
      unitFields.style.display = 'none';
      nonCombatFields.style.display = 'none';
    }
  }

  cardTypeSelect.addEventListener('change', updateFormFields);

  // Run once to set the initial state
  updateFormFields();

  // Optional: Prevent form submission for now (for testing)
  document.getElementById('cardCreatorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted! (You can add processing code here soon)');
  });
});
console.log("KARDS Card Creator loaded!");