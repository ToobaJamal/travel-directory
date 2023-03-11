export default function Navbar() {

    return (
      <>
        <nav className="flex w-screen border-2">
            <div className="sm:hidden">
                menu
            </div>
            <div className="sm:hidden">
                search
            </div>
            <div className="bg-red-500">Travel Directory</div>
            <div className="hidden sm:flex">
                <a href="#">Review</a>
                <a href="#">Trips</a>
                <a href="#">Alert</a>
                <a href="#">Signin</a>
            </div>
        </nav>
      </>
    )
  }
