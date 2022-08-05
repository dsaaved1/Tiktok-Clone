import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import "./Footer.css";


function Footer() {
  return (
    <div className="footer">

        
        
        <div className="footer_center">
            <div className="header_option header_option--active">
                <HomeIcon fontSize="large" />
            </div>
            <div className="header_option">
                <BarChartIcon fontSize="large" />
            </div>
            <div className="header_option">
                <AddIcon fontSize="large" />
            </div>
            <div className="header_option">
                <PodcastsIcon fontSize="large" />
            </div>
            <div className="header_option">
                <PersonIcon fontSize="large" />
            </div>
        </div>

        
    </div>
  )
}

export default Footer