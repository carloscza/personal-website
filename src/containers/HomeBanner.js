import cczalogo from "../media/cczalogo1.png";

function HomeBanner()
{
    return(
        <div className="home-banner">
            <img src={cczalogo} className="nav-logo"/>
        </div>
    );
}

export default HomeBanner;