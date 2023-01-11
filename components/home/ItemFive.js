const ItemFive = (props) => {
    const {item} = props
  
    return (
        <div className="max-w-[250] flex flex-col justify-center items-center gap-4">
            <img className="w-12 h-12" src={item.icon} alt="pic" />
            <p className="text-white">{item.title}</p>
            <p className="text-white text-center max-w-[216px]">{item.desc}</p>
            
        </div>
    )
}
export default ItemFive