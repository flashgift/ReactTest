import React, { useState, useRef, useEffect } from 'react';
import styles from './JizonStyleList.module.css';







const JizonStyleList = (props) => {
    const [isTreeExpand, setIsTreeExpand] = useState(true);
    const ref4ChildHeight = useRef();

    const animationDone = (e) => {
        if (e.target === ref4ChildHeight.current) {
            if (isTreeExpand) {
                ref4ChildHeight.current.style.height = 'auto';
            }
        }
    };

    const onListClick = () => {
        if (ref4ChildHeight.current !== undefined) {
            let resultheight = 0;
            for (let item of ref4ChildHeight.current.children) {
                resultheight += item.scrollHeight;
            }
            if (isTreeExpand) {
                setIsTreeExpand(false);
                setTimeout(() => { ref4ChildHeight.current.style.height = "0px"; }, 10);
                ref4ChildHeight.current.style.height = resultheight + "px";
            } else {
                setIsTreeExpand(true);
                setTimeout(() => { ref4ChildHeight.current.style.height = resultheight + "px"; }, 10);
                ref4ChildHeight.current.style.height = "0px";
            }
        }
    };


    return (
        <ul className={styles.listStyle}>
            <span>
                <span className={styles.treeExpandIcon + " " + (isTreeExpand ? styles.treeExpandIconOn : styles.treeExpandIconOff)} onClick={onListClick}></span>
                <span className={styles.ItemLegendIcon}></span>
                <span className={styles.elementName}>
                    {props.name}
                </span>
            </span>
            <ul className="itemList" onTransitionEnd={animationDone} ref={ref4ChildHeight}>
                {props.children}
            </ul>
        </ul>
    );
}
export default JizonStyleList;