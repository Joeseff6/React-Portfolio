const Header = ({ title, fontSize }) => {
  return (
    <h1 className={`my-2 fs-${fontSize} text-center`}>{title}</h1>
  )
}

export default Header;