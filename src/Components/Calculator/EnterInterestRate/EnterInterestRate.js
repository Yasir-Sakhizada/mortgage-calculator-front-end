import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterInterestRate() {
    const [rate, setRate] = useState('');
    const [error, setError] = useState('');

    const handleRate = (e) => {
        const input = e.target.value;
        if(Number(input) > 100)
            return;

        e.target.setCustomValidity('');
        setError('');
        setRate(input);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError('empty');
    }

    return(
        <fieldset className={styles.container}>
            <label>
                Interest Rate
            </label>
            <div className={styles.inputContainer}>
                <input 
                    type='number' 
                    style={error ? {border: '1px solid #D73328'} : {}}
                    className={styles.input}
                    name='interestRate'
                    autoComplete='off'
                    value={rate}
                    onChange={handleRate}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    />
                <p style={error ? {backgroundColor: '#D73328', color: 'white'} : {}}>
                    %
                </p>
                {error === 'empty' && 
                    <div className={styles.errorMessage}>
                        This field is required
                    </div>
                }
            </div>
        </fieldset>
    )
}

export default EnterInterestRate;