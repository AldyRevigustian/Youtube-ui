import React, {useState} from 'react';
import "./Sidebar.css";
import {Explore, ExploreOutlined, History, Home, HomeOutlined, KeyboardArrowDown, Subscriptions, SubscriptionsOutlined, ThumbUp, ThumbUpOutlined, VideoLibrary, 
        VideoLibraryOutlined, WatchLater, WatchLaterOutlined, } from '@mui/icons-material';
import {AiOutlinePlaySquare, AiFillPlaySquare} from 'react-icons/ai';


function SideBar(props){
    const {toggleMenu, setToggleMenu} = props;
    const [activeMenu, setActiveMenu] = useState("Beranda");

    const sideMenuAtas = [
        {
            label : "Beranda",
            icon : <HomeOutlined size={24}/>,
            iconActive : <Home size={24}/>,
        },
        {
            label : "Eksplorasi",
            icon : <ExploreOutlined size={24}/>,
            iconActive : <Explore size={24}/>,
        },
        {
            label: "Subscription",
            icon :<SubscriptionsOutlined size={24}/>,
            iconActive :<Subscriptions size={24}/>,
        },
    ];

    const sideMenuBawah = [
        {
            label :"Koleksi",
            icon : <VideoLibraryOutlined size={24}/>,
            iconActive : <VideoLibrary size={24}/>,
        },
        {
            label : "Histori",
            icon : <History size={24}/>,
            iconActive : <History size={24}/>,
        },
        {
            label : "Video Anda",
            icon : <AiOutlinePlaySquare size={24}/>,
            iconActive : <AiFillPlaySquare size={24}/>,
        },      
        {
            label : "Tonton nanti",
            icon : <WatchLaterOutlined size={24}/>,
            iconActive : <WatchLater size={24}/>,
        },
        {
            label : "Video yang disukai",
            icon : <ThumbUpOutlined size={24}/>,
            iconActive : <ThumbUp size={24}/>,
        },
        {
            label : "Lebih banyak",
            iconActive : <KeyboardArrowDown size={24}/>,
            icon : <KeyboardArrowDown size={24}/>,
        },
    ];

    const sideMenuMini = [
        {
            label : "Beranda",
            icon : <HomeOutlined size={24}/>,
            iconActive : <Home size={24}/>,
        },
        {
            label : "Eksplorasi",
            icon : <ExploreOutlined size={24}/>,
            iconActive : <Explore size={24}/>,
        },
        {
            label: "Subscription",
            icon :<SubscriptionsOutlined size={24}/>,
            iconActive :<Subscriptions size={24}/>,
        },
        {
            label :"Koleksi",
            icon : <VideoLibraryOutlined size={24}/>,
            iconActive : <VideoLibrary size={24}/>,
        },
    ];

    return(
        <div style={{display: 'flex', flex: toggleMenu === true ? 17 : 5.5, flexDirection: 'column', marginTop:8}}>
            {
            toggleMenu === true ?
            (
                <>
                    {sideMenuAtas.map(({ label, icon, iconActive }) => (
                        <SidebarMenu 
                            active={label === activeMenu}
                            setActiveMenu={setActiveMenu}
                            activeMenu={activeMenu}
                            key={label}
                            iconActive={iconActive}
                            icon={icon}
                            label={label}
                            toggleMenu={toggleMenu}
                            setToggleMenu={setToggleMenu}
                        />
                        
                    ))}

                    <div className="garis-batas"></div>

                    {sideMenuBawah.map(({ label, icon, iconActive }) => (
                        <SidebarMenu 
                            active={label === activeMenu}
                            setActiveMenu={setActiveMenu}
                            activeMenu={activeMenu}
                            key={label}
                            iconActive={iconActive}
                            icon={icon}
                            label={label}
                            toggleMenu={toggleMenu}
                            setToggleMenu={setToggleMenu}
                        />
                        
                    ))}
                </>
            )

            :
            
            (
                <>
                    {sideMenuMini.map(({ label, icon, iconActive }) => (
                        <SidebarMenu 
                            active={label === activeMenu}
                            setActiveMenu={setActiveMenu}
                            activeMenu={activeMenu}
                            key={label}
                            iconActive={iconActive}
                            icon={icon}
                            label={label}
                            toggleMenu={toggleMenu}
                            setToggleMenu={setToggleMenu}
                        />
                        
                    ))}
                </>
            )
            }
        </div>
    );
}


function SidebarMenu(props){
    const {icon, label, toggleMenu, setToggleMenu, active, iconActive, activeMenu, setActiveMenu} = props;

    return(
        <div onClick={()=>setActiveMenu(label)} style={{ display: 'flex', flex: 1, flexDirection: toggleMenu === true ? 'row' : 'column',  alignItems:'center', padding: toggleMenu === true ? '7px 0 7px 24px' : '13px 0 13px 0', backgroundColor: active === true && toggleMenu === true ? '#E5E5E5' : '', cursor:'pointer', }} className="menus">
            <div style={{display: 'flex', flex: 0.5, /* justifyContent: 'center', alignItems: 'center' */ }} >
                {active === true ? iconActive : icon}
            </div>
            
            <div style={{display: 'flex', flex: 3.5, alignItems:'center',}}>
                <span style={{userSelect:'none',marginLeft: toggleMenu === true ? 24 : 0, marginTop:toggleMenu === true ? 0 : 7, fontSize: toggleMenu === true ? 15: 10, fontWeight: active === true ? '460' : '300' }}>{label}</span>
            </div>
        </div>
    );
}

export default SideBar;