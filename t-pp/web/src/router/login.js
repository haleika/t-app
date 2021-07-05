const Register = () => import('../views/login/Register.vue')
const Login = ()  => import('../views/login/Login.vue')
export default  [
    {
      path: '/',
      redirect: '/Register'
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
]
