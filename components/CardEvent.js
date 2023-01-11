const CardEvent = (props) => {
    const { item } = props
    return (
        <div className="sm:max-w-[365px] w-full p-1">
            <img className="w-full" src={item.img} alt="pic" />
            <h4 className="text-teal-500 text-base py-1 uppercase">{item.category}</h4>
            <h4 className="text-white text-base py-1">{item.title}</h4>
            <p className="text-white text-sm">{item.date}</p>
        </div>
    )
}

export default CardEvent