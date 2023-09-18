const Link = ({ route }) => {

    const { name, path } = route;

    return (
        <div className="mr-10 hover:bg-red-300 px-4 py-2 rounded-lg">
            <li><a href={path}>{name}</a></li>
        </div>
    );
};

export default Link;