const Header = ({ title, heading, verticalMargin }) => {
  return (
    <h1 className={`my-${verticalMargin} fs-${heading} text-center`}>
      {title}
    </h1>
  );
};

Header.defaultProps = {
  title: "This is a header",
  heading: 1,
  verticalMargin: 2,
};

export default Header;
