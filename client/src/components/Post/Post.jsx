import "./Post.css";
import { Link } from 'react-router-dom'
const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post" onLoad={window.scroll(0, 0)}>
            {post.photo ? (
                <Link to={`/post/${post._id}`} className="link" >
                    <img className="postImg" src={PF + post.photo} alt="" />
                </Link>
            ) :
                (
                    <Link to={`/post/${post._id}`} className="link" >
                        <img
                            className="singlePostImg"
                            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </Link>
                )
            }
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat" key={c} >{c}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link" >
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    );
};

export default Post;
