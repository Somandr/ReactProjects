import React from 'react';
import classes from './AnswerItem.module.scss';

const AnswerItem = props => {
    let cls = [classes.AnswerItem];
    if (props.state) {
        console.log(cls);
        console.log([props.state]);
        cls.push(classes[props.state]);
        console.log(cls);
    }
    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    );
};

export default AnswerItem;
