const title = (
    <>
        <a style={{ cursor: 'pointer' }}>
            <img className="logo"
                src="https://img.freepik.com/free-vector/logo-with-spoon-fork-design_1363-20.jpg?w=826&t=st=1673279970~exp=1673280570~hmac=b561b305d5769644c0e1d7fb66a2b83b42044578e701223216170f7a420c7837" alt="logo" />
        </a>
    </>
)

const Heading = () => {
    return (
        <div className="heading">
            {title}
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </div>
    )
}

export default Heading;
