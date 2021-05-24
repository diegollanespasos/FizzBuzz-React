import './FizzBuzz.css';
import { getBackgroundColor, getText } from './FizzBuzz.utils';

const FizzBuzz = ({ count }) => {
    return(
        <div className={`fizzbuzz ${getBackgroundColor(count)}`}>
        {
            <h1>{getText(count)}</h1>
        }       
        </div>
    )
};

export default FizzBuzz;