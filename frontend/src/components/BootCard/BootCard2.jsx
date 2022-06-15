





const BootCard2 = (props) => {
    const {word} = props
    




    return ( 
        <div className="card text-white bg-dark mb-3" style={{width: 50 + 'rem'}}>
            <div className="card-body">
            <h5 className="card-title">{word.name}</h5> 
            <p className="card-text">{word.definition}</p>
            </div>
        </div>
     );
}
 
export default BootCard2;