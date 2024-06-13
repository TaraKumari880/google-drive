import React, { useState } from 'react'
import "./css/sidebar.css"
import HomeIcon from "@mui/icons-material/Home";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import DevicesIcon from "@mui/icons-material/Devices";
import GroupIcon from "@mui/icons-material/Group";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { Modal } from '@mui/base';

function Sidebar(){
    // const [open,setOpen]=useState(true);
    // const handleClose=()=>{
    //     setOpen(false);
    // }

    const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file,setFile]=useState(null)
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange=(e)=>{
    if(e.target.files[0]){
      setFile(e.target.files[0])

    }
    
  }
  const handleUpload=(event)=>{
    event.preventDefault();
    setUploading(true);

    // storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
    //   console.log(snapshot)
    //})

  }
    return(
        <>
        <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHeading">
              <h3>Select file you want to upload</h3>
            </div>
            <div className="modalBody">
              {uploading ? (
                <p className="uploading">Uploading</p>
              ) : (
                <>
                  <input type="file" onChange={handleChange}/>
                  <input type="submit" className="post_submit" onClick={handleUpload}/>
                </>
              )}
            </div>
          </form>
        </div>

        </Modal>
        <div className="sidebar">
        <div className="sidebar_btn">
          <button>
            <img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"
              alt=""
            />

            <span>New</span>
          </button>
        </div>
        <div className="sidebar_options">
          <div className=" sidebar_option sidebar_option-Active">
            <HomeIcon />
            <span>
              <b>Home</b>
            </span>
          </div>
          <div className="sidebar_option">
            <AddToDriveIcon />
            <span>My Drive</span>
          </div>

          <div className="sidebar_option">
            <DevicesIcon />
            <span>Computers</span>
          </div>
          <div className="sidebar_option">
            <GroupIcon />
            <span>Shared with me</span>
          </div>
          <div className="sidebar_option">
            <ScheduleIcon />
            <span>Recent</span>
          </div>
          <div className="sidebar_option">
            <StarBorderIcon />
            <span>Starred</span>
          </div>
          <div className="sidebar_option">
            <AssignmentLateIcon />
            <span>Spam</span>
          </div>

          <div className="sidebar_option">
            <DeleteIcon />
            <span>Bin</span>
          </div>
        </div>
        <hr />
        <div className="sidebar_options">
          <div className="sidebar_option">
            <CloudQueueIcon />

            <span>Storage</span>
          </div>

          <div className="progress_bar">
            <progress size="tiny" value="50" max="100" />
            <span>6.45 GB of 15 GB used</span>{" "}
          </div>
        </div>
      </div>
      </>
    )
}
export default Sidebar