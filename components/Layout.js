import NavBar from './NavBar'
import Footer from './Footer'
const Layout = ({children}) => {
    return(
        <div className="bg-black">
            <NavBar />
                <main className='h-screen'>
                 { children }    
                </main>
            <Footer />
        </div>
    )
}
export default Layout