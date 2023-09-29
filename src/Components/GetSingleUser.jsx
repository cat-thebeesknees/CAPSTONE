//SingleUserCard.jsx
import { Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types';

function GetSingleUser({ userId }) {
  if (!userId) {
    return null;
  }
  return (
    <div className="returnUserDetails">
      <div className="user-card">
      <h1>User Details</h1>
      <p>Email: {userId.email}</p>
      <p>Username: {userId.username}</p>
      <p>Password: {userId.password}</p>
      <p>Name: {userId.name.firstname} {userId.name.lastname}</p>
      <p>Address: </p>
      <p>{userId.address.number} {userId.address.street}</p>
      <p>{userId.address.city}</p>
      <p>{userId.address.zipcode}</p>
      <p>Geolocation: </p>
      <p>Lat - {userId.address.geolocation.lat} Long -  {userId.address.geolocation.long}</p>
      <p>Phone: {userId.phone}</p>
      </div>
    <Routes>
      <Route path="get-single-user/*" element={<GetSingleUser />} />
    </Routes>

    </div>
  )
}
GetSingleUser.propTypes = {
  userId: PropTypes.shape({
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    phone: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.any.isRequired,
    geolocation: PropTypes.any.isRequired,
}),
};
export default GetSingleUser;