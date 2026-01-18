export const githubInfoLoader = async () => {
    const res = await fetch("https://dummyjson.com/users/1");
    return res.json();
}