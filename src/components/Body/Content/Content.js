import React, {useState} from 'react';

function Content(props){
    const {toggleMenu, setToggleMenu} = props;
    const [activeFilter, setActiveFilter] = useState("Semua");

    const arrayFilter = [
        "Semua",
        "Kartun",
        "Acara Memasak",
        "Musik",
        "Video Mix",
        "Live",
        "Sepak bola",
        "Game petualangan aksi",
        "Seni visual",
        "Baru diupload",
        // "Ditonton"
    ];

    return(
        <div style={{display: 'flex', flex: toggleMenu === true ? 83 : 94.5, flexDirection: 'column', backgroundColor: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'row', padding:7, borderBottom:'0.2px solid #E5E5E5', margin:'0 10px 0 10px', borderTop:'0.2px solid #E5E5E5', }}>
            {
                arrayFilter.map(filter => {
                return(
                    <Filter
                    label={filter}
                    active={filter === activeFilter}
                    setActiveFilter={setActiveFilter}
                    activeFilter={activeFilter}
                    />
                )
                })
            }
            </div>

            <div style={{height:'100%', backgroundColor:'#F9F9F9', margin:'0 0 0 10px',}}>
            </div>

        </div>
    );
}

function Filter(props){
    const {label, active, activeFilter, setActiveFilter} = props;

    return(
        <div onClick={()=>setActiveFilter(label)} style={{cursor:'pointer',userSelect:'none', backgroundColor: active === true ? 'black' : '#F2F2F2 ', borderColor: active === true ? 'black' : '#D9D9D9', borderStyle: 'solid', borderWidth: 1, borderRadius: 20, paddingTop: 7, paddingBottom: 7, paddingLeft: 10, paddingRight: 10, margin: '10px 5px 10px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span style={{userSelect:'none',color: active === true ? 'white' : 'black', fontSize:14}}>{label}</span>
        </div>
    );
}

export default Content;