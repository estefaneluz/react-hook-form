import './style.css'

export default function Post({content}){
    return(
        <div className="card-post">
            <h2>{content.title}</h2>
            <h4>User ID: {content.userId} | Post ID: {content.id}</h4>
            <p>{content.body}</p>
        </div>
    );
}