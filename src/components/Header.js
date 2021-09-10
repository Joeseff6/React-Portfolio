const Header = ({ title, fontSize, verticalMargin }) => {
  return (
    <h1 className={`my-${verticalMargin} fs-${fontSize} text-center`}>
      {title}
    </h1>
  );
};

Header.defaultProps = {
  title: "This is a header",
  fontSize: 1,
  verticalMargin: 2,
};

export default Header;
