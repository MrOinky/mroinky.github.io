const list = document.createElement('ul');
const info = document.createElement('span');
const html = document.querySelector('html');

info.textContent = 'Add item';
info.className = 'listinfo';

document.body.appendChild(info);
document.body.appendChild(list);

info.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('Magical List says: what do i add?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Magical List says: What should replace this?');
    this.textContent = listContent;
  }
}