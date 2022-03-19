import React, { useState, useRef, useEffect } from 'react';
import styles from './JizonStyleList.module.css';







const JizonStyleList = (props) => {
    const [isTreeExpand, setIsTreeExpand] = useState(true);
    const ref4ChildHeight = useRef();

    const animationDone = () => {
        console.log("sadfasd");
        if (isTreeExpand) {
            ref4ChildHeight.current.style.height = 'auto';
        } else {
            ref4ChildHeight.current.style.height = '0px';
        }
    };

    const setListStyle = () => {
        if (ref4ChildHeight.current !== undefined) {
            let resultheight = 0;
            for (let item of ref4ChildHeight.current.children) {
                resultheight += item.scrollHeight;
            }

            if (isTreeExpand) {
                setTimeout(() => { ref4ChildHeight.current.style.height = resultheight + "px"; }, 5);
                ref4ChildHeight.current.style.height = "0px";
            } else {
                setTimeout(() => { ref4ChildHeight.current.style.height = "0px"; }, 5);
                ref4ChildHeight.current.style.height = resultheight + "px";
            }
        }
    };

    useEffect(() => {
        setListStyle();
    });

    return (
        <ul className={styles.listStyle}>
            <span>
                <span className={styles.treeExpandIcon} onClick={() => setIsTreeExpand(!isTreeExpand)}></span>
                <span className={styles.ItemLegendIcon}></span>
                <span className={styles.elementName}>
                    {props.name}
                </span>
            </span>
            <ul ref={ref4ChildHeight} onTransitionEnd={animationDone}>
                {props.children}
            </ul>
        </ul>
    );
}
export default JizonStyleList;