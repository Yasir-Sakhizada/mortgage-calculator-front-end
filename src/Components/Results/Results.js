import React, {useState, useEffect, useRef} from 'react';
import DisplayResults from './DisplayResults';
import images from './images';
import {useSelector} from 'react-redux';
import * as styles from './styles.module.css';

function Results() {
    const userInput = useSelector(state => state);
    const [results, setResults] = useState('');
    const [interest, setInterest] = useState('')
    const type = userInput.mortgageType;

    const getTotal = (interest, mortgage) => {
        const mort = Number(mortgage.replaceAll(',', ''));
        const results = mort + interest;
        return formatNumber(results);
    }

    const formatNumber = (number) => {
        return number.toLocaleString('en-US', {
            useGrouping: true,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    }

    useEffect(() => {
        if(!userInput.mortgage) 
            return;
        const mortgage = Number(userInput.mortgage.replaceAll(',', ''));
        const term = Number(userInput.mortgageTerm) * 12;
        const interestRate = (Number(userInput.interestRate)/100)/12;
        const monthlyPayments = (mortgage * interestRate * (1 + interestRate)**term)/(((1 + interestRate)**term) - 1);
        const interestTotal = (monthlyPayments * term) - mortgage;
        setInterest(interestTotal);
        setResults(monthlyPayments); 
    }, [userInput])

    return(
        <section className={styles.container}>
            {
                results ? 
                <div className={styles.results}>
                    <div className={styles.results_title}>
                        <h1>
                            Your Results
                        </h1>
                        <p>
                            Your results are shown below based on the information you provided. 
                            To adjust the results, edit the form and click “calculate repayments” again.
                        </p>
                    </div>
                    <div className={styles.results_box}>
                        <div>
                            <h2>
                                {type === 'repayment' ? 'Your monthly repayments' : 'Total Interest'}
                            </h2>
                            <DisplayResults results={type === 'repayment' ? `£${formatNumber(results)}` : `£${formatNumber(interest)}`}/>
                        </div>
                        <div className={styles.separator}></div>
                        <div>
                            <h2>
                                Total you'll repay over the term
                            </h2>
                            <strong className={styles.results_total}>
                                £{getTotal(interest, userInput.mortgage)}
                            </strong>
                        </div>
                    </div>
                </div> : 
                <div className={styles.empty}>
                    <img src={images['empty']}/>
                    <h1>
                        Results shown here
                    </h1>
                    <p>
                        Complete the form and click “calculate repayments” 
                        to see what your monthly repayments would be.
                    </p>                
                </div>
            }

        </section>
    )
}

export default Results;