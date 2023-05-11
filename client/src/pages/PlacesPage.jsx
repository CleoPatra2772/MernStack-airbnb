import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../components/Perks";

const PlacesPage = () => {
    const {action} = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink ] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);

    const inputHeader =(text) => {
        return(
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    const inputDescription = (text) => {
        return(
            <p className="text-gray-500 text-sm">{text}</p>
        )
    }

    const preInput = (header, description) =>{
        return(
            <div>
                {inputHeader(header)}
                {inputDescription(description)}

            </div>
        )
    }



    
    return(
        <div>
        {action !== 'new' && (
            <div className="text-center">
                <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full'
                to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            Add new place</Link>

           </div>
        )}

        {action === 'new' && (
            <div>
            <form>
            {preInput('Title', 'Title for your place. Should be short and catchy')}
            <input type='text' placeholder='title, for example : My modern apartment'/>
            {preInput('Address', 'Address to your place')}
            <input type='text' placeholder="address" />
            {preInput('Photos', 'Photos of the the place')}
            
                <div className="flex gap-2">
                    <input type='text' placeholder={'Add using a link ...jpg'} />
                    <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;Photo</button>
                </div>
            <div className="mt-2 grid grid-cols-3 mg:grid-cols-4 lg:grid-cols-6">
            <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
          
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
            </svg>
            Upload 

            </button>
            </div>
            {preInput('Description', 'Description of the place')}
            <textarea />

            {preInput('Perks', 'Select all the perks of your place')}

            <div className="grid gap-2 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <Perks 
                    selected={Perks}
                    onChange={setPerks}
                />
            </div>
            {preInput('Extra info', 'The more the better')}
        
            <textarea />
            {preInput('Check in/out times, max guests', 'For user to add in and out times, remember to have some time window for cleaning between guests')}
            
            <div className="grid gap-2 sm:grid-cols-3">
                <div>
                <h3 className=" mt-2 -mb-1">Check in time</h3>
                    <input type='text' placeholder="14:00"/>
                </div>
                <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                    <input type='text' />
                </div>
                <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                    <input type='text' />
                </div>
            </div>
            
                <button className="primary my-4">Save</button>
          

            </form>
            </div>
        )}
           
        </div>
    )
}

export default PlacesPage;
