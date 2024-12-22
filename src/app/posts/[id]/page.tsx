const DynamicBook = async (props: any) => {
    console.log(props);
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`);
    console.log(props.params.id)
    const response = await url.json();
    console.log("Single Book", response);

    return (
        <h1 className="text-5xl">
            Dynammic Route <br /> <br />
            {response.userId}<br /> <br />
            {response.id}<br /> <br />
            {response.title}<br /> <br />
            {response.body} 
        </h1>
    );
};

export default DynamicBook