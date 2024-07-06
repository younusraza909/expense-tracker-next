import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <h2>Expense Tracker</h2>

                <SignedOut>
                    <SignInButton></SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton></UserButton>
                </SignedIn>
            </div>

        </nav>
    )
}

export default Header
