import Elem from "./Elem"
export default function Jatekter(props){
    function kattintas(index) {
        props.kattintas(index);
    }
    return (
        <div className="jatekter">
            {props.lista.map((elem,index)=>{
                return<Elem ertek ={elem} index ={index} key={index} kattintas={kattintas}/>
            })}
        </div>
    )
}