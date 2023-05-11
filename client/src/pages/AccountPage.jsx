import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";


const AccountPage = () => {
    const [redirect, setRedirect] = useState(null);
    const {user, ready, setUser} = useContext(UserContext);

    let {subpage} =  useParams();
    if(subpage === undefined){
        subpage = 'profile';
    }

    const Logout = async() => {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if(!ready){
        return 'Loading...';
    }


    if(!user && ready && !redirect){
        return <Navigate to={'/login'} />
    }

  

    const linkClasses = (type=null) => {
        let classes = 'py-2 px-6 text-black';
        if(type === subpage ){
            classes += 'bg-red-500 text-white rounded-full';
        }
        return classes;
    }

    if(redirect){
        return <Navigate to={redirect} />
    }


    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
            <Link className ={linkClasses('profile')} to={'/account'}>My Profile</Link>
                <Link className ={linkClasses('booking')}  to={'/account/bookings'}>My bookings</Link>
                <Link className ={linkClasses('places')} to={'/account/places'}>My Accomodations</Link>
                
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email}) <br />
                    <button onClick={Logout} className="primary max-w-sm mt-2">Log Out</button>
                </div>
            )}
        </div>
    )
    
}
export default AccountPage;

