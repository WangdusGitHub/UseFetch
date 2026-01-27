import "./card.css"

function Card({item}) {
// console.log({item});

    const id = item.id;
    const title = item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title;
    const description = item.description.length > 40 ? item.description.slice(0,40) + "..." : item.description;
    const price = item.price;
    const images = item.images;

    // console.log({item})
    return (
        <>
            <div id={id} className="card">
                <img src={images[0]} alt="img" />
                <h3 className="title">{title}</h3>
                <p className="price">{price}</p>
                <p className="description">{description}</p>
            </div>
        </>
    )
}

export default Card