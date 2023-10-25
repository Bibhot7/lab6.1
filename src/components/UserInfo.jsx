function UserInfo(props) {
   // console.log("props", props);
  return (
    
    <div className="Comment componentBox">
      <div className="UserInfo">
        {" "}
        {/* the user info is one aspect of the comment */}
        <img
          className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    </div>
  );
}

export default UserInfo;
