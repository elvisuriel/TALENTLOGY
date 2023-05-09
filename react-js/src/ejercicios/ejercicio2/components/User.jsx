function User({userInfo}) {
    
  console.log(userInfo)
const {name, age, city}= userInfo
    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{city}</h1>
      </div>
    );
  }
  
  export default User;