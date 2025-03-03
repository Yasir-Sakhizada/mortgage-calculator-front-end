import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function EnterMortgageType() {
    const [type, setType] = useState('');
    const [error, setError] = useState('');

    const handleType = (e) => {
        setError('');
        setType(e.target.value);
    }

    const handleInvalid = () => {
        setError('empty')
    }

    return(
        <fieldset className={styles.container}>
            <h1>
                Mortgage Type
            </h1>
            <div 
                className={styles.radioButton} 
                style={type === 'repayment' ? {backgroundColor: '#D8DB2F26', border: '1px solid #D8DB2F'} : {}}>
                    <label 
                        className={styles.radio}
                        htmlFor='repayment' 
                        style={type === 'repayment' ? {borderColor: 'transparent'} : {}}>
                            <input 
                                type='radio' 
                                id='repayment' 
                                value='repayment'
                                checked={type === 'repayment'}
                                onChange={handleType}
                                required
                                />       
                            {type === 'repayment' && <img src={icons['radio']} /> }            
                    </label>
                    <label htmlFor='repayment' className={styles.radioLabel}>
                        Repayment
                    </label>
            </div>
            <div 
                className={styles.radioButton} 
                style={type === 'interest only' ? {backgroundColor: '#D8DB2F26', border: '1px solid #D8DB2F'} : {}}>
                    <label 
                        className={styles.radio} 
                        htmlFor='interest only' 
                        style={type === 'interest only' ? {borderColor: 'transparent'} : {}}>
                            <input 
                                type='radio' 
                                id='interest only' 
                                value='interest only'
                                checked={type === 'interest only'}
                                onChange={handleType}
                                />       
                            {type === 'interest only' && <img src={icons['radio']} /> }            
                    </label>
                    <label htmlFor='interest only' className={styles.radioLabel}>
                        Interest Only
                    </label>
            </div>
            {error === 'empty' && 
                <div className={styles.errorMessage}>
                    This field is required
                </div>
            }
            <input 
                type='text' 
                className={styles.hiddenInput} 
                value={type} 
                onChange={() => {}} 
                name='mortgageType' 
                onInvalid={handleInvalid} 
                required />
        </fieldset>
    )
}

export default EnterMortgageType;