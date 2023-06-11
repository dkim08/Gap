function mybtn() {
  let text =  document.querySelector('.content-hide');
  let btn = document.querySelector('#btn');
  
  text.classList.toggle('active');
  if(text.classList.contains('active')){
    btn.innerHTML = 'Скрыть';
  }
  else{
    btn.innerHTML = 'Узнать больше';
  }
}

