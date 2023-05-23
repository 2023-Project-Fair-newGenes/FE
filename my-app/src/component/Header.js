import Logo from '../img/logo.png';
export const Header = ()=>{
    return (
        <div class="ms-5 mt-4 ps-5">
            <div className="logoImg">
                <img src={Logo} style={{width:'50px'}}></img>
            </div>
        </div>
    );
}