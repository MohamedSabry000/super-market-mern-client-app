import './mainsection.css';
import './MainSection.js';
function MainSection(){
    return (
        <>
            <section className="main-section">
                <div className="container">
                    <div className="intro">
                        <h1 className="title">This is heading</h1>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        <button className="btn btn-product">buy now</button>
                    </div>
                </div>
            </section>        
        </>
    )
}

export default MainSection