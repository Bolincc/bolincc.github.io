const DisplayStats = (stats) => {
    
    return ( 
        <div className="displayStats">
            {stats.map((stat) =>(
                <div className="displayStats" key={stat.id}>
                    <h3>Level: {stat.Level}</h3>
                    <h3>Exp: {stat.Exp}</h3>
                </div>
            ))}
        </div>
     );
}
 
export default DisplayStats;