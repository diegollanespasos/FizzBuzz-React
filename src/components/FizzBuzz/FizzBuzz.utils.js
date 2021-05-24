export const getBackgroundColor = (count) => {
    if(count%3 === 0 && count%5 === 0) return 'green';

    if(count%3 === 0) return 'red';

    if(count%5 === 0) return 'yellow';

    return '';
}

export const getText = (count) => {
    if(count%3 === 0 && count%5 === 0) return 'FizzBuzz';

    if(count%3 === 0) return 'Fizz';

    if(count%5 === 0) return 'Buzz';

    return count;
}