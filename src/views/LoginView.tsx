import { Link } from "react-router"

const LoginView = () => {
  return (
    <>
    <h1 className="text-4xl text-white font-bold text-center">Iniciar Sesión</h1>
      <nav className="mt-10">
        <Link to={"/auth/register"} className="text-center text-white text-lg block">
          ¿No tienes Cuenta? Registrate aqui
        </Link>
      </nav>
    </>
  )
}

export default LoginView