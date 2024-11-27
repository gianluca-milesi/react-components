import style from "./Card.module.css"
import image from "../../assets/random-image.jpg"
import Button from "../Button/Button.jsx"

function Card() {
    return (
        <>
            <div className={style.card}>
                <img className={style.image} src={image} />
                <div className={style.body}>
                    <div className={style.text}>
                        <h2>Titolo del post</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione soluta et ipsa dolores, autem perferendis non eius, ipsum esse nobis minima voluptas! Delectus, expedita?</p>
                    </div>
                    <Button />
                </div>

            </div>
        </>
    )
}

export default Card