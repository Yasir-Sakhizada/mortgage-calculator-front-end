import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterTerm() {
    const [term, setTerm] = useState('');
    const [error, setError] = useState('');

    const handleTerm = (e) => {
        const input = e.target.value;
        if(Number(input) > 100)
            return;

        e.target.setCustomValidity('');
        setError('');
        setTerm(input)
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
                Mortgage Term
            </label>
            <div className={styles.inputContainer}>
                <input 
                    type='number' 
                    style={error ? {border: '1px solid #D73328'} : {}}
                    className={styles.input}
                    value={term}
                    name='mortgageTerm'
                    autoComplete='off'
                    onChange={handleTerm}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    />
                <p style={error ? {backgroundColor: '#D73328', color: 'white'} : {}}>
                    years
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

export default EnterTerm;