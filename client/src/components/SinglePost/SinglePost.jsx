import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context';
import './SinglePost.css'

const SinglePost = () => {
    const location = useLocation();
    const navigation = useNavigate()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const { user } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`, {
                data: { username: user?.username }
            })
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost();
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${path}`,{
                data:{username:user?.username}
            })
            navigation('/')
        } catch (error) {
            console.log(error);
        }

    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatePost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatePost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }

        }
        try {
            const res = await axios.put(`/posts/${post._id}`, updatePost);
            setUpdateMode(false)
            window.location.replace("/post/" + res.data._id);
        }
        catch (err) {
            console.log(err);
        }

    };
    let finalPhoto;
    if (file) {
        finalPhoto = URL.createObjectURL(file)
    } else if (post.photo) {
        finalPhoto = PF + post.photo
    } else {
        finalPhoto = "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }

    return (
        <div className="singlePost" onLoad={window.scroll(0, 0)}>
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src={finalPhoto}
                    alt=""
                />
                {updateMode ? (
                    <>
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus" style={{ display: 'flex' }}></i>
                        </label>
                        <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                        <input
                            type="text"
                            value={title}
                            className="singlePostTitleInput"
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </>
                ) : (
                    <h1 className="singlePostTitle">
                        {post.title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete} ></i>
                            </div>)
                        }
                    </h1>
                )}
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <Link to={`/?user=${post.username}`} className="link" >
                            <b className="singlePostAuthor">
                                {post.username}
                            </b>
                        </Link>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea
                        className="singlePostDescInput"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className="singlePostDesc">{desc}</p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    )
}

export default SinglePost