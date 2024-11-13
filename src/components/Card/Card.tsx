import { FC } from "react";
import style from "./Card.module.css";

type Props = {
    title: string;
    img: string;
};

const Card: FC<Props> = ({ title, img }) => {
    return (
        <div className={style.card}>
            <img src={img} alt={title} className={style.cardImage} onError={(e) => e.currentTarget.src = '/images/placeholder.jpg'} />
            <h2>{title}</h2>
        </div>
    );
};

export default Card;
