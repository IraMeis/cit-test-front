const ErrorPattern = (props) => {
    return (
        <div className="container">
            <header className="jumbotron text-center">
                <h3>
                    {props.message != null ? props.message : "Page not found"}
                </h3>
            </header>
        </div>
    );
};
export default ErrorPattern;
