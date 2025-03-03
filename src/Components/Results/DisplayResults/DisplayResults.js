import React, {useState, useRef} from 'react';
import * as styles from './styles.module.css'

function DisplayResults({results}) {
    const [display, setDisplay] = useState(false);
    const resultsRef = useRef();

    const handleDisplay = () => {
        if(!isOverflowing()) 
            return;
        setDisplay(true);
    }

    const handleHide = () => {
        setDisplay(false);
    }

    const isOverflowing = () => {
        return resultsRef.current.scrollWidth > resultsRef.current.clientWidth;
    }

    return(
            <div className={styles.results_payments} onMouseEnter={handleDisplay} onMouseLeave={handleHide} ref={resultsRef}>
                {results}
                {display && <div className={styles.popup}>
                    {results}
                </div>}
            </div>
    )
}

export default DisplayResults;