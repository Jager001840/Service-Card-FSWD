import '../App.css';

function ServiceCard({name,review}){
    return(
        <>
        <div id="card">
            <div id='review'>
            <h1>
                {review}
            </h1>
            </div>
            <div id='name'>
            <h1>
                ~ {name}
            </h1>
            </div>
            
        </div>
        </>
    )

}
export default ServiceCard