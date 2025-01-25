const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

console.log(Object.values(person));
