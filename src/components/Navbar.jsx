import { FiAlignJustify, FiSearch } from 'react-icons/fi'
export default function Navbar() {

    return (
      <>
        <nav className="flex w-screen border-2 justify-between items-center px-5 py-3">
            <div className="sm:hidden">
                <FiAlignJustify className="text-2xl"/>
            </div>
            <div className="bg-red-500">Travel Directory</div>
            <div className="sm:hidden">
                <FiSearch className="text-2xl"/>
            </div>
            <div className="hidden sm:flex w-1/3 justify-between items-center text-lg font-semibold">
                <a href="#">Review</a>
                <a href="#">Trips</a>
                <a href="#">Alert</a>
                <a href="#">Signin</a>
            </div>
        </nav>
      </>
    )
  }
