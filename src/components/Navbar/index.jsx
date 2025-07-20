import logo from '../../assets/note_logo.jpeg'

export const Navbar = () => {
    return(
        <header className='flex px-3 py-1 gap-3 border-b-2 border-gray-200'>
            <div className='w-12 h-12'>
                <img className='w-full h-full' src={logo} alt='logo' />
            </div>
            <h1 className='text-indigo-800  text-4xl font-bold '>Note It</h1>
        </header>
    )
}