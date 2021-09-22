const Header = ({ title, heading, bottomMargin }) => {
  return (
    <h1 className={`mb-${bottomMargin} my-2 fs-${heading} text-center`}>
      {title}
    </h1>
  );
};

Header.defaultProps = {
  title: "This is a header",
  heading: 1,
  bottomMargin: 2,
};

export default Header;
