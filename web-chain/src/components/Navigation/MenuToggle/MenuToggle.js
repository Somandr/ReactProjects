import React from 'react';
import classes from './MenuToggle.module.scss';

const MenuToggle = props => {
    const cls = [classes.MenuToggle];
    return (
        <div>
            <i className={cls.join(' ')} onClick={props.onToggle} />
        </div>
    );
};

export default MenuToggle;
