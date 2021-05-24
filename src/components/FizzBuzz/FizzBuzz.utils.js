export const getBackgroundColor = (count) => {
    if(count%3 === 0 && count%5 === 0) return 'green';

    if(count%3 === 0) return 'red';
    else if(count%5 === 0) return 'yellow';
    else return '';
}

export const getText = (count) => {
    if(count%3 === 0 && count%5 === 0) return 'FizzBuzz';

    if(count%3 === 0) return 'Fizz';
    else if(count%5 === 0) return 'Buzz';
    else return count;
}