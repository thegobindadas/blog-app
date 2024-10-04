import { useNavigate } from 'react-router-dom';
import { LogoIcon, CancelIcon, NavItem, Button } from "../index"
import LogoutBtn from './LogoutBtn';



function Header() {

  const authStatus = false
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/register",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
        <nav className="mx-auto flex max-w-7xl items-center py-2">
          <div className="mr-4 w-12 shrink-0 sm:w-16">
            <LogoIcon /> {/* Logo-icon */}
          </div>
          <button className="group peer ml-auto flex w-6 shrink-0 flex-wrap gap-y-1.5 md:hidden">
            <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
            <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
            <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
          </button>
          <div
            className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col justify-between border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 md:static md:ml-4 md:max-w-full md:shrink md:translate-x-0 md:flex-row md:border-none">
            <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 md:hidden">
              <span className="inline-block w-12">
                <LogoIcon /> {/* Logo-icon: hidden */}
              </span>
              <button className="inline-block w-8">
                <CancelIcon /> {/* cancel-icon: hidden */}
              </button>
            </div>
            <ul className="my-4 flex w-full flex-wrap gap-2 px-4 md:my-0 md:w-auto md:px-0">
              {navItems.map((item) => 
                item.active ? (
                  <li 
                  className="w-full md:w-auto"
                  key={item.name}
                  >
                    <NavItem
                    onClick={() => navigate(item.slug)}
                    >{item.name}</NavItem>
                  </li>
                ) : null
              )}
            </ul>
            
            <div className="mb-8 mt-auto flex flex-wrap gap-4 px-4 md:mb-0 md:mt-0 md:items-center md:px-0">
              {
                authStatus ? (
                  <LogoutBtn />
                ) : (
                  <>
                    <button 
                    className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] md:w-auto md:bg-transparent"
                    onClick={() => navigate("/login")}
                    > Log in </button>
                    <Button 
                    className="mr-1 px-3 py-2 md:w-auto"
                    onClick={() => navigate("/register")}
                    > Sign up </Button>
                  </>
                )
              }
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Header
