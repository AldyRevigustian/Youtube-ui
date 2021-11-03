import React, {useState} from 'react';
import "./Sidebar.css";
import {Explore, ExploreOutlined, History, Home, HomeOutlined, KeyboardArrowDown, Subscriptions, SubscriptionsOutlined, ThumbUp, ThumbUpOutlined, VideoLibrary, 
        VideoLibraryOutlined, WatchLater, WatchLaterOutlined, } from '@mui/icons-material';
import {AiOutlinePlaySquare, AiFillPlaySquare} from 'react-icons/ai';


function SideBar(props){
    const {toggleMenu, setToggleMenu} = props;

    return(
        <div style={{display: 'flex', flex: toggleMenu === true ? 17 : 5.5, flexDirection: 'column', marginTop:8,}}>
            {
            toggleMenu === true ?
            (
                <>
                <SidebarMenu 
                    active ={true}
                    iconActive={<Home size={24}/>}
                    icon={<HomeOutlined size={24}/>}
                    label="Beranda"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<Explore size={24}/>}
                    icon={<ExploreOutlined />}
                    label="Eksplorasi"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<Subscriptions size={24}/>}
                    icon={<SubscriptionsOutlined size={24}/>}
                    label="Subscription"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />

                <div className="garis-batas"></div>

                <SidebarMenu
                    active ={false}
                    iconActive={<VideoLibrary size={24}/>}
                    icon={<VideoLibraryOutlined size={24}/>}
                    label="Koleksi"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<History size={24}/>}
                    icon={<History size={24}/>}
                    label="Histori"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<AiFillPlaySquare size={24}/>}
                    icon={<AiOutlinePlaySquare size={24}/>}
                    label="Video Anda"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<WatchLater size={24}/>}
                    icon={<WatchLaterOutlined size={24}/>}
                    label="Tonton nanti"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<ThumbUp size={24}/>}
                    icon={<ThumbUpOutlined size={24}/>}
                    label="Video yang disukai"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<KeyboardArrowDown size={24}/>}
                    icon={<KeyboardArrowDown size={24}/>}
                    label="Lebih banyak"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                </>
            )

            :
            
            (
                <>
                <SidebarMenu 
                    active ={false}
                    iconActive={<Home size={24}/>}
                    icon={<HomeOutlined size={24}/>}
                    label="Beranda"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<Explore size={24}/>}
                    icon={<ExploreOutlined />}
                    label="Eksplorasi"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<Subscriptions size={24}/>}
                    icon={<SubscriptionsOutlined size={24}/>}
                    label="Subscription"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <SidebarMenu
                    active ={false}
                    iconActive={<VideoLibrary size={24}/>}
                    icon={<VideoLibraryOutlined size={24}/>}
                    label="Koleksi"
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                </>
            )
            }
        </div>
    );
}


function SidebarMenu(props){
    const {icon, label, toggleMenu, setToggleMenu, active, iconActive} = props;

    return(
        <div style={{ display: 'flex', flex: 1, flexDirection: toggleMenu === true ? 'row' : 'column',  alignItems:'center', padding: toggleMenu === true ? '7px 0 7px 24px' : '13px 0 13px 0', backgroundColor: active === true ? '#E5E5E5' : '', cursor:'pointer', }} className="menus">
            <div style={{display: 'flex', flex: 0.5, /* justifyContent: 'center', alignItems: 'center' */ }} >
                {active === true ? iconActive : icon}
            </div>
            
            <div style={{display: 'flex', flex: 3.5, alignItems:'center',}}>
                <span style={{marginLeft: toggleMenu === true ? 24 : 0, marginTop:toggleMenu === true ? 0 : 7, fontSize: toggleMenu === true ? 15: 10, fontWeight:'550' }}>{label}</span>
            </div>
        </div>
    );
}

// export default SideBar;