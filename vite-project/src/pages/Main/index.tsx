import Logo from '../../assets/react.svg'

export default function Main() {
  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="" />
          <h1>DT Money</h1>
        </div>
        <button>
          <span>Nova Transação</span>
        </button>
      </header>
    </div>
  )
}
