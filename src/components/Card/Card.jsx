import image from "../../assets/random-image.jpg"
import style from "./Card.module.css"

function Card() {
    return (
        <>
            <div className={style.card}>
                <img src={image} />
                <div className={style.body}>
                    <h3 className="card-title">Titolo del post</h3>
                    <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione soluta et ipsa dolores, autem perferendis non eius, ipsum esse nobis minima voluptas! Delectus, expedita?</p>
                    <button>Componente Bottone</button>
                </div>
            </div>
        </>
    )
}

export default Card