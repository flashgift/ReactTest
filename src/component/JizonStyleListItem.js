import React from 'react';
import styles from './JizonStyleList.module.css';

function JizonStyleListItem(props) {
    let childNum = React.Children.count(props.children);
    return (
        <li >
            {childNum !== 0 &&
                props.children
            }
            {childNum === 0 &&
                <span>
                    <span className={styles.ItemLegendIcon}></span>
                    <span className={styles.elementName}>
                        {props.name}
                    </span>
                </span>
            }
        </li>
    );
}

export default JizonStyleListItem;