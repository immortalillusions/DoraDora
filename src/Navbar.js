

export default function Navbar() {
    const path = window.location.pathname
    let active = false;
    let colour = "black";
    document.body.style.backgroundColor = colour;
    const handleClick=()=>{
        active=!active;
        colour= active ? "green" : "black" 
        document.body.style.backgroundColor = colour;
    };
    return( <nav className="nav">
        <div class="container">
            <button class="child bounce" onClick={handleClick}></button>
        </div>
        <a href="/" className="site-title">DoraDora!</a>
        
        <ul>
            <CustomLink href = "/about">Monkey</CustomLink>
            <CustomLink href = "/songs">Jungle</CustomLink>
            <CustomLink href = "/sell">Items</CustomLink>
            <CustomLink href = "/team">Team</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ href, children, ...props }) { 
    const path = window.location.pathname
    return (
        <li> 
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}
