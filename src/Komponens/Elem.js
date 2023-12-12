export default function Elem(props){

    function kattintas(){
        props.kattintas(props.index);
    }

    return(
        <div className="elem" onClick={kattintas}>
            <p>{props.ertek}</p>
        </div>
    )
}