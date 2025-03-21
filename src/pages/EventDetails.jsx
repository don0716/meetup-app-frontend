import { useParams } from "react-router-dom"
import useFetch from "../useFetch"
import Header from "../layout/Header"
import Footer from "../layout/Footer"

const EventDetails = () => {
    const eventId = useParams().eventid

    const {data, loading, error} = useFetch(`https://meetup-app-backend-git-main-donovans-projects-b7659c43.vercel.app/events/eventbyid/${eventId}`)

    console.log(eventId)

    console.log(data)
    return (
        <div className="bg-light"> 
         <Header isDisabled={true}  />
         <div className="container">

            
            { data ? (
                <div className="row px-2 py-5">

                <div className="col-md-8">
                    <h2>{data?.title}</h2>

                    <p className="py-4">Hosted By:<h5>{data?.hostedBy}</h5></p>

                    <div>
                        <img src={data?.thumbnail} className="img-fluid rounded" style={{ objectFit: "cover", width: "70%", maxHeight: "300px" }}  alt="" />
                    </div>

                    <div className="py-4">
                        <h3>Details</h3>
                        <p>{data?.description}</p>

                        <h3>Additional Information:</h3>
                        <p><strong>Dress Code: </strong>{data?.dressCode}</p>
                        <p><strong>Age Restrictions: </strong>{data?.isAgeRestricted ? "18 and Above" : "No Age Restrictions" }</p>

                        <h3>Event Tags: </h3>
                        {data?.eventTags.map(tag => (
                            <button className="btn btn-danger mx-2 my-2" >{tag}</button>
                        ) )}
                    </div>
                    


                </div>
                
                <div className="col-md-4">
                    <div className="card border-0">
                        <div className="card-body">
                        <p className="card-text">&#x1F550;&#xFE0E;  <span className="p-0 ps-3">{data?.sessionTimings}</span></p>
                        
                        <p className="card-text">
                             <span className="align-items-center">&#x1F50E;&#xFE0E;</span> 
                             <span><span className="p-0 ps-3">{data?.venue}</span>
                             <p className="p-0 ps-2">   <span className="p-0 ps-4">{data?.address}</span></p></span>
                        </p>
                        
                        

                        <p className="card-text"> ₹  <span className="p-0 ps-3">{data?.pricing === 0 ? "Free Event" :  `${data?.pricing}` }</span></p>
                        </div>
                    </div>

                    <div className="py-5">
                        <h3>Speakers: ({data?.speakers.length}) </h3>

                        <div className="row">
                            {data?.speakers.map(speaker => (
                                <div className="col-md-6 py-2 px-2 ">
                                <div className="card text-center h-100 w-80 shadow-lg border-0">
                                   <img src="https://placehold.co/150x150" className="img-fluid rounded-circle mx-auto py-2 px-2 mx-2" style={{ width: "180px", height: "180px", objectFit: "cover" }}  />
                                    <div className="card-body">
                                    <p className="card-text"><strong>{speaker.name}</strong></p>
                                    <p className="card-text">{speaker.role}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <button className="btn btn-danger my-4 btn-lg px-5">RSVP</button>
                        </div>


                    </div>




                </div>

            </div>
            ) : <p>Loading...</p> }


            

         </div>
         <Footer />
        </div>
    )
}

export default EventDetails 