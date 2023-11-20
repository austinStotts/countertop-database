import Quartz from "./cells/quartz";
import data from "../data";

export default ({name}) => {
    let make = name.split("");
    make[0] = make[0].toUpperCase();
    make.join("");
    return (
        <div className="header-make" onClick={(e) => { e.target.children[0].hidden = !e.target.children[0].hidden }}>
            {make}
            <div className="make-colors-wrapper" hidden >
                {data[name].colors.map(({color, img}) => {
                    return <Quartz name={color} make={name} url={img}/>
                })}
            </div>
        </div>
    )
}