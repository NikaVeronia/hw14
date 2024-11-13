// BtnLeftRight.tsx
import React from 'react';
import style from './BtnLeftRight.module.css';

interface BtnLeftRightProps {
    onNext: () => void;
    onPrev: () => void;
}

const BtnLeftRight: React.FC<BtnLeftRightProps> = ({ onNext, onPrev }) => {
    return (
        <div className={style.BtnLeftRight}>
            <div className={style.LR}>
                <button className={style.BtnLeft} onClick={onPrev}></button>
                <button className={style.BtnRight} onClick={onNext}></button>
            </div>
            <button className={style.Btn}>View All Services</button>
        </div>
    );
};

export default BtnLeftRight;
