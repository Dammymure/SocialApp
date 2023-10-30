import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, userPicturePath }) =>{

 const dispatch = useDispatch()
 const navigate = useNavigate()
 const { _id } = useSelector((state) => state.user)
 const token = useSelector((state) => state.token)
 const friends = useSelector((state) => state.friends)

 
}

export default Friend