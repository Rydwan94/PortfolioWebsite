
import '../../../css/SingleHobbyCard.css'

const SingleHobbyCard = ({imgSrc, imgAlt, cardTitle}) => {
    return ( 
        <figure style={{backgroundImage: `url(${imgSrc})`}} className='hobbieCard'>
           
            <figcaption>{cardTitle}</figcaption>
        </figure>
     );
}
 
export default SingleHobbyCard;