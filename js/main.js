const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
  //Add border to current tab
  removeBorder();
  removeShow();
  console.log('Hello');
  this.classList.add('tab-border');
  console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}
//Listen for Tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
