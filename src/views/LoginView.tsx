import { Link } from "react-router"

const LoginView = () => {
  return (
    <>
      <div>Login View</div>
      <nav>
        <Link to={"/auth/register"}>
          No tienes Cuenta? Registrate aqui
        </Link>
      </nav>
    </>
  )
}

export default LoginView