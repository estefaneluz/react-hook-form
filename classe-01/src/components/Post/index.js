import './style.css'

export default function Post({title, body, userId}){
    return(
        <div className="card-post">
            <h2>{title}</h2>
            <h4>User ID: {userId}</h4>
            <p>{body}</p>
        </div>
    );
}