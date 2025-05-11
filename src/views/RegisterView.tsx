import { Link } from "react-router"

const RegisterView = () => {
  return (
    <>
      <div>Login View</div>
      <nav>
        <Link to={"/auth/login"}>
          Ya tienes Cuenta? Inicia Sesion aqui
        </Link>
      </nav>
    </>
  )
}

export default RegisterView