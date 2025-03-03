import React, {useState} from 'react';
import * as styles from './styles.module.css';

function EnterMortgage() {
    const [mortgage, setMortgage] = useState('');
    const [error, setError] = useState('');

    const handleMortgage = (e) => {
        let input = e.target.value;
        input = input.replaceAll(',', '');

        if(input.match(/\D/) || Number(input) >= 10000001)
            return;

        e.target.setCustomValidity('');
        setError('');
        setMortgage(Number(input).toLocaleString());
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError('empty')
    }

    return(
        <fieldset className={styles.container}>
            <label>
                Mortgage Amount
            </label>
            <div className={styles.inputContainer}>
                <input 
                    type='text' 
                    style={error ? {border: '1px solid #D73328'} : {}}
                    className={styles.input} 
                    autoComplete='off'
                    value={mortgage} 
                    onBlur={handleBlur}                    
                    onChange={handleMortgage}
                    onInvalid={handleInvalid}
                    name='mortgage'
                    required
                    />                
                <div className={styles.inputIcon} style={error ? {backgroundColor: '#D73328'} : {}}>
                    <div style={error ? {backgroundColor: 'white'} : {}}></div>
                </div>
                {error === 'empty' && 
                    <div className={styles.errorMessage}>
                        This field is required
                    </div>
                }
            </div>
        </fieldset>
    )
}

export default EnterMortgage;