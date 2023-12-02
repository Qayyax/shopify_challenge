const selectPlanBtn = document.getElementById('select-plan');
const trialDiv = document.querySelector('.trial-message');
const closeIconBtn = document.querySelector('.close-icon');
const task1 = document.getElementById('task-1');
const task2 = document.getElementById('task-2');
const task3 = document.getElementById('task-3');
const task4 = document.getElementById('task-4');
const task5 = document.getElementById('task-5');
const h2 = document.querySelectorAll('h2');
const componentCard = document.querySelectorAll('.component-card');
const componentList = document.querySelectorAll('.component-list');
const arrowIcon = document.getElementById('arrow-down');
const taskSection = document.querySelector('.task');
const profileIcon = document.querySelector('.profile-icon');
const profileSetting = document.querySelector('.profile-setting');
const bell = document.querySelector('.bell');
const alertContainer = document.querySelector('.alert-container');
const componentImage = document.querySelectorAll('.component-image');
const profileDetail = document.querySelector('.profile-details');

////// Event Listers /////////

// Function to close Select a plan div
closeIconBtn.addEventListener('click', () => {
  closeDiv(trialDiv);
});

profileDetail.addEventListener('click', () => {
  closeDiv(profileSetting);
});

// Function to toggle alert-container
bell.addEventListener('click', () => {
  closeDiv(alertContainer);
});

// Function to change arrow up or down
// also to close the task container
arrowIcon.addEventListener('click', () => {
  closeDiv(taskSection);
  if (taskSection.classList.contains('close')) {
    arrowIcon.src =
      'https://crushingit.tech/hackathon-assets/icon-arrow-down.svg';
  } else {
    arrowIcon.src =
      'https://crushingit.tech/hackathon-assets/icon-arrow-up.svg';
  }
});

///////////////////////////////////////

// Progressbar functionality
const checkBox = document.querySelectorAll('input[type="checkbox"]');
const progressNum = document.querySelector('.progress-num');
const progressStatus = document.querySelector('.progress-status');

let isChecked = Array.from(checkBox).map((e) => (e.checked ? 1 : 0));

function updateTotal() {
  const totalValue = isChecked.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  progressNum.innerText = totalValue;

  const widthPercentage = totalValue === 0 ? 0 : (totalValue - 1) * 20 + 20;
  progressStatus.style.width = `${widthPercentage}%`;
}

checkBox.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    isChecked[index] = checkbox.checked ? 1 : 0;
    updateTotal();
  });
});

///////////////////////////////////////

// Function to handle the current task
function handleTask(currentTask, cardIndex) {
  if (currentTask.classList.contains('component-property')) {
    return;
  } else if (currentTask.classList.contains('component-property')) {
    resetAllTasks();
  } else {
    resetAllTasks();
    currentComponent(currentTask);
    closeDiv(componentCard[cardIndex]);
    componentImage[cardIndex].classList.add('comp-disp');
    boldText(h2[cardIndex]);
  }
}

// Event listeners for each task with the refactored function
task1.addEventListener('click', () => handleTask(task1, 0));
task2.addEventListener('click', () => handleTask(task2, 1));
task3.addEventListener('click', () => handleTask(task3, 2));
task4.addEventListener('click', () => handleTask(task4, 3));
task5.addEventListener('click', () => handleTask(task5, 4));

////////// FUNCTIONS //////////

// Add .close class to element
function closeDiv(button) {
  button.classList.toggle('close');
}

//  Add .component-property class to element
function currentComponent(item) {
  item.classList.toggle('component-property');
}

// Make h2 bold when toggled
function boldText(item) {
  item.classList.toggle('bold-h2');
}

// Function to reset all tasks to their default state
function resetAllTasks() {
  componentCard.forEach((card) => card.classList.add('close'));
  componentList.forEach((card) => card.classList.remove('component-property'));
  h2.forEach((header) => header.classList.remove('bold-h2'));
  componentImage.forEach((card) => card.classList.remove('comp-disp'));
}
