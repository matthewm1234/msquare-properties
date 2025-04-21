import "./styles/page_loader.css";

const PageLoader = ({ children }) => {
  return (
    <>
      <div className="pageLoader-screen">
        <div>
          <h1 className="farm-text">
            <span className="farm-bit">Msquare</span>
            <span className="smarter-bit">Properties</span>
          </h1>
        </div>
        <div className="line-under-loader"></div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default PageLoader;
