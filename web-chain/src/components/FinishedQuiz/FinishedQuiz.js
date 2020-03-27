import React from 'react';
import classes from './FinishedQuiz.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button/Button';

const closeIcon = <FontAwesomeIcon icon={faTimes} />;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0);
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    let icons = [];

                    if (props.results[quizItem.id] === 'error') {
                        icons.push(closeIcon);
                    } else {
                        icons.push(checkIcon);
                    }

                    console.log(props.onRetry);

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>
                            {quizItem.question}
                            {icons}
                        </li>
                    );
                })}
                {/* <li>
                    <strong>1. </strong>
                    How are you?
                    <i className={classes.error}>{closeIcon}</i>
                </li>
                <li>
                    <strong>2. </strong>
                    How are you?
                    <i className={classes.success}>{checkIcon}</i>
                </li> */}
            </ul>
            <p>
                Right answers {successCount} of {props.quiz.length}
            </p>
            <div>
                <Button onCxlick={props.onRetry} type="primary">
                    Retry
                </Button>
                <Link to='/'>
                    <Button type="success">Go Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default FinishedQuiz;
