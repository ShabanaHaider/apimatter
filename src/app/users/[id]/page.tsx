const DynamicBook = async (props: any) => {
    console.log(props);
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`);
    console.log(props.params.id)
    const response = await url.json();
    console.log("Single Book", response);

    return (
        <h1 className="text-5xl">
            Dynammic Route <br /> <br />
            {response.id}<br /> <br />
            {response.name}<br /> <br />
            {response.username}<br /> <br />
            {response.email}<br /> <br />
            {response.address.street}<br /> <br />
            {response.address.suite}<br /> <br />
            {response.address.city}<br /> <br />
            {response.address.zipcode}        



        </h1>
    );
};

export default DynamicBook