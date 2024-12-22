const DynamicBook = async (props: any) => {
    console.log(props);
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`);
    console.log(props.params.id)
    const response = await url.json();
    console.log("Single Book", response);

    return (
        <h1 className="text-5xl">
            Dynammic Route <br /> <br />
            {response.postId}<br /> <br />
            {response.id}<br /> <br />
            {response.name}<br /> <br />
            {response.email}<br /> <br />
            {response.body}
            
        </h1>
    );
};

export default DynamicBook